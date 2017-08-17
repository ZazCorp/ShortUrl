using System;
using System.ComponentModel.DataAnnotations;

namespace MyModels
{
    public class Url
    {
        [Key]
        public int IdUrl { get; set; }

        public int IdUser { get; set; }

        public string SourceUrl { get; set; }

        public string ShortUrl { get; set; }

    }
}
