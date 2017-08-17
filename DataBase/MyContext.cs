using System;
using Microsoft.EntityFrameworkCore;
using MyModels;

namespace DataBase
{
    public class MyContext:DbContext
    {
        public MyContext()
        {
        }

        public MyContext(DbContextOptions<MyContext> options) :base(options)
        {
        }

        public DbSet<Url> Urls { get; set; }
    }
}
