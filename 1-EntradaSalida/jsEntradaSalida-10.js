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
	
	importe=document.getElementById("txtIdImporte").value;
	importe=parseInt(importe);

	porcentajeDeDescuentoIngresado=prompt("Ingrese el porcentaje que desea aplicar ");
	porcentajeDeDescuentoIngresado=parseInt(porcentajeDeDescuentoIngresado);


	porcentajeAplicado=(importe*porcentajeDeDescuentoIngresado)/100;
	porcentajeAplicado=parseInt(porcentajeAplicado);

	descuentoTotal=importe-porcentajeAplicado;

document.getElementById("txtIdResultado").value=descuentoTotal;




}
