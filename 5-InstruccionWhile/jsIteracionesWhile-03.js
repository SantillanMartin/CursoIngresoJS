/*
Autor: Martin Santillan
Ejercicio While 3
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	
	claveIngresada = prompt("Ingrese la clave para acceder");

	while(claveIngresada!="utn750")
	{
		alert("La clave ingresada es incorrecta");
		claveIngresada=prompt("Ingrese la clave para acceder");
	}
	
}
