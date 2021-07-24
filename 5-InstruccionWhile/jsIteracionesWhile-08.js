/*
Autor: Martin Santillan
Ejercicio While 8
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var flagSinNegativos;
	
	flagSinNegativos=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado>0)
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
		}
		else
		{
			flagSinNegativos=1;
			multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;

		}





		respuesta=prompt("¿Desea continuar?");
	}




	if(flagSinNegativos==0)
	{
		multiplicacionNegativos=0;
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN