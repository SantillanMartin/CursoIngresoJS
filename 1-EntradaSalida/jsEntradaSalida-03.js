/*
Autor: Martin Santillan
Ejercicio 03
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	//nombreIngresado=txtIdNombre.value;


	nombreIngresado=document.getElementById('txtIdNombre').value;

alert("El nombre ingresado es "+ nombreIngresado);
}


