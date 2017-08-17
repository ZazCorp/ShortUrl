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
        private MyContext _db;

        public UrlRepository(MyContext db)
        {
            _db = db;
        }

        public UrlRepository()
        {
        }

        public IEnumerable<Url> GetAll()
        {
            return _db.Urls;
        }

        public Url Get(int id)
        {
            return _db.Urls.Find(id);
        }

        public void Create(Url item)
        {
            _db.Urls.Add(item);
        }
       
    }
}
