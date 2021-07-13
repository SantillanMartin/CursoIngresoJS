/*
Autor: Martin Santillan
Ejercicio IF 2
Al ingresar una edad 
debemos informar solo si la persona es mayor de edad
*/

function mostrar()
{
	
var edad;
var mensaje;

edad=document.getElementById("txtIdEdad").value;

if(edad>17)
{
	mensaje="Es mayor de edad"

	};


	alert(mensaje);

}