/*Autor: Martin Santillan
Ejercicio 6 IF
Al ingresar una edad debemos informar
 si la persona es mayor de edad (mas de 18 años) 
o adolescente (entre 13 y 17 años) o niño (menor a 13 años).

*/

function mostrar()
{
	
	var edad;
	var mensaje;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

		if(edad>17)
		{
			mensaje="es mayor de edad"; 

		}
		else
		{
			if(edad<12)
			{
				mensaje="es un niño";

			}else
			{
				mensaje="es un adolescente";
			}
		}

		alert(mensaje);
}