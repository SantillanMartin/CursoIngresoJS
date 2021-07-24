/*
Autor: Martin Santillan
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	
 var precioLampara;
 var marcaLamparita;
 var cantidadLamparas;
 var descuentoDeLampara;
 var precioTotal;
 var porcentajeDescuento;
 var ingresoBruto;
 var precioConImpuesto;
 var montoDeImpuesto;
 var mensaje;



 precioLampara=35;
 //precioLampara=parseInt(precioLampara);

 cantidadLamparas=document.getElementById("txtIdCantidad").value;
 cantidadLamparas=parseInt(cantidadLamparas);

 marcaLamparita=document.getElementById("Marca").value;



 if(cantidadLamparas>5)
 {
     //descuentoDeLampara=precioLampara*cantidadLamparas*50/100;
     //precioTotal=(precioLampara*cantidadLamparas)-descuentoDeLampara;
     
     porcentajeDescuento=50
 }
 //else
 //{
   //  document.getElementById("txtIdprecioDescuento").value=precioLampara*cantidadLamparas;
 //}
     else if(cantidadLamparas==5){
      if(marcaLamparita=="ArgentinaLuz"){
        //descuentoDeLampara=precioLampara*cantidadLamparas*40/100;
        //precioTotal=(precioLampara*cantidadLamparas)-descuentoDeLampara;
        
        porcentajeDescuento=40;
      }else
      {
        //descuentoDeLampara=precioLampara*cantidadLamparas*30/100;
        //precioTotal=(precioLampara*cantidadLamparas)-descuentoDeLampara;

        porcentajeDescuento=30;
      }

     }else if(cantidadLamparas==4)
     {
       if(marcaLamparita=="ArgentinaLuz" || marcaLamparita=="FelipeLamparas")
       {
        //descuentoDeLampara=precioLampara*cantidadLamparas*25/100;
        //precioTotal=(precioLampara*cantidadLamparas)-descuentoDeLampara;

        porcentajeDescuento=25;
       }else{
        //descuentoDeLampara=precioLampara*cantidadLamparas*20/100;
        //precioTotal=(precioLampara*cantidadLamparas)-descuentoDeLampara;

        porcentajeDescuento=20;
       }
     }
          else if(cantidadLamparas==3)
          {
            if(marcaLamparita=="ArgentinaLuz")
            {
              //descuentoDeLampara=precioLampara*cantidadLamparas*15/100;
              //precioTotal=(precioLampara*cantidadLamparas)-descuentoDeLampara;
              porcentajeDescuento=15;

            }
            else{
              if(marcaLamparita=="FelipeLamparas")
              {
                //descuentoDeLampara=precioLampara*cantidadLamparas*10/100;
                //precioTotal=(precioLampara*cantidadLamparas)-descuentoDeLampara;
                porcentajeDescuento=10;
              }else{
                //descuentoDeLampara=precioLampara*cantidadLamparas*5/100;
                //precioTotal=(precioLampara*cantidadLamparas)-descuentoDeLampara;
                
                porcentajeDescuento=5;
              }
              
            }
          }
                  
                  descuentoDeLampara=precioLampara*cantidadLamparas*porcentajeDescuento/100;
                  precioTotal=(precioLampara*cantidadLamparas)-descuentoDeLampara;
          
          
                  if(precioTotal>120)
                  {
                    ingresoBruto=10

                    montoDeImpuesto=precioTotal*ingresoBruto/100;
                    precioConImpuesto=precioTotal+montoDeImpuesto;
                    mensaje="El precio total con  impuesto es de $ "+precioConImpuesto+" pesos, siendo $ "+montoDeImpuesto+" pesos el IBBB cobrado ";

                  }else{
                    mensaje="El precio total con  descuento es de $ "+precioTotal+" pesos ";

                  }
                  

                  document.getElementById("txtIdprecioDescuento").value=mensaje;


}
