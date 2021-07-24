/*
Autor: Martin Santillan
Parcial 2019- Ejercicio 4
*/

function mostrar()
{
var numero1;
var numero2;
var resultado;
var mensaje;

numero1=prompt("Ingrese el primer numero");
numero1=parseInt(numero1);

numero2=prompt("Ingrese el segundo numero");
numero2=parseInt(numero2);

if(numero1==numero2)
{
    mensaje=""+numero1+numero2;
}
else{
    if(numero1>numero2)
    {
        resultado=numero1-numero2;
    }
    if(resultado>10)
    {
        mensaje="La resta es "+resultado+" y supero el 10 ";
    }
    else{
        mensaje=numero1+numero2;
    }
}

alert(mensaje);
}
