/*
Autor: Martin Santillan
Ejercicio While 4
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	var mensaje;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");

	while(numeroIngresado>9 || numeroIngresado<0)
	{
		numeroIngresado=prompt("Ingrese un número entre 0 y 9.");
		numeroIngresado=parseInt(numeroIngresado);
	}


	mensaje="El numero ingresado es : "+numeroIngresado;
	document.getElementById("txtIdNumero").value=mensaje;
	
}//FIN DE LA FUNCIÓN