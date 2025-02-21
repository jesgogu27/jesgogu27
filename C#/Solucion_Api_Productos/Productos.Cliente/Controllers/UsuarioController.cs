using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using NuGet.Protocol;
using Productos.Cliente.Models;
using System.Text;
using System.Text.Json.Serialization;

namespace Productos.Cliente.Controllers
{
    public class UsuarioController : Controller
    {
        private readonly HttpClient _httpClient;

        public UsuarioController(IHttpClientFactory httpClientFactory)
        {
            _httpClient = httpClientFactory.CreateClient();
            _httpClient.BaseAddress = new Uri("http://localhost:5191");



        }
        public async Task<IActionResult> Index()
        {
            var response = await _httpClient.GetAsync("/api/Usuarios");

            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                var productos = JsonConvert.DeserializeObject<IEnumerable<UsuarioViewModel>>(content);
                return View("Index", productos);
            }

            return View(new List<UsuarioViewModel>());
            
        }


        public IActionResult Crear()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Crear(UsuarioViewModel usuario)
        {
            if (ModelState.IsValid)
            {
                var json = JsonConvert.SerializeObject(usuario);
                var content = new StringContent(json, Encoding.UTF8, "application/json");

                var response = await _httpClient.PostAsync("/api/Usuarios", content);
                if (response.IsSuccessStatusCode)
                {
                    return RedirectToAction("Index");
                }
                else
                {
                    ModelState.AddModelError(string.Empty, "Error Al crear Producto");
                }
            }

            return View(usuario);
        }


             //[HttpPost]
        public async Task<IActionResult> Editar(int? id)
        {
            var response = await _httpClient.GetAsync($"/api/Usuarios?id={id}");

            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                var usuarios = JsonConvert.DeserializeObject<List<UsuarioViewModel>>(content);

                if (usuarios != null)
                {
                    var usuario = usuarios.FirstOrDefault();
                    return View(usuario);
                } 
                else {ModelState.AddModelError(string.Empty, "Error Al crear Producto"); }
               
            }
            else
            {
                return RedirectToAction("Index");
            }
            return RedirectToAction("Index");

        }

        [HttpPost]
        public async Task<IActionResult> Editar(int id, UsuarioViewModel usuario)
        {
            if (ModelState.IsValid)
            {
                var json = JsonConvert.SerializeObject(usuario);
                var content = new StringContent(json, Encoding.UTF8, "application/json");

                var response = await _httpClient.PutAsync($"/api/Usuarios?id={id}", content);

                if (response.IsSuccessStatusCode)
                {
                    return RedirectToAction("Index", new { id });
                }
                else
                {
                    ModelState.AddModelError(string.Empty, "Error al Actualizar Producto");
                }
            }
            return View(usuario);
           
        }




        public async Task<IActionResult> Detalle(int? id)
        {
            var response = await _httpClient.GetAsync($"/api/Usuarios?id={id}");
            Console.WriteLine(response);
            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                var usuario = JsonConvert.DeserializeObject<UsuarioViewModel>(content);

                return View(usuario);
            }
            else
            {
                return RedirectToAction("Detalle");
            }

        }

        public async Task<IActionResult> Eliminar(int id) {
            var response = await _httpClient.DeleteAsync($"/api/Usuarios?id={id}");
            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                var usuario = JsonConvert.DeserializeObject<UsuarioViewModel>(content);

                return RedirectToAction("Index");
            }
            else
            {
                TempData["Error"] = "Error al Elimnar Producto";
                return RedirectToAction("Index");
            }

        }
    }
}
