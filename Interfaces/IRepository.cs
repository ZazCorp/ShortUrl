﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Interfaces
{
    public interface IRepository<T> where T : class
    {
        IEnumerable<T> GetAll();
        T Get(string id);
        void Create(T item);
       
    }
}
