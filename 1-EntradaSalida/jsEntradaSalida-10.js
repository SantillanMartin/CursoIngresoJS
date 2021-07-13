/*
Autor: Martin Santillan
Ejercicio 10 bis

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

	let importe;
	let porcentajeDeDescuentoIngresado;
	let porcentajeAplicado;
	let descuentoTotal;
	//entrada de datos

	importe=document.getElementById("txtIdImporte").value;
	importe=parseInt(importe);

	porcentajeDeDescuentoIngresado=prompt("Ingrese el porcentaje que desea aplicar ");
	porcentajeDeDescuentoIngresado=parseInt(porcentajeDeDescuentoIngresado);


	//proceso de datos

	porcentajeAplicado=(importe*porcentajeDeDescuentoIngresado)/100;
	//porcentajeAplicado=parseInt(porcentajeAplicado);

	//salida de datos
	descuentoTotal=importe-porcentajeAplicado;

document.getElementById("txtIdResultado").value=descuentoTotal;




}
