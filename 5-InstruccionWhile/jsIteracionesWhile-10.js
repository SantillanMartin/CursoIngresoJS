/*
Autor: Martin Santillan
Ejercicio While 10

Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaPositivos;
	var sumaNegativos;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorPares;
	var promedioNegativos;
	var promedioPositivos;
	var diferencia;

	contadorCeros=0;
	contadorNegativos=0;
	contadorPositivos=0;
	sumaNegativos=0;
	sumaPositivos=0;
	contadorPares=0;
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese el numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado<0)
		{
			sumaNegativos=sumaNegativos+numeroIngresado;
			contadorNegativos=contadorNegativos+1;
		}
		else
		{
			if(numeroIngresado==0)
			{
				contadorCeros=contadorCeros+1;
			}
			else
			{
				sumaPositivos=sumaPositivos+numeroIngresado;
				contadorPositivos=contadorPositivos+1;
			}
		}
		
		if(numeroIngresado%2==0)
		{
			contadorPares++;
		}




		respuesta=prompt("desea continuar?");
	}//fin del while


	promedioPositivos=sumaPositivos/contadorPositivos;
	
	promedioNegativos=sumaNegativos/contadorNegativos;

	diferencia=sumaPositivos+sumaNegativos;



	document.write("<br>la suma de positivos es :"+sumaPositivos);
	document.write("<br>la suma de negativos es :"+sumaNegativos);
	document.write("<br>la cantidad de positivos es :"+contadorPositivos);
	document.write("<br>la cantidad de negativos es :"+contadorNegativos);
	document.write("<br>la cantidad de ceros es : "+contadorCeros);
	document.write("<br>la cantidad de numeros pares  es : "+contadorPares);
	document.write("<br> el promedio positivo es : "+promedioPositivos);
	document.write("<br> el promedio negativo  es : "+promedioNegativos);
	document.write("<br> la diferencia entre las operaciones  es : "+diferencia);

}//FIN DE LA FUNCIÓN