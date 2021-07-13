/*
Autor: Martin Santillan
Parcial 2019 ejercicio 2

Bienvenidos.
A una pareja se le pide los datos para mostrar un mensaje
 " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, 
 que sumados son xx kilos y el promedio de peso xx ".

*/
function mostrar()
{
  var nombrePersonaNro1;
  var nombrePersonaNro2;
  var pesoPersonaNro1;
  var pesoPersonaNro2;
  var pesoTotal;
  var pesoPromedio;
  var mensaje;

  nombrePersonaNro1=prompt("Ingrese el nombre de la primer persona");

  nombrePersonaNro2=prompt("Ingrese el nombre de la segunda persona ");

  pesoPersonaNro1=prompt("Ingrese el peso de la primer persona");
  pesoPersonaNro1=parseInt(pesoPersonaNro1);

  pesoPersonaNro2=prompt("Ingrese el peso de la segunda persona");
  pesoPersonaNro2=parseInt(pesoPersonaNro2);

  pesoTotal=pesoPersonaNro1+pesoPersonaNro2;

  pesoPromedio=pesoTotal/2;

  mensaje="Ustedes se llaman "+nombrePersonaNro1+" y "+nombrePersonaNro2+" que sumados son "+pesoTotal+" kilos "+" y el promedio de peso es de "+pesoPromedio;


 alert(mensaje);
  


}
