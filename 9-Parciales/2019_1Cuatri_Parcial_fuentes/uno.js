/*
Autor: Martin Santillan
Ejercicio 1 parcial 2019

Bienvenidos.
Realizar el algoritmo que pida los datos necesarios para un 
triángulo equilátero por prompt y que muestre 
el perímetro por alert.


*/

function mostrar()
{

  
  var medidaTriangulo;
  var perimetro;
  var mensaje;

  //entrada de datos
  medidaTriangulo=prompt("Ingrese la medida de uno de los lados del triangulo ")
  medidaTriangulo=parseInt(medidaTriangulo);


  //proceso
  perimetro=medidaTriangulo*3
  
  
  
  //salida de datos
  mensaje="El perimetro del triangulo es de "+perimetro;

  alert(mensaje);
  







}
