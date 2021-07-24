/*Autor: Martin Santillan
Ejercicio SWITCH 9
*/
function mostrar()
{	var porcentajeDeAumento;
	var precioFijo;
	var destinoIngresado;
	var estacionIngresada;
	var aumento;
	var mensaje;
	var precioTotal;
	
	
	destinoIngresado=document.getElementById("txtIdDestino").value;
	estacionIngresada=document.getElementById("txtIdEstacion").value;

switch(estacionIngresada)
{
	case "Invierno":
		switch(destinoIngresado)
		{
			case "Bariloche":
				aumento=20;
			break;
			case "Mar del plata":
				aumento=-20;
			break;
			default:
				aumento=-10;
			break;

		}
	break;	
}

switch(estacionIngresada)
{
	case "Verano":
		switch(destinoIngresado)
		{
			case "Bariloche":
				aumento=-20;
			break;
			case "Mar del plata":
				aumento=20;
			break;
			default:
				aumento=10;
			break;
		}
	
	break;

}

switch(estacionIngresada)
{
	case "Otoño":
	case "Primavera":
		switch(destinoIngresado)
		{
			case "Cordoba":
				aumento=0;
			break;
			default:
				aumento=10;
			break;
		}
	break;
}
precioFijo=15000
porcentajeDeAumento=precioFijo*aumento/100;
precioTotal=precioFijo+porcentajeDeAumento;
mensaje=precioTotal;

alert(mensaje);


}
