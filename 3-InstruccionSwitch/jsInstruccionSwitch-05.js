/*
Autor: Martin Santillan
Ejercicio SWITCH 5
*/
function mostrar()
{
	
var horaDelDia;
var mensaje;

horaDelDia=document.getElementById("txtIdHora").value;

switch(horaDelDia)
{
	case "7":
	case "8":
	case "9":
	case "10":
	case "11":
		mensaje="Es de mañana";
	break;
	default:
		mensaje="No es de mañana";
	break;
}

alert(mensaje);

}