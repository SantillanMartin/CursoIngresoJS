/*
Autor: Martin Santillan
Parcial 2019 ejercicio 3
Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, 
mostrar el precio final con descuento por id.
*/

function mostrar()
{

var precio;
var porcentajeIngresado;
var porcentajeParaDescontar;
var precioTotalCondescuento;
var mensaje;

//entrada de datos
precio=prompt("Ingrese el precio ");
precio=parseInt(precio);

porcentajeIngresado=prompt("Ingrese el porcentaje que desea aplicar al precio");
porcentajeIngresado=parseInt(porcentajeIngresado);

//proceso de los datos ingresados

porcentajeParaDescontar=precio*porcentajeIngresado/100;

precioTotalCondescuento=precio-porcentajeParaDescontar;

//salida de datos
mensaje="El precio ingresado con un descuento de "+porcentajeIngresado+" %  es de "+precioTotalCondescuento;

document.getElementById("elPrecioFinal").value=mensaje;



}
