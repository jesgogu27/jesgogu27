using System.Collections;

namespace ProductosWeb.Repositorio.IRepositorio
{
    public interface IRepositorio<T> where T : class
    {
        Task<IEnumerable> GetTodoAsync(string url);//obtengo todas las categorias
        Task<T> GetAsync(string url, int Id);//obtengo una sola
        Task<IEnumerable> GetBuscarAsync(string url, int Id);//buscador
        Task<bool> CrearProductoAsync(string url, T productoCrear);//crear
        Task<bool> ActualizarProductoAsync(string url, T productoActualizar);//Actualizar
        Task<bool> DeleteProductoAsync(string url, int Id);//borrar



    }
}
