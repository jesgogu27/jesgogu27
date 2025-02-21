
Console.WriteLine((20 + 5) % 6);
Console.WriteLine(15 + (-5) * 6 / 10);


/*
 * definir dos variables enteras y mostrar el resto

int numero1 = 20;
int numero2 = 3;

Console.WriteLine(numero1 / numero2);
Console.WriteLine(numero1 % numero2);
*/

/*
 *Convierte Celsius a Kelvin y a fahrenheit
 
int gradosCelsius;

Console.WriteLine("Ingrese grafdos Celsius: ");
gradosCelsius = Convert.ToInt32(Console.ReadLine());

Console.WriteLine($"Grados Kelvin = {gradosCelsius + 273}");
Console.WriteLine($"Grados Fahrenheit = {gradosCelsius * 18 / 10 + 32}");
*/

/**
 * numero mayor
 
int numero3, numero4;
Console.Write("Ingrese numero uno: ");
numero3 = Convert.ToInt32(Console.ReadLine());
Console.Write("Ingrese numero dos: ");
numero4 = Convert.ToInt32(Console.ReadLine());

if( numero4 >= numero3)
{
    Console.WriteLine($"numero {numero4} es mayor que {numero3}");
}else
    Console.WriteLine($"numero {numero3} es mayor que {numero4}");
*/


/**
 * Numero mayor entre tres numeros ingresaods por el usuario
 */

int numero1, numero2, numero3;

Console.Write("Ingrese Numero: ");
numero1 = Convert.ToInt32(Console.ReadLine());
Console.Write("Ingrese Numero: ");
numero2 =  Convert.ToInt32((Console.ReadLine()));
Console.Write("Ingrese Numero: ");
numero3= Convert.ToInt32((Console.ReadLine()));

if ((numero1 == numero2) && (numero1 == numero3))
{
    Console.WriteLine($"Los  numero son iguales");
}
else
{
    if ((numero2 >= numero3) && (numero2 >= numero1))
    {
        Console.WriteLine($"El numero mayor es {numero1}");
    }
    else
    {
        if ((numero3 >= numero1) && (numero3 >= numero2))
        {
            Console.WriteLine($"El numero {numero3} es el mayor");
        }
        else
        {
            Console.WriteLine($"el numero {numero1} es mayor");
        }
    }
}


    
