using System;
using Microsoft.EntityFrameworkCore;
using MyModels;

namespace DataBase
{
    public class MyContext:DbContext
    {
        public MyContext(DbContextOptions<MyContext> options) :base(options)
        {

        }

        //public MyContext()
        //{
        //}

        public DbSet<Url> Urls { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Url>().HasKey(x => x.IdUrl);

            base.OnModelCreating(builder);
        }

        public override int SaveChanges()
        {
            ChangeTracker.DetectChanges();           

            return base.SaveChanges();
        }
    }
}
