// See https://aka.ms/new-console-template for more information
using curso_linq;

Console.WriteLine("Hello, World!");

LinqQueries queries = new LinqQueries();
///Toda La coleccion
//ImprimirValores(queries.TodaLaColeccion());

//ImprimirValores(queries.FechaPublicacion());
ImprimirValores(queries.PagindasYPalabras());


void ImprimirValores(IEnumerable<Book> listaDeLibros){
    Console.WriteLine("{0, -60} {1, 15} {2, 15}\n", "Titulo", "N. Paginas", "Fecha Publicacion" );
    foreach(var item in listaDeLibros){
        Console.WriteLine("{0, -60} {1, 15} {2, 15}", item.Title, item.PageCount, item.PublishedDate.ToShortDateString());
    }
}