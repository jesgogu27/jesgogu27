using System;
using System.Collections.Generic;
using System.Linq;

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
    // filtra todos los animales que sean de color verde que su nombre inicie con una vocal.
    
    var result = Imprimir(animales);

    foreach(var x in result) {
        Console.WriteLine(x.Nombre + ", " + x.Color);
    }
  }

    public static List<Animal> Imprimir(List<Animal> animals){

        return animals.Where(x => x.Color.Contains("Verde") && "AEIOUaeiou".Contains(x.Nombre[0])).ToList();
    }
  public class Animal
  {
    public string Nombre {get;set;}
    public string Color {get;set;}
  }
}