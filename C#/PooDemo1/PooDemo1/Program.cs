// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

Portatil portatilAcer = new Portatil();
Portatil portatilHp = new Portatil();
Monitor monitorHP = new Monitor();
Monitor monitorAcer = new Monitor();


monitorHP.Marca = "HP";
monitorHP.Largo = "16 pulgadas";
monitorHP.borde = false;

monitorAcer.Marca = "Acer";
monitorAcer.Largo = "14 pulgadas";
monitorAcer.borde = true;


List<Monitor> monitorCurvo = new List<Monitor>();
monitorCurvo.Add(monitorHP);
monitorCurvo.Add(monitorAcer);

portatilAcer.Monitores = monitorCurvo;





portatilAcer.Color = "Azul";


portatilHp.Color = "Gris";


portatilAcer.Monitores.ForEach(item => Console.WriteLine($"{item.Marca}"));
portatilAcer.Monitores.ForEach(item => Console.WriteLine($"{item.Largo}"));
portatilAcer.Monitores.ForEach(item => Console.WriteLine($"{item.borde}"));


Console.WriteLine($"El portatil Acer es de color { portatilAcer.Color }");
Console.WriteLine($"El portatil Hp es de color {portatilHp.Color}");




class Portatil
{
    public string Color;
    public string Marca;
    public double Largo;
    public short NumeroPuertosUSB;
    public bool TieneStickers;
    public List<Monitor> Monitores;
}

class Monitor
{
    public string Marca;
    public string Largo;
    public bool borde;
}