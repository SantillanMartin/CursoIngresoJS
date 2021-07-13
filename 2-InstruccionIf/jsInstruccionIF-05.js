/*Autor: Martin Santillan
Ejercicio IF 5
Al ingresar una edad solo debemos informar
 si la persona NO es adolescente.

*/

function mostrar()
{
 
	var edad;
	var mensaje;
	
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if(edad<13 || edad>18)
		{
			mensaje="no es adolescente"



		}


		alert(mensaje);
}