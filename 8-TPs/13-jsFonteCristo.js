/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
 	


}


function NumerosPares ()
{
    var numeroIngresado;
    var acumuladorPares;


    acumuladorPares=0;
    numeroIngresado=document.getElementById("txtIdNumero").value;
    numeroIngresado=parseInt(numeroIngresado);

    while(numeroIngresado<0)
    {   
        alert("El numero ingresado no es positivo.")
        numeroIngresado=prompt("Ingrese un numero positivo");


    }
    while(numeroIngresado>-1)
    {
        if(numeroIngresado%2==0)
        {
            
            acumuladorPares=acumuladorPares+1;

        }
        
        numeroIngresado=numeroIngresado-1;
    }
    
    document.write("La cantidad de numeros pares entre el numero ingresado y 0 son "+acumuladorPares);

}

function NumerosImpares()
{
    var numeroIngresado;
    var acumuladorImpares;


    acumuladorImpares=0;
    numeroIngresado=document.getElementById("txtIdNumero").value;
    numeroIngresado=parseInt(numeroIngresado);


    while(numeroIngresado<0)
    {   
        alert("El numero ingresado no es positivo.")
        numeroIngresado=prompt("Ingrese un numero positivo");
        


    }

    while(numeroIngresado>1)
    {
        if(numeroIngresado%2==1)
        {
            acumuladorImpares=acumuladorImpares+1;
        }
        numeroIngresado=numeroIngresado-1;

    }


    document.write("La cantidad de numeros impares entre el numero ingresado y 0 son "+acumuladorImpares);
}


function NumerosDivisibles()
{

 var numeroIngresado;
 var acumuladorDivisibles;
 var divisor;

 divisor=100;
 acumuladorDivisibles=0;


 numeroIngresado=document.getElementById("txtIdNumero").value;
 numeroIngresado=parseInt(numeroIngresado);

 while(numeroIngresado<0)
    {   
        alert("El numero ingresado no es positivo.")
        numeroIngresado=prompt("Ingrese un numero positivo");
    
    }

 while(divisor<101 && divisor>0)
 {
    if(numeroIngresado%divisor==0)
    {
        
        
        acumuladorDivisibles=acumuladorDivisibles+1;
    }
       
    
    divisor=divisor-1;
    
    
 }
     
 alert(acumuladorDivisibles);


}