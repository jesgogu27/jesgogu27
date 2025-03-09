using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TipoVehiculos.Interfaces;

namespace TipoVehiculos
{
    internal class ImprimirVehiculos
    {
        public void ImprimiendoVehiculos(IVehiculos vehiculos) 
        {
            Console.WriteLine($"Id: {vehiculos.Id}");
            Console.WriteLine($"Nombre: {vehiculos.name}");
        }
    }
}
