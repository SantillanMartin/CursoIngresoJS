/*
Autor: Martin Santillan
Ejercicio IF 3
Al ingresar una edad 
debemos informar si la persona es mayor de edad, 
sino informar que es un menor de edad.

*/


function mostrar()
{

	
var edad;
var mensaje;

edad=document.getElementById("txtIdEdad").value;

if(edad>17)
{
	mensaje="Es mayor de edad"

	}
	else{

		mensaje="Es menor de edad";



	}

	


	alert(mensaje);


}