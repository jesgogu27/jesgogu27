
using System.Text;
using System.Timers;
using TipoVehiculos.Interfaces;


namespace TipoVehiculos.Models
{
    internal class EmpresaTransporte: Pagar, IVehiculos
    {
        private string _Nombre;
        public int Id { get; set; }
        public string name { get; set; }
        public string tipoServicios { get; set; }
        public ClaseVehiculo clase;
        public List<TiposVehiculos> tiposVehiculos;

        public override string Nombre {
            get
            {
                return _Nombre;
            }
            set
            {
                _Nombre = value.Trim();
            }
        }

        public override string PagarServicio()
        {
            return $"El servicio de {name} ha sido pagado por el cliente";
        }

        public string UserTiposVehiculos()
        {
            StringBuilder sb = new StringBuilder();
            foreach (var item in tiposVehiculos)
            {
                sb.AppendLine($"la empresa {name} tiene un vehiculo que carga hasta {item.capacidadCarga} kilos");
            }
            return sb.ToString();
        }
    }
}
