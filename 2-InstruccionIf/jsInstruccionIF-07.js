/*
Autor: Martin Santillan
Ejercicio IF 7

Al ingresar una edad 
menor a 18 años y un estado 
civil distinto a "Soltero", 
mostrar el siguiente 
mensaje: 'Es muy pequeño para NO ser soltero.'
*/

function mostrar()
{

	var edadIngresada;
	var estadoCivil;
	var mensaje;

	edadIngresada=document.getElementById("txtIdEdad").value;
	
	estadoCivil=document.getElementById("estadoCivil").value;

	if(edadIngresada<18 || estadoCivil!="Soltero")
	{
		mensaje="Es muy pequeño para NO ser soltero";
	}


	alert(mensaje);


}