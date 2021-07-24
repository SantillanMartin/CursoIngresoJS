/*
Autor: Martin Santillan
Ejercicio SWITCH 3
*/
function mostrar()
{
	var mesDelAño;
	var mensaje;

	mesDelAño=document.getElementById("txtIdMes").value;


	switch(mesDelAño)
	{
		case "Febrero":
			mensaje="Este mes no tiene mas de 29 dias";
		break;

		default:
			mensaje="Este mes tiene 30 o mas dias ";
		break;
	}


	alert(mensaje);
}