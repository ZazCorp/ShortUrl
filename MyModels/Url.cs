using System;
using System.ComponentModel.DataAnnotations;

namespace MyModels
{
  public class Url
  {
    [Key]
    public string IdUrl { get; set; }

    public string IdUser { get; set; }

    public string SourceUrl { get; set; }

    public string ShortUrl { get; set; }

    public long Count { get; set; }

    public DateTime? DateCreate { get ; set; }

  }
}
