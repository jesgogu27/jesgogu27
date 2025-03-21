// See https://aka.ms/new-console-template for more information
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Security.Cryptography.X509Certificates;

class Program {
  public static void Main (string[] args) {

    List<Animal> animales = new List<Animal>();
    animales.Add(new Animal() { Nombre = "Hormiga", Color = "Rojo" });
    animales.Add(new Animal() { Nombre = "Lobo", Color = "Gris" });
    animales.Add(new Animal() { Nombre = "Elefante", Color = "Gris" });
    animales.Add(new Animal() { Nombre = "Pantegra", Color = "Negro" });
    animales.Add(new Animal() { Nombre = "Gato", Color = "Negro" });
    animales.Add(new Animal() { Nombre = "Iguana", Color = "Verde" });
    animales.Add(new Animal() { Nombre = "Sapo", Color = "Verde" });
    animales.Add(new Animal() { Nombre = "Camaleon", Color = "Verde" });
    animales.Add(new Animal() { Nombre = "Gallina", Color = "Blanco" });

    // Escribe tu código aquí
    // Retorna los datos de la colleción Animales agrupada por color
    
    var animal = animales.GroupBy( item => item.Color);
    foreach( var i in animal){
        Console.WriteLine($"Grupo: {i.Key}");
        Console.WriteLine("{0, -25} {1,15}\n", "Animal", "Color");
        foreach(var y in i){
            Console.WriteLine("{0, -25} {1,15}\n", y.Nombre, y.Color);
        }
    }

  }

  public class Animal
  {
    public string Nombre {get;set;}
    public string Color {get;set;}
  }


}