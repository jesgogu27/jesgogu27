using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
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

        public bool Estado(){
            return librosCollection.All(x=> x.Status != null || x.Status != string.Empty);
        }

        public bool FuePublicado(){
            return librosCollection.Any(x => x.Status.Contains("PUBLISH") && x.PublishedDate.Year > 2025);
        }

        public IEnumerable<Book> OperadorContainer() {
            return librosCollection.Where(x => x.Categories.Contains("Python"));
        }

        public IEnumerable<Book> OrdenarPor(){
            return librosCollection.Where(x =>  x.Categories.Contains("Java")).OrderBy(x => x.Title);
        }

        public IEnumerable<Book> OrdenarDescendente(){
            return librosCollection.Where(x => x.PageCount > 450).OrderByDescending(x => x.PageCount);
        }

        public IEnumerable<Book> OrdenarPorTake(){
            return librosCollection.Where(x =>  x.Categories.Contains("Java")).OrderBy(x => x.PublishedDate.Year).Take(3);
        }

        public IEnumerable<Book> Seleccionar(){
            return librosCollection.Where(x =>  x.PageCount > 400).Take(4).Skip(2);
        }

        public IEnumerable<Book> TresPrimerosDatos(){
            return  librosCollection.Take(3)
            .Select(p => new Book() {Title = p.Title, PageCount = p.PageCount });
        }

        public int NumeroLibros(){
            return librosCollection.Count((x => x.PageCount > 200 && x.PageCount < 500));
        }

        public DateTime FechaPublicado(){
            return librosCollection.Min(x => x.PublishedDate);
        }

        
        public int NumeroPaginas(){
            return librosCollection.Max(x => x.PageCount);
        }

        public Book LibroMenorCantPag(){
            return librosCollection.Where(x => x.PageCount > 0).MinBy(x => x.PageCount);
        }
    

        public Book LibroReciente(){
            return librosCollection.MaxBy(x => x.PublishedDate);
        }

        public int SumaDePaginasEntre0Y500(){
            return librosCollection.Where(x => x.PageCount >= 0 && x.PageCount <=500).Sum(p => p.PageCount);
        }

        public string librosFechaPosterior(){
            return librosCollection.Where(p => p.PublishedDate.Year > 2015).Aggregate("", (TitulosLibros, next) =>
                                                                            {
                                                                                if(TitulosLibros != string.Empty){
                                                                                    TitulosLibros += "-" + next.Title;
                                                                                } else {
                                                                                    TitulosLibros += next.Title;
                                                                                }
                                                                                return TitulosLibros;
                                                                            });
        }

        public double PromedioPaginas(){
            return librosCollection.Where(x => x.PageCount >0).Average(x => x.PageCount);
        }

        //Agrupamiento de datos
        public IEnumerable<IGrouping<int, Book>> AgrupadosPorYears(){
            return librosCollection.Where( x => x.PublishedDate.Year >2000 ).GroupBy( x => x.PublishedDate.Year);
        }
    }
}