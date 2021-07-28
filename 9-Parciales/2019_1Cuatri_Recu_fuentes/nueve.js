/*Autor: Martin Santillan
Parcial 2019 recuperatorio ejercicio 9
*/

function mostrar()
{

var nombreEstudiante;
var edad;
var sexo;
var notaFinal;
var respuesta;
var varonesAprobados;
var promedioNotas;
var acumuladorNotasMayores;
var acumuladorNotasMenores;
var acumuladorNotasAdolescentes;
var promedioNotasMayores;
var promedioNotasMenores;
var promedioNotasAdolescentes;
var contadorAdolescentes;
var contadorMayores;
var contadorMenores;
var acumuladorNotasFemenino;
var acumuladorNotasMasculino;

respuesta="si";
contadorAdolescentes=0;
contadorMayores=0;
contadorMenores=0;
acumuladorNotasMayores=0;
acumuladorNotasAdolescentes=0;
acumuladorNotasMenores=0;
acumuladorNotasMasculino=0;
acumuladorNotasFemenino=0;
contadorFemeninos=0;
contadorMasculinos=0;
varonesAprobados=0;
while(respuesta=="si")
{
    nombreEstudiante=prompt("Ingrese el nombre");


    edad=prompt("Ingrese la edad");
    edad=parseInt(edad);

    while(edad<10 || edad>99)// menor a 18 es adolescente// y menor a 14 es niño
    {
        edad=prompt("Ingrese la edad nuevamente");
    }

    sexo=prompt("Ingrese su sexo, siendo M para masculino y F para femenino");
    while(sexo!="M"&&sexo!="F")
    {
        sexo=prompt("Ingrese nuevamente su sexo");
    }

    notaFinal=prompt("Ingrese su nota");
    notaFinal=parseInt(notaFinal);
    while(notaFinal<1 || notaFinal>10)
    {
        notaFinal=prompt("Ingrese su nota nuevamente");
    }

    
    
    if(notaFinal>6 && sexo=="M") //se aprueba con 6
    {
        varonesAprobados=varonesAprobados+1;

    }
    
    if(edad>17)
    {
        contadorMayores++;
        acumuladorNotasMayores=acumuladorNotasMayores+notaFinal;
    }else
    {
        if(edad<14)
        {
            contadorMenores++;
            acumuladorNotasMenores=acumuladorNotasMenores+notaFinal;
        }else
        {
            contadorAdolescentes++;
            acumuladorNotasAdolescentes=acumuladorNotasAdolescentes+notaFinal;
        }
    }

    if(sexo=="F")
    {
     contadorFemeninos++;
        acumuladorNotasFemenino=acumuladorNotasFemenino+notaFinal;
    }else
    {
        contadorMasculinos++;
        acumuladorNotasMasculino=acumuladorNotasMasculino+notaFinal;
    }

    respuesta=prompt("¿Desea seguir cargando datos?");

}//fin del while
if(contadorMayores>0)
{
    promedioNotasMayores=acumuladorNotasMayores/contadorMayores;
}else
{
    promedioNotasMayores=0;
}
if(contadorAdolescentes>0)
{
    promedioNotasAdolescentes=acumuladorNotasAdolescentes/contadorAdolescentes;

}else
{
    promedioNotasAdolescentes=0;
}
if(contadorMenores>0)
{
    promedioNotasMenores=acumuladorNotasMenores/contadorMenores;
}else
{
    promedioNotasMenores=0;
}
if(contadorMasculinos>0)
{
    promedioNotasMasculinos=acumuladorNotasMasculino/contadorMasculinos;

}else
{
    promedioNotasMasculinos=0;
}
if(contadorFemeninos>0)
{
    promedioNotasFemeninos=acumuladorNotasFemenino/contadorFemeninos;

}else
{
    promedioNotasFemeninos=0;
}


document.write("<br>la cantidad de varones aprobados es: "+varonesAprobados);
document.write("<br>el promedio de los  mayores  es "+promedioNotasMayores);
document.write("<br>el promedio de los  menores  es "+promedioNotasMenores);
document.write("<br>el promedio de los  adolescentes es "+promedioNotasAdolescentes);
document.write("<br>el promedio de los  hombres es "+promedioNotasMasculinos);
document.write("<br>el promedio de las mujeres es "+promedioNotasFemeninos);




}
