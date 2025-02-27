
using System;
using System.Timers;

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

 */

/**
 * Pide el nombre de la semana y lo devuelve. 
 * En caso de dato errado lo informa


Console.WriteLine("Ingrese el numero de la semana que desea: ");
int numeroSemana = Convert.ToInt32(Console.ReadLine());

switch(numeroSemana)
{
    case 1:
        Console.WriteLine("lunes");
        break;
    case 2:
        Console.WriteLine("Martes");
        break;
    case 3:
        Console.WriteLine("Miercoles");
        break;
    case 4:
        Console.WriteLine("Jueves");
        break;
    case 5:
        Console.WriteLine("Viernes");
        break;
    case 6:
        Console.WriteLine("Sabado");
        break;
    case 7:
        Console.WriteLine("Domingo");
        break;
    default:
        Console.WriteLine("Dia no existe");
        break;
}
 */

/**
 * El operador Ternario
 */

//Console.WriteLine("Ingrese Numero: ");


/**
 * bucle while

Console.WriteLine("Ingrese Numerador: ");
int numerador =  Convert.ToInt32(Console.ReadLine());

Console.WriteLine("Ingrese Divisor: ");
int divisor = Convert.ToInt32(Console.ReadLine());

while (divisor == 0 )
{
    Console.WriteLine("Ingrese Divisor: ");
    divisor = Convert.ToInt32(Console.ReadLine());

}

Console.WriteLine($"la division es  { numerador /  divisor }");



Console.WriteLine("Ingrese Contraseña: ");
int contrasena = Convert.ToInt32(Console.ReadLine());

while (contrasena != 1234)
{
    Console.WriteLine("Error de contraseña,por favor vuelva a ingresarla ");
    contrasena = Convert.ToInt32(Console.ReadLine());
}

Console.WriteLine($"Bienvenido");
 */

/**
 *do while

int contrasena;
do
{

    Console.WriteLine("Ingrese Contraseña: ");
     contrasena = Convert.ToInt32(Console.ReadLine());
        
}
while (contrasena != 1234);
Console.WriteLine("Bienvenido");
*/

/**
 * bucle for
 

for (int i = 1; i < 21; i++)
    Console.WriteLine(i);

for (int i = 2; i <18;  i= i +2)
    Console.WriteLine($"*{i}");

for (int i = 15; i > 4; i = i-2)
    Console.WriteLine(i);

*/

/**
try
{
    Console.WriteLine("Ingrese numerador: ");
    int numerador1 = Convert.ToInt32(Console.ReadLine());
    Console.WriteLine("Ingrese Numerador: ");
    int denominador1 = Convert.ToInt32(Console.ReadLine());

} catch (FormatException e)
{
    Console.WriteLine("El número ingresado no es valido" + e.Message);
}
catch (DivideByZeroException e)
{
    Console.WriteLine("Error división  por cero" + e.Message);
}
Console.WriteLine("el programa continua");
*/

/**
 * optimizando memoria
 */

yearOld, age, countryPeople
Console.WriteLine();