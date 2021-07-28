function mostrar()
{

var tipo;
var cantidadBolsas;
var precioBolsa;
var respuesta;
var descuento;
var totalParaPagar;
var acumuladorPrecioBolsa;
var totalConDescuento;
var porcentaje;
var acumuladorPrecioSinDescuento;

acumuladorPrecioSinDescuento=0;
acumuladorPrecioBolsa=0;
totalParaPagar=0;


respuesta="si";
while(respuesta=="si")
{
  
  tipo=prompt("Ingrese el material");
  while(tipo!="arena"&& tipo!="cal"&& tipo!="cemento")
  {
    tipo=prompt("Ingrese el material nuevamente");
  }

  cantidadBolsas=prompt("Ingrese la cantidad de bolsas que lleva");
  cantidadBolsas=parseInt(cantidadBolsas);
  while(cantidadBolsas<0)
  {
    cantidadBolsas=prompt("Ingrese la cantidad de bolsas que lleva");
  }

  precioBolsa=prompt("Ingrese el precio de la bolsa");
  precioBolsa=parseInt(precioBolsa);
  while(precioBolsa<1)
  {
    precioBolsa=prompt("Ingrese nuevamente el precio bolsa");
  }



  





















acumuladorPrecioBolsa=acumuladorPrecioBolsa+precioBolsa;
acumuladorPrecioSinDescuento=acumuladorPrecioSinDescuento+precioBolsa;
respuesta=prompt("¿Desea continuar?")

}


if(cantidadBolsas>30)
{
  descuento=25;
}else
{
  if(cantidadBolsas>10)
  {
    descuento=15;
  }
}



totalParaPagar=acumuladorPrecioSinDescuento;
porcentaje=acumuladorPrecioBolsa*descuento/100;
totalConDescuento=acumuladorPrecioBolsa-porcentaje;



}
