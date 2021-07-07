Autor: Martin Santillan
TP 1.

/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

let  precioProducto1;
let  precioProducto2;
let  precioProducto3;
let  suma;
let  mensaje;

precioProducto1=document.getElementById("txtIdPrecioUno").value;
precioProducto1=parseInt(precioProducto1);

precioProducto2=document.getElementById("txtIdPrecioDos").value;
precioProducto2=parseInt(precioProducto2);

precioProducto3=document.getElementById("txtIdPrecioTres").value;
precioProducto3=parseInt(precioProducto3);

suma=precioProducto1+precioProducto2+precioProducto3;

mensaje="La suma de los productos es: "+suma;

alert(mensaje);


}


function Promedio () 
{

let  precioProducto1;
let  precioProducto2;
let  precioProducto3;
let  promedio;
let  mensaje;

precioProducto1=document.getElementById("txtIdPrecioUno").value;
precioProducto1=parseInt(precioProducto1);

precioProducto2=document.getElementById("txtIdPrecioDos").value;
precioProducto2=parseInt(precioProducto2);

precioProducto3=document.getElementById("txtIdPrecioTres").value;
precioProducto3=parseInt(precioProducto3);

promedio=(precioProducto1+precioProducto2+precioProducto3)/3;

mensaje="El promedio es: "+ promedio;

alert(mensaje);




}
function PrecioFinal () 
{

    let  precioProducto1;
    let  precioProducto2;
    let  precioProducto3;
    let  suma;
    let  iva;
    let  preciofinal;
    let  mensaje;
    
    precioProducto1=document.getElementById("txtIdPrecioUno").value;
    precioProducto1=parseInt(precioProducto1);
    
    precioProducto2=document.getElementById("txtIdPrecioDos").value;
    precioProducto2=parseInt(precioProducto2);
    
    precioProducto3=document.getElementById("txtIdPrecioTres").value;
    precioProducto3=parseInt(precioProducto3);

    suma=precioProducto1+precioProducto2+precioProducto3
    suma=parseInt(suma);
    
    
    iva=(suma*21)/100;
    iva=parseInt(iva);
    
    preciofinal=suma+iva;

    mensaje="El precio final con iva incluido es: "+preciofinal;

    alert(mensaje);

}