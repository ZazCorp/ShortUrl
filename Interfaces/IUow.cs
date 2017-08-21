using System;
using System.Collections.Generic;
using System.Text;
using MyModels;

namespace Interfaces
{
    public interface IUow : IDisposable
    {
        void Save();
        //UrlRepository UrlRepository { get; set; }
    }
}
