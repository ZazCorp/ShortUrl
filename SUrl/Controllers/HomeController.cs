using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataBase;
using Interfaces;
using Microsoft.AspNetCore.Mvc;
using MyModels;
using Services.Repositorys;

namespace SUrl.Controllers
{
  public class HomeController : Controller
  {
    private readonly Uow _uow;
    public HomeController( MyContext db)
    {
      
      _uow = new Uow(db);
    }
    public IActionResult Index()
    {
      return View();
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
    [HttpGet("{id}", Name = "GetUrl")]
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
  }
}
