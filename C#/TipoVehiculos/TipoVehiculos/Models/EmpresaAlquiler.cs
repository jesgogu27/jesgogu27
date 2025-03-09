using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TipoVehiculos.Models
{
    internal class EmpresaAlquiler : EmpresaTransporte
    {
        public string VehiculosAlquiler()
        {
            StringBuilder sb = new StringBuilder();
            foreach(var item in tiposVehiculos)
            {
                sb.AppendLine( $"El vehiculo para alquilar por la empresa {name} es un {item.name}" );
            }
               return sb.ToString();
        }
    }
}
