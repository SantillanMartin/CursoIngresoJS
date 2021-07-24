/*
Autor: Martin Santillan
Ejercicio While 5
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	var mensaje;
	sexoIngresado = prompt("Ingrese Femenino o Masculino .");

	while(sexoIngresado != "Femenino" && sexoIngresado != "Masculino")
	{
		alert("El sexo ingresado no existe");
		sexoIngresado=prompt("Ingrese Femenino o Masculino");
	}

	mensaje="El sexo ingresado es : "+sexoIngresado;
	document.getElementById("txtIdSexo").value=mensaje;



	
}