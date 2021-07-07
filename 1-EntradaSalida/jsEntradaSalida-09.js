/*
Autor: Martin Santillan
Ejercicio 9 bis
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let porcentajeDeAumentoIngresado;
	let porcentajeDeAumentoAplicado;
	let sueldoConAumento;
	
	sueldo=document.getElementById("txtIdSueldo").value;
	sueldo=parseInt(sueldo);

	porcentajeDeAumentoIngresado=prompt("Ingrese el porcentaje que desea aumentar ");
	porcentajeDeAumentoIngresado=parseInt(porcentajeDeAumentoIngresado);
	
	porcentajeDeAumentoAplicado=(sueldo*porcentajeDeAumentoIngresado)/100;
	porcentajeDeAumentoAplicado=parseInt(porcentajeDeAumentoAplicado);

	sueldoConAumento=sueldo+porcentajeDeAumentoAplicado;

	document.getElementById("txtIdResultado").value=sueldoConAumento;







}
