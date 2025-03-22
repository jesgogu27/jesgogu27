
using System.Collections.Generic;
using System.Runtime.InteropServices;

namespace ClaseDeClases
{
    public class Program
    {

        
        static void Main(string[] args)
        {
             
            var auto = new TiposVehiculos();
            auto.cantidadRuedas = 4;
            auto.cantidaPuertas = 4;
            auto.cantidadPasajeros = 5;
            auto.capacidadCarga = 1000;
            

            var campero = new TiposVehiculos();
            campero.cantidaPuertas = 3;
            campero.cantidadRuedas = 4;
            campero.cantidadPasajeros = 5;
            campero.capacidadCarga = 1500;


            var empresa1 = new EmpresaTransporte();
            empresa1.Id = 1;
            empresa1.name = "Empresa1";
            empresa1.tipoServicios = "Carga";
            empresa1.clase = ClaseVehiculo.privado;
            
            List<TiposVehiculos> vehiculosEmpresa1 = new List<TiposVehiculos>();
            vehiculosEmpresa1.Add(auto);
            vehiculosEmpresa1.Add(campero);

            empresa1.tiposVehiculos = vehiculosEmpresa1;




        }
    }

    class EmpresaTransporte {
        public int Id;
        public string name;
        public string tipoServicios;
        public  ClaseVehiculo clase;
        public List<TiposVehiculos> tiposVehiculos;
        
    }

    enum ClaseVehiculo
    {
        publico,
        privado,

    }

   public  class TiposVehiculos
    {
      public int cantidadRuedas;
      public int cantidadPasajeros;
      public int cantidaPuertas;
      public int capacidadCarga;


    }
}

