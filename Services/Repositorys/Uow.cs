using System;
using System.Collections.Generic;
using System.Text;
using DataBase;
using Interfaces;

namespace Services.Repositorys
{
    public class Uow:IDisposable
    {
        private readonly MyContext _db;
        private UrlRepository _urlRepository;

        public Uow(MyContext db)
        {
            _db = db;
        }

        public UrlRepository UrlRepository => _urlRepository ?? (_urlRepository = new UrlRepository(_db));

        public void Save()
        {
            _db.SaveChanges();
        }

        private bool _disposed = false;

        public virtual void Dispose(bool disposing)
        {
            if (!this._disposed)
            {
                if (disposing)
                {
                    _db.Dispose();
                }
                this._disposed = true;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
