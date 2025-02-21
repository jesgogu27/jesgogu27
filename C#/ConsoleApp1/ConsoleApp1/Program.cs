using System;

class Saludo
{
    static void Main(string[] args)
    {
        Console.WriteLine($"1290 por 3478 es {1290 * 3478} ");

        int a = 0;
        int b = 0;

        Console.WriteLine("Ingrese Numero a");
        a = Convert.ToInt32( Console.ReadLine() );

        Console.WriteLine("Ingrese Numero b");
        b = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine($"la División de los datos es {a / b}");
        Console.WriteLine($"El resto de la división es {a % b}");
        Console.WriteLine($"La suma de estos numeros es {a + b}");
        Console.WriteLine($"la multiplicación de la suma y resta los numero es {(a + b) * (a - b)}");
        Console.WriteLine($"la resta de los cuadrados es {(a*a) - (b*b)}");
    }
}

