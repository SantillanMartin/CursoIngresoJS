/*
Autor: Martin Santillan
TP 3
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{

    let temperatura;
    let fahrenheit;
    let mensaje;

    temperatura=document.getElementById("txtIdTemperatura").value;
    temperatura=parseInt(temperatura);

    fahrenheit=(temperatura-32)*5/9;
    
    mensaje=temperatura+" grados fahrenheit son "+fahrenheit+ " grados centigrados "

    alert(mensaje);
    
    


}

function CentigradosFahrenheit () 
{
	let temperatura;
    let centigrados;
    let mensaje;
 
    temperatura=document.getElementById("txtIdTemperatura").value;
    temperatura=parseInt(temperatura);

    centigrados=(temperatura*9/5)+32;

    mensaje=temperatura+" grados centigrados son "+centigrados+" grados fahrenheit";

    alert(mensaje);

}
