/*Autor: Martin Santillan
Ejercicio 1 IF
Al ingresar una edad que 
sea igual a 15, mostrar el mensaje "niña bonita".
*/

function mostrar()
{

var edad;
var mensaje;

edad=document.getElementById("txtIdEdad").value;

if(edad==15)
{
	mensaje="niña bonita";

	};

	alert(mensaje);



}