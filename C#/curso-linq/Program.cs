// See https://aka.ms/new-console-template for more information
using curso_linq;

Console.WriteLine("Hello, World!");

LinqQueries queries = new LinqQueries();
///Toda La coleccion
//ImprimirValores(queries.TodaLaColeccion());

//ImprimirValores(queries.FechaPublicacion());
//ImprimirValores(queries.PagindasYPalabras());

//Console.WriteLine(queries.Estado());
//Console.WriteLine(queries.FuePublicado());
//ImprimirValores(queries.OperadorContainer());
//ImprimirValores(queries.OrdenarPor());
//ImprimirValores(queries.OrdenarDescendente());
//ImprimirValores(queries.OrdenarPorTake());
//ImprimirValores(queries.Seleccionar());
//ImprimirValores(queries.TresPrimerosDatos());
Console.WriteLine(queries.NumeroLibros());
Console.WriteLine(queries.FechaPublicado());
Console.WriteLine($"Libro con el mayor numero de Paginas: {queries.NumeroPaginas()}");
Console.WriteLine($"Libro con el menor numero de Paginas: {queries.LibroMenorCantPag().Title} - {queries.LibroMenorCantPag().PageCount}");
Console.WriteLine($"Libro con la fecha más reciente: {queries.LibroReciente().Title} - {queries.LibroReciente().PublishedDate}");
Console.WriteLine($"Suma de paginas entre cero y 500: {queries.SumaDePaginasEntre0Y500()}");
Console.WriteLine(queries.librosFechaPosterior());
Console.WriteLine(queries.PromedioPaginas());




void ImprimirValores(IEnumerable<Book> listaDeLibros){
    Console.WriteLine("{0, -60} {1, 15} {2, 15}\n", "Titulo", "N. Paginas", "Fecha Publicacion" );
    foreach(var item in listaDeLibros){
        Console.WriteLine("{0, -60} {1, 15} {2, 15}", item.Title, item.PageCount, item.PublishedDate.ToShortDateString());
    }
}