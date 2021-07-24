/*
Autor: Martin Santillan
Ejercicio SWITCH 7
*/
function mostrar()
{
	var destinoIngresado; 
	var mensaje;
	
	destinoIngresado=document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje="El punto cardinal de este lugar es el Oeste";
		break;
		case "Mar del plata":
			mensaje="El punto cardinal de este lugar es el Este";
		break;
		case "Ushuaia":
			mensaje="El punto cardinal de este lugar es el Sur";
		break;
		default:
			mensaje="El punto cardinal de este lugar es el Norte";
		break;
	}

	alert(mensaje);

}