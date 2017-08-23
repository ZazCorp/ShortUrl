using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using DataBase;
using Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using MyModels;
using Services;
using Services.Repositorys;

namespace ShortUrl
{
  public class Startup
  {
    public Startup(IHostingEnvironment env)
    {
      var builder = new ConfigurationBuilder()
          .SetBasePath(env.ContentRootPath)
          .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
          .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
          .AddEnvironmentVariables();
      Configuration = builder.Build();
    }

    public IConfigurationRoot Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      #region База данных

      //получаем строку подключения
      var connectionString = Configuration.GetConnectionString("DataAccessPostgreSqlProvider");
      //регистрация контекста
      services.AddDbContext<MyContext>(options =>
          options.UseNpgsql(connectionString)
      );

      services.AddTransient<IUrlService, UrlService>();

      #endregion
      // Add framework services.
      services.AddMvc();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, MyContext db)
    {

      #region Миграция

      try
      {
        if (!db.Database.EnsureCreated())
          db.Database.Migrate();
      }
      catch (Exception e)
      {
        Console.WriteLine(e);
        throw;
      }


      #endregion


      loggerFactory.AddConsole(Configuration.GetSection("Logging"));
      loggerFactory.AddDebug();

     
      app.Use(async (context, next) =>
          {
            await next();

            if (context.Response.StatusCode == 404 &&
                !Path.HasExtension(context.Request.Path.Value) &&
                !context.Request.Path.Value.StartsWith("/api/"))
            {
              context.Request.Path = "/index.html";
              await next();
            }
          });

      app.UseStaticFiles();

      //app.UseMvcWithDefaultRoute();
      //app.UseDefaultFiles();
      //app.UseStaticFiles();


      app.UseMvc();
    }
  }
}
