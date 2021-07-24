/*
Autor: Martin Santillan
Ejercicio SWITCH 4
*/
function mostrar()
{
	var mesDelAño;
	var mensaje;

	mesDelAño=document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Febrero":
			mensaje="El mes seleccionado tiene 28 dias";
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje="El mes seleccionado tiene 30 dias";
		break;
		default:
			mensaje="El mes seleccionado tiene 31 dias";
		break;
		
	}

	alert(mensaje);



}//FIN DE LA FUNCIÓN