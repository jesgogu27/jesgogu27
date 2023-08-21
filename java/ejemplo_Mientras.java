/* Este codigo ha sido generado por el modulo psexport 20230113-w32 de PSeInt.
Es posible que el codigo generado no sea completamente correcto. Si encuentra
errores por favor reportelos en el foro (http://pseint.sourceforge.net). */

// En java, el nombre de un archivo fuente debe coincidir con el nombre de la clase que contiene,
// por lo que este archivo debería llamarse "EJEMPLO_MIENTRAS.java."

import java.io.*;

public class ejemplo_Mientras {

	public static void main(String args[]) throws IOException {
		BufferedReader bufEntrada = new BufferedReader(new InputStreamReader(System.in));
		int contador;
		System.out.println("Introduce desde que numero iniciamos el conteo para llegar al 30: ");
		contador = Integer.parseInt(bufEntrada.readLine());
		while (contador<=30) {
			System.out.println("Numero: "+contador);
			contador = contador+1;
		}
	}


}

