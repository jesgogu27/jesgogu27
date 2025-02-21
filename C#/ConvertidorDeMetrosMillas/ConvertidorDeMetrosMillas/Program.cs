using System;

namespace ConvertidorDeMetrosMillas
{
    //Convierte metros a millas
     class Convertidor
    {
        static void Main(string[] args)
        {
            double milla = 1609.344;
            double metros;

            Console.WriteLine("Ingrese la cantidad de kilometros que desea convertr en  millas: ");
            metros = Convert.ToDouble(Console.ReadLine());

            Console.WriteLine($"La cantidad de millas son: {metros / milla}");
        }
    }
    //Realizado  por Jesus Gonzalez
}
