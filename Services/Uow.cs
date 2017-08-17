using System;
using System.Collections.Generic;
using System.Text;
using DataBase;

namespace Services.Repositorys
{
    public class Uow:IDisposable
    {
        private readonly MyContext _db = new MyContext();
        private UrlRepository _urlRepository;

        public UrlRepository UrlRepository => _urlRepository ?? (_urlRepository = new UrlRepository());

        public void Save()
        {
            _db.SaveChanges();
        }

        private bool disposed = false;

        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _db.Dispose();
                }
                this.disposed = true;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
