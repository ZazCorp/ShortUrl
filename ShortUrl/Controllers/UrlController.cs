using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Interfaces;
using Microsoft.AspNetCore.Mvc;
using MyModels;
using Services.Repositorys;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ShortUrl.Controllers
{
    [Route("api/[controller]")]
    public class UrlController : Controller
    {
        readonly Uow _uow = new Uow();
        private readonly IUrlService _urlService;
        public UrlController(IUrlService urlService)
        {
            this._urlService = urlService;
        }
        // GET: api/values
        [HttpGet]
        public IEnumerable<Url> Get()
        {
            return _uow.UrlRepository.GetAll();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Url Get(int id)
        {
            return _uow.UrlRepository.Get(id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Url url)
        {
            url.ShortUrl = _urlService.CreateUrl(url.SourceUrl);

            using (_uow)
            {
                _uow.UrlRepository.Create(url);
                _uow.Save();
            }
         
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
