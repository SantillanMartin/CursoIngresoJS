/*
Autor: Martin Santillan
Ejercicio SWITCH 2
*/
function mostrar()
{
	var mesDelAño;
	var mensaje;


	mesDelAño=document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Julio":
		case "Agosto":
			mensaje="Abrigate que hace frio";
		break;
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje="Falta para el invierno";
		break;
		default:
			mensaje="Ya pasamos el frio, ahora calor!!!.";
		break;
	}

	alert(mensaje);
}