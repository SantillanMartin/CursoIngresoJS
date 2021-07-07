/*
Autor: Martin Santillan
TP 2


2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

let largoTerreno;
let anchoTerreno;
let perimetro;
let metrosParaComprar;
let mensaje;

largoTerreno=document.getElementById("txtIdLargo").value;
//largoTerreno=parseInt(largoTerreno);

anchoTerreno=document.getElementById("txtIdAncho").value;
//anchoTerreno=parseInt(anchoTerreno);

perimetro=(largoTerreno*2)+(anchoTerreno*2);
//perimetro=parseInt(perimetro);

metrosParaComprar=perimetro*3

mensaje="La cantidad de alambre a comprar es de : "+metrosParaComprar+" metros ";

alert(mensaje);




}
function Circulo () 
{

 let radio;
 let perimetro;   
 let metrosTotales;
 let mensaje;
 
 radio=document.getElementById("txtIdRadio").value;
 //radio=parseInt(radio);

 perimetro=2*3.14*radio;
 //perimetro=parseInt(perimetro);

 metrosTotales=perimetro*3;
 //metrosTotales=parseInt(metrosTotales);


 mensaje="La cantidad a comprar es de  "+metrosTotales+" metros ";

 alert(mensaje);



}
function Materiales () 
{

 let largoTerreno;
 let anchoTerreno;
 let totalMetrosCuadrados;
 let bolsasDeCemento;
 let bolsasDeCal;
 let mensaje;
 
 largoTerreno=document.getElementById("txtIdLargo").value;
 //largoTerreno=parseInt(largoTerreno);

 anchoTerreno=document.getElementById("txtIdAncho").value;
 //anchoTerreno=parseInt(anchoTerreno);

 totalMetrosCuadrados=largoTerreno*anchoTerreno;
 //totalMetrosCuadrados=parseInt(totalMetrosCuadrados);

 
 bolsasDeCemento=(totalMetrosCuadrados*2)/1;
 bolsasDeCal=(totalMetrosCuadrados*3)/1;

 mensaje="Usted va a necesitar : "+bolsasDeCemento+" bolsas de cemento y "+bolsasDeCal+" bolsas de cal ";

 alert(mensaje);



}