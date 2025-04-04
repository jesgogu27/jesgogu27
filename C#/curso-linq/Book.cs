using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace curso_linq
{
    public class Book
    {
        public string? Title {get; set;}
        public int PageCount {get; set;}
        public DateTime PublishedDate {get; set;}
        public UrlAttribute? ThumbnaiUrl {get; set;}
        public string? ShortDescription {get; set;}
        public string? Status {get; set;}
        public string[]? Authors {get; set;}
        public string[]? Categories {get; set;}

    }
}