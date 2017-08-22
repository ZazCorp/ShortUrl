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
using MyModels;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Services.Repositorys;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ShortUrl.Controllers
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
      var result = _uow.UrlRepository.GetAll();
      return result;
    }

    // GET api/values/5
    [HttpGet("{id}")]
    public IActionResult Get(string id)
    {
      var sUrl = _uow.UrlRepository.Get(id);
      sUrl.Count++;
      _uow.UrlRepository.Update(sUrl);
      _uow.Save();

      return Redirect(sUrl.SourceUrl);
    }

    // POST api/values
    [HttpPost]
    public IActionResult Post([FromBody]Url url)
    {
      var strUrl = HttpContext.Request.GetDisplayUrl();
      var sUrl = _urlService.CreateUrl(url.SourceUrl);
      url.IdUrl = sUrl;
     
      url.ShortUrl = strUrl+"/"+sUrl;
      url.DateCreate = DateTime.Now;
      

      _uow.UrlRepository.Create(url);
      _uow.Save();


      return Json(url.ShortUrl);

    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public void Put([FromBody]Url url)
    {
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
