using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using DataBase;
using Interfaces;
using Microsoft.AspNetCore.Hosting.Internal;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Net.Http.Headers;
using MyModels;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Services.Repositorys;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Test.Controllers
{
  [Route("api/[controller]")]
  public class UrlController : Controller
  {
    private readonly Uow _uow;
    private readonly IUrlService _urlService;
    public UrlController(IUrlService urlService, MyContext db)
    {
      _urlService = urlService;
      _uow = new Uow(db);
    }
    // GET: api/values
    [HttpGet]
    public IEnumerable<Url> Get()
    {
      string Id = "";

     Request.Cookies.TryGetValue("keyZaz", out Id);
    
      var result = _uow.UrlRepository.GetAll().Where(x => x.IdUser == Id);
      return result;
    }

    // GET api/values/5
    [HttpGet("{id}",Name = "GetUrl")]
    public IActionResult Get(string id)
    {
      var sUrl = _uow.UrlRepository.Get(id);
      
      return Redirect(sUrl.SourceUrl);
    }

    // POST api/values
    [HttpPost]
    public IActionResult Post([FromBody]Url url)
    {
     
      _uow.UrlRepository.Create(url);
      _uow.Save();

      return CreatedAtRoute("GetUrl", new { id = url.IdUrl }, url);

    }

    // PUT api/values/5
    [HttpPut]
    public void Put([FromBody]Url url)
    {
      _uow.UrlRepository.Update(url);
      _uow.Save();
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
