using System;

namespace ArrayAritmetica
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] array =  new int [4];

            for (int i = 0; i < array.Length; i++)
            {
                Console.WriteLine("ingrese Numero " );
                array [i] = Convert.ToInt32(Console.ReadLine()) ;
            }

            int acumulador = 0;
            for (int i = 0; i < array.Length; i++)
            {
                acumulador += array [i] ;
            }
            Console.WriteLine($"La media aritmetica es {acumulador / (array.Length)}");


        }
    }
}
