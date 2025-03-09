// See https://aka.ms/new-console-template for more information
using System.Text;
using TipoVehiculos;
using TipoVehiculos.Models;

Console.WriteLine("Hello, World!");
var imprimirInfo = new ImprimirVehiculos();

var auto = new TiposVehiculos();
auto.name = "auto";
auto.cantidadRuedas = 4;
auto.cantidaPuertas = 4;
auto.cantidadPasajeros = 5;
auto.capacidadCarga = 1000;

var campero = new TiposVehiculos();
campero.name = "campero";
campero.cantidaPuertas = 3;
campero.cantidadRuedas = 4;
campero.cantidadPasajeros = 5;
campero.capacidadCarga = 1500;


var patinetaElectrica = new TiposVehiculos();
patinetaElectrica.name = "Patineta Electrica";
patinetaElectrica.cantidadRuedas = 2;
patinetaElectrica.cantidaPuertas = 0;
patinetaElectrica.cantidadPasajeros = 1;
patinetaElectrica.capacidadCarga = 120;

var empresa1 = new EmpresaTransporte();
empresa1.Id = 1;
empresa1.name = "Empresa1";
empresa1.tipoServicios = "Carga";
empresa1.clase = ClaseVehiculo.privado;

imprimirInfo.ImprimiendoVehiculos(empresa1);


List <TiposVehiculos> vehiculosEmpresa1 = new List<TiposVehiculos>();
vehiculosEmpresa1.Add(auto);
vehiculosEmpresa1.Add(campero);

empresa1.tiposVehiculos = vehiculosEmpresa1;

Console.WriteLine("la empresa tiene " + empresa1.tiposVehiculos.Count + " vehiculos");
Console.WriteLine(empresa1.UserTiposVehiculos());
Console.WriteLine(empresa1.PagarServicio());

var empresa3 = new EmpresaAlquiler();
empresa3.Id = 1;
empresa3.name = "Alquiler Vehiculos";
empresa3.tipoServicios = "transporte pasajeros";
empresa3.clase = ClaseVehiculo.privado;


List<TiposVehiculos> vehiculosAlquiler = new List<TiposVehiculos>();
vehiculosAlquiler.Add(patinetaElectrica);
vehiculosAlquiler.Add(auto);
empresa3.tiposVehiculos = vehiculosAlquiler;

string resultadoVehiculos = empresa3.UserTiposVehiculos();
Console.WriteLine(resultadoVehiculos);
Console.WriteLine(empresa3.PagarServicio());




enum ClaseVehiculo
{
    publico,
    privado,

}
