using System.ComponentModel.DataAnnotations;

namespace CrudNet8MVC.Models
{
    public class Contacto
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "El nombre es obligatorio")]
        public string Name { get; set; }

        [Required(ErrorMessage = "El telefono es obligatorio")]
        public string phone { get; set; }

        [Required(ErrorMessage = "El Celular es obligatorio")]
        public string celular { get; set; }

        [Required(ErrorMessage = "El email es obligatorio")]
        public string email { get; set; }

        public DateTime FechaCreacion { get; set; }
    }
}
