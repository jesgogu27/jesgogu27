using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace curso_linq
{
    public class LinqQueries
    {
        private List<Book> librosCollection = new List<Book>();
        public LinqQueries() {
            using(StreamReader reader = new StreamReader("books.json"))
            {
                string json = reader.ReadToEnd();
                this.librosCollection = System.Text.Json.JsonSerializer.Deserialize<List<Book>>(json, new System.Text.Json.JsonSerializerOptions() { PropertyNameCaseInsensitive = true }) ?? Enumerable.Empty<Book>().ToList();
            }
            
        }

        public IEnumerable<Book> TodaLaColeccion() {
            return librosCollection;
        }

        public IEnumerable<Book> FechaPublicacion(){
            //metodos de extension
            //return librosCollection.Where(x =>  x.PublishedDate.Year  > 2000 );

            ///Query expresion
            return from l in librosCollection  where l.PublishedDate.Year > 2000 select l; 
        }

        public IEnumerable<Book> PagindasYPalabras(){
            //extension methods
            //return librosCollection.Where(x => x.PageCount >250 && x.Title.Contains("in Action"));

            //Query Expresion
            return from l in librosCollection where l.PageCount >250 && l.Title.Contains("in Action") select l;
        }
    }
}