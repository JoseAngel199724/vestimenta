function game(parametro1,parametro2){
    let final;
    if(parametro1 == "Papel" & parametro2 == "Papel"){
                   final= "Empate";
    }
    if(parametro1 ==  "Piedra" & parametro2 == "Piedra"){
        final= "Empate";
}
if(parametro1 ==  "Tijeras" & parametro2 == "Tijeras"){
final= "Empate";
}
    else if(parametro1 =="Papel" & parametro2== "Piedra"){
                       final="J1"
    }
    else if(parametro1 =="Papel" & parametro2== "Tijeras"){
        final="J2"
}
else if(parametro1 =="Tijeras" & parametro2== "Piedra"){
final="J2"
}else if(parametro1 =="Tijeras" & parametro2== "Papel"){
final="J1"
}
else if(parametro1 =="Piedra" & parametro2== "Papel"){
final="J2"
}
else if(parametro1 =="Piedra" & parametro2== "Tijeras"){
final="J1"
}



else if(parametro2 =="Papel" & parametro1== "Piedra"){
    final="J2"
}
else if(parametro2 =="Papel" & parametro1== "Tijeras"){
final="J1"
}



else if(parametro2 =="Tijeras" & parametro1== "Piedra"){
final="J1"
}else if(parametro2 =="Tijeras" & parametro1== "Papel"){
final="J2"
}
else if(parametro2 =="Piedra" & parametro1== "Papel"){
final="J1"
}
else if(parametro2=="Piedra" & parametro1== "Tijeras"){
final="J2"
}

let resultado = `Gana el jugador numero ${final}`

return  resultado;
}

const jugador1= prompt("Escriba una de las opciones del juego de Piedra, Papel o Tijeras");
const jugador2= prompt("Escriba una de las opciones del juego de piedra, Papel o Tijeras");

alert(game(jugador1,jugador2));