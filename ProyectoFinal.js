var verirficacion = false;// hacemos una condicional para hacer el ciclo
const PrecioBase = 2000; //precio base del plan
var precioFinal = 0;

while(verirficacion == false){ //Preguntamos al usuario su edad para verificacion

    var edadAsegurado = parseInt(prompt("Ingresar Edad: "));
    var preguntaAsegurado = prompt("Esta casado? responder Si/No; ")
    var hijos = parseInt(prompt("Tiene hijos? Cuantos?, en caso de no tenerlos no responder: "));
    var salario = parseInt(prompt("Ingresar cuanto gana al mes: "))
    var Terrenos = parseInt(prompt("Cuantos terrenos tiene? en caso de no tener no responder: "))
    var PrecioBase1 = 0;
    var PrecioBase2 = 0;
    var PrecioBase3 = 0;
    var PrecioBase4 = 0;
    var PrecioBase5 = 0;

    if(edadAsegurado >= 18){ //la condicion para seguir es que sea mayor de 18 
        var edadAsegurado = edadAsegurado
        console.log(PrecioBase);
    }else{
        verirficacion = false
        continue;
    }

    if(preguntaAsegurado == "Si" | preguntaAsegurado == "si" ){
        
        var edadConyuge = parseInt(prompt("Ingresar Edad de esposo/esposa: "));

        if(edadConyuge >=18){ //verificamos si el esposo/esposa es mayor de 18
            var edadConyuge = edadConyuge;

            if(edadConyuge >= 18 & edadConyuge <=24){
                var PrecioBase1 = parseInt((PrecioBase*0.10) + PrecioBase) //aca se hace el recargo del al conyuge 10%  
            }
            else if(edadConyuge >= 25 & edadConyuge <=49){
                var PrecioBase1 = parseInt((PrecioBase*0.20) + PrecioBase) //aca del conyuge 20%\
            }
            else if(edadConyuge >= 50){
                var PrecioBase1 = parseInt((PrecioBase*0.30) + PrecioBase) //aca del conyuge 30%
            }
        }else{
            verirficacion = false
            alert("Dato incorrecto, el/la conyuge no debe ser menor!")
            continue;
        }

    }else if(preguntaAsegurado =="" | preguntaAsegurado !="Si"){
        alert("No hay esposa/esposo");
        console.log(PrecioBase);
    }

    if(hijos>=1){ //preguntamos si hubo respuesta en hijos  //AQUI HAY ERROR!!!
        var PrecioBase2 = parseInt(((PrecioBase*0.20)*hijos) + PrecioBase);
        var hijossi = true
    }else{
        var PrecioBase2 = 0;
    }

    if(edadAsegurado >= 18 & edadAsegurado <=24){
        var PrecioBase3 = parseInt((PrecioBase*.10) + PrecioBase)//aca se hace el recargo del 10%  
        console.log(PrecioBase3);
    }
    else if(edadAsegurado >= 25 & edadAsegurado <=49){
        var PrecioBase3 = parseInt((PrecioBase*0.20) + PrecioBase) //aca del 20%
    }
    else if(edadAsegurado >= 50){
        var PrecioBase3 = parseInt((PrecioBase*0.30) + PrecioBase) //aca del 30%
    }

    if(salario>=1){ //Hacemos la opoeracion por el salario devengado
        var PrecioBase4 = salario*0.05;
    }else{
        var PrecioBase4 = 0;
    }

    if(Terrenos>=1){ //Hacemos la opreacion por cada terreno que tiene
        var PrecioBase5 = (PrecioBase*0.35)*Terrenos;
    }else{
        var PrecioBase5 = 0;
    }

    var precioFinal = PrecioBase1 + PrecioBase2 + PrecioBase3 + PrecioBase4 + PrecioBase5; //hacemos la suma de todos los recargos

    alert("El precio final es de: " + precioFinal);
    var verificacion = prompt("Desea realizar otra cotizacion? Seguir/Salir: ") //preguntamos si el usuario desea realizar otra cotizacion 
    
    if(verificacion == "Si" | verificacion == "si"){
        var verificacion = true
    }else{
        var verificacion = false
        break;
    }
        //( ͠❛ ͜ʖ ͡❛) fin, a proyect powered by Angel Santizo
} 

console.log(PrecioBase1, PrecioBase2, PrecioBase3, PrecioBase4, PrecioBase5);