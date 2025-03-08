
using System.Text;


namespace TipoVehiculos.Models
{
    internal class EmpresaTransporte
    {
        public int Id;
        public string name;
        public string tipoServicios;
        public ClaseVehiculo clase;
        public List<TiposVehiculos> tiposVehiculos;


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
