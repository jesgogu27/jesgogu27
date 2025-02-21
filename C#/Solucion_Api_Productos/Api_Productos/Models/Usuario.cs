namespace Api_Productos.Models
{
    public class Usuario
    {
        public string Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public DateTime fechaNacimiento { get; set; }
        public string cedula { get; set; }
        public float  Saldo { get; set; }

    }
}
