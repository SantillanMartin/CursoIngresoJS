/*
Autor: Martin Santillan
PARCIAL 2020 
*/
function mostrar()
{

var productoTipo;
var precioIngresado;
var unidadesProducto;
var marca;
var fabricante;
var cantidadProductos;
var banderaBarato;
var productoMasBarato;
var primerAlcohol;
var alcoholBaratoPrecio;
var alcoholBaratoUnidades;
var alcoholBaratoFabricante;
var acumuladorUnidadesAlcohol;
var acumuladorFabricanteAlcohol;
var acumuladorUnidadesJabon;
var acumuladorFabricanteJabon;
var acumuladorUnidadesBarbijo;
var acumuladorFabricanteBarbijo;
var promedioCompra;

acumuladorUnidadesAlcohol=0;
acumuladorUnidadesJabon=0;
acumuladorUnidadesBarbijo=0;

primerAlcohol="Es el primero";
cantidadProductos=0;
while(cantidadProductos<5)
{


productoTipo=prompt("Ingrese el tipo de producto");
while(productoTipo!="barbijo"&&productoTipo!="jabon"&&productoTipo!="alcohol")
{
	alert("El producto ingresado es incorrecto");
	productoTipo=prompt("Ingrese nuevamente el tipo del producto");
}


precioIngresado=prompt("Ingrese el precio del producto elegido");
precioIngresado=parseInt(precioIngresado);

while(precioIngresado<100 || precioIngresado>300)
{
	alert("El precio ingresado es incorrecto");
	precioIngresado=prompt("Ingrese nuevamente el precio");
}


unidadesProducto=prompt("¿Cuantas unidades lleva?");
unidadesProducto=parseInt(unidadesProducto);

while(unidadesProducto<1 || unidadesProducto>1000)
{
	alert("Supero el maximo de unidades o no lleva ninguna ");
	unidadesProducto=prompt("¿Cuantas unidades lleva?");
}

marca=prompt("Ingrese la marca");
fabricante=prompt("Ingrese fabricante");


if(productoTipo=="alcohol")
{
	if(primerAlcohol=="es el primero")
	{
		primerAlcohol="ya no es";
		alcoholBaratoPrecio=precioIngresado;
		alcoholBaratoUnidades=unidadesProducto;
		alcoholBaratoFabricante=fabricante;
	}else
	{
		 if(alcoholBaratoPrecio>precioIngresado)
		 {
			 alcoholBaratoPrecio=precioIngresado;
			 alcoholBaratoUnidades=unidadesProducto;
			 alcoholBaratoFabricante=fabricante;
		 }
	}
}

//B.

switch(tipo)
{
	case "alcohol":
		acumuladorUnidadesAlcohol=acumuladorUnidadesAlcohol+unidadesProducto;
		acumuladorFabricanteAlcohol=fabricante;
	break;
	case "jabon":
		acumuladorUnidadesJabon=acumuladorUnidadesJabon+unidadesProducto;
		acumuladorFabricanteJabon=fabricante;
	break;
	case "barbijo":
		acumuladorUnidadesBarbijo=acumuladorUnidadesBarbijo+unidadesProducto;
		acumuladorFabricanteBarbijo=fabricante;
	break;

}


}//FIN DEL WHILE

if(acumuladorUnidadesJabon>acumuladorUnidadesBarbijo&&acumuladorUnidadesJabon>acumuladorUnidadesAlcohol)
{
	tipoConMasUnidades="Jabon";
	promedioCompra=acumuladorUnidadesJabon/precioIngresado;
}else
{
	if(acumuladorUnidadesAlcohol>acumuladorUnidadesBarbijo)
	{
		tipoConMasUnidades="Alcohol";
		promedioCompra=acumuladorUnidadesAlcohol/precioIngresado;
	}
	else
	{
		tipoConMasUnidades="Barbijo";
		promedioCompra=acumuladorFabricanteBarbijo/precioIngresado;
	}
}


alert(promedioCompra);


cantidadProductos++;







}


