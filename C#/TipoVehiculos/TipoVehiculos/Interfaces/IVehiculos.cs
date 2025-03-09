using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TipoVehiculos.Interfaces
{
    internal interface IVehiculos
    {
        int Id { get; set; }
        string name { get; set; }
        string tipoServicios { get; set; }
    }
}
