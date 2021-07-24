/*
Autor: Martin Santillan
Ejercicio While 6
*/

function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);
	
	while(contador<4)
	{
		contador=contador+1;

		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
	}
	
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/5;


}//FIN DE LA FUNCIÓN