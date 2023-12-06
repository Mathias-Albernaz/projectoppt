
 
 function respuestaMaquina(){
    let num = parseInt(Math.random()*10);
    let res;
    if(num <= 3){
        res = "piedra";
    }else if(num > 3 && num <= 6){
        res = "papel";
    }else{
        res = "tijera";
    }
    return res;
 }

function respuestaUsuario(){
    let res = prompt("Escribe tu elección");
    String(res);
    res = res.toLowerCase();
    return res;
} 

function juego(usr , pc){
    let res = "Escribi bien man";
    if(usr == pc){
        res = "Empate man";   
    }else if(usr == "piedra"){
        if(pc == "papel"){
            res = "Perdiste man";
        }else{
            res = "Ganaste man";
        }
    }else if(usr == "papel"){
        if(pc == "tijera"){
            res = "Perdiste man";
        }else{
            res = "Ganaste man";
        }
    }else if(usr == "tijera"){
        if(pc == "piedra"){
            res = "Perdiste man";
        }else{
            res = "Ganaste man";
        }
    }
    return res;           
}

let maquina = respuestaMaquina();
let usuario = respuestaUsuario();
let resultado = juego(usuario, maquina);
document.write("Elegiste  " +  usuario + "  y la máquina eligió  " + maquina + " , el resultado es >   " + resultado);
