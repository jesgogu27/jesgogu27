
using System.Collections.Generic;

namespace Listas
{
    class Listas
    {
        static void Main()
        {
            var paisesUE = new List<string>() { "Alemania", "España", "Suecia", "Italia", "Dinamarca", "Finlandia", "Austria"};

            var puel = paisesUE.Where(p => p.Length > 6).ToArray();

            foreach (var p in puel)
            {
                Console.WriteLine(p);
            }
        }
    }
}
