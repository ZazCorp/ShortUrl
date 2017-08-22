using System;
using System.Text;
using Interfaces;
using Services.Repositorys;

namespace Services
{
  public class UrlService : IUrlService
  {
    private static char[] _base62chars =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
          .ToCharArray();

    private static Random _random = new Random();
    public string CreateUrl(string sourceUrl)
    {

      return GetBase62(5);
    }


    public  string GetBase62(int length)
    {
      var sb = new StringBuilder(length);

      for (int i = 0; i < length; i++)
        sb.Append(_base62chars[_random.Next(62)]);

      return sb.ToString();
    }


  }
}
