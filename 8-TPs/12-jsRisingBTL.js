/*
Autor: Martin Santillan
TP N°12
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
	var sueldoBruto;
	var legajo;
	var nacionalidad;

//A. EDAD.

	edadIngresada=prompt("Ingrese su edad");
	edadIngresada=parseInt(edadIngresada);

	while(edadIngresada<18 || edadIngresada>90)
	{
		alert("La edad ingresada es incorrecta");
		edadIngresada=prompt("Ingrese su edad nuevamente");
		

	}

	document.getElementById("txtIdEdad").value=edadIngresada;

	//B SEXO.

	sexoIngresado=prompt("Ingrese su sexo, siendo M para masculino y F para femenino");

	while(sexoIngresado!="M"&& sexoIngresado!="F")
	{
		alert("Usted ingreso un sexo erroneo");
		sexoIngresado=prompt("Ingrese su sexo nuevamente");
	}

	document.getElementById("txtIdSexo").value=sexoIngresado;

	//C ESTADO CIVIL.

	estadoCivilIngresado=prompt("Ingrese su estado civil siendo: 1 para soltero/a,2 para casado/a,3 para divorciado/a y 4 para viudo/a");

	while(estadoCivilIngresado<1 || estadoCivilIngresado>4)
	{
		estadoCivilIngresado=prompt("Ingrese su estado civil nuevamente");

	}
	switch(estadoCivilIngresado)
	{
		case "1":
			estadoCivilIngresado="Soltero/a";
		break;
		case "2":
			estadoCivilIngresado="Casado/a";
		break;
		case "3":
			estadoCivilIngresado="Divorciado/a";
		break;
		default:
			estadoCivilIngresado="Viudo/a";
		break;
	}

	document.getElementById("txtIdEstadoCivil").value=estadoCivilIngresado;



	// D. SUELDO BRUTO

	sueldoBruto=prompt("Ingrese su sueldo bruto");
	sueldoBruto=parseInt(sueldoBruto);

	while(sueldoBruto<"8000")
	{
		alert("Error el sueldo ingresado es menor a 8000");
		sueldoBruto=prompt("Ingrese su sueldo bruto nuevamente");
	}

	document.getElementById("txtIdSueldo").value=sueldoBruto;


	// E. LEGAJO

	legajo=prompt("Ingrese su numero de legajo");
	legajo=parseInt(legajo);

	while(legajo<1000 || legajo>9999)
	{
		alert("El numero de legajo es incorrecto");
		legajo=prompt("Ingrese el numero de legajo nuevamente");
	}

	document.getElementById("txtIdLegajo").value=legajo;

	//F. NACIONALIDAD

	nacionalidad=prompt("Ingrese su nacionalidad siendo A para Argentinos, E para extranjeros y N para naturalizados");

	while(nacionalidad !="A" && nacionalidad !="E" && nacionalidad!="N")
	{
		alert("El dato ingresado es incorrecto");
		nacionalidad=prompt("Ingrese nuevamente su nacionalidad");
	}

	switch(nacionalidad)
	{
		case "A":
			nacionalidad="Argentino";
		break;
		case "E":
			nacionalidad="Extranjero";
		break;
		default:
			nacionalidad="Naturalizado";
		break;
	}

	document.getElementById("txtIdNacionalidad").value=nacionalidad;




}
