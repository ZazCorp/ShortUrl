using System;
using System.Collections.Generic;
using System.Text;
using DataBase;

using Interfaces;
using Microsoft.EntityFrameworkCore;
using MyModels;



namespace Services.Repositorys
{
    public class UrlRepository:IRepository<Url>
    {
        private readonly MyContext _db;

        public UrlRepository(MyContext db)
        {
            _db = db;
        }


        public IEnumerable<Url> GetAll()
        {
            return _db.Urls;
        }

        public Url Get(string id)
        {
            return _db.Urls.Find(id);
        }

        public void Create(Url item)
        {

            _db.Urls.Add(item);
        }

      public void Update(Url sUrl)
      {
        _db.Entry(sUrl).State =EntityState.Modified;;
      }
      
  }
}
