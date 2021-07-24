/*
Autor: Martin Santillan
Ejercicio SWITCH 8
*/
function mostrar()
{
	var destinoIngresado; 
	var mensaje;
	
	destinoIngresado=document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje="En este destino hace frio";
		break;
		default:
			mensaje="En este destino hace calor";
		break;
	}

	alert(mensaje);

}

