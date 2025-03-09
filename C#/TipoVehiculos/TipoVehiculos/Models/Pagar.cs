using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TipoVehiculos.Models
{
    internal abstract class Pagar
    {
        public abstract string PagarServicio();
        public abstract string Nombre { get; set; }
    }
}
