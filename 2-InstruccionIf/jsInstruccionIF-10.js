/*
Autor: Martin Santillan
Ejercicio IF 10
Al presionar el Botón, asignar una nota 
RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	var numeroRandom;
	var mensaje;

	numeroRandom=Math.floor(Math.random() * 10) + 1;


	if(numeroRandom==9 || numeroRandom==10)
	{
		mensaje="Excelente su nota es "+numeroRandom;
	}else
	{
		if(numeroRandom>4)
		{
			mensaje="aprobo, su nota es "+numeroRandom;
		}
		else{
			mensaje="Vamos, la proxima se puede.";
		}

		alert(mensaje);
	}

}//FIN DE LA FUNCIÓN