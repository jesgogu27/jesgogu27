using ProductosWeb.Repositorio.IRepositorio;
using System.Collections;

namespace ProductosWeb.Repositorio
{
    public class Repositorio<T> : IRepositorio<T> where T : class
    {
        //Injeccion de dependencias
        private readonly IHttpClientFactory _httpClientFactory;

        public Repositorio(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }



        public Task<bool> ActualizarProductoAsync(string url, T productoActualizar)
        {
            throw new NotImplementedException();
        }

        public Task<bool> CrearProductoAsync(string url, T productoCrear)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteProductoAsync(string url, int Id)
        {
            throw new NotImplementedException();
        }

        public Task<T> GetAsync(string url, int Id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable> GetBuscarAsync(string url, int Id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable> GetTodoAsync(string url)
        {
            throw new NotImplementedException();
        }
    }
}
