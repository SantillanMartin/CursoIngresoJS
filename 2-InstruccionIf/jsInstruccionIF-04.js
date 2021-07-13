/*
Autor: Martin Santillan
Ejercicio IF 4
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
*/


function mostrar()
{
	
var edad;
var mensaje;

edad=document.getElementById("txtIdEdad").value;
edad=parseInt(edad);

if(edad<18 && edad>12)
{
	mensaje="es adolescente"

	}

	alert(mensaje);

}