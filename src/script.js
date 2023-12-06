
let maquina = respuestaMaquina();
let usuario = respuestaUsuario();
let resultado = juego(usuario, maquina);
var piedra = document.querySelector("#boton_piedra");
var papel = document.querySelector("#boton_papel");
var tijera = document.querySelector("#boton_tijera");
var seleccionado = null;
piedra.addEventListener("click", () => {
    seleccionado = "piedra";
    juego();
})
piedra.addEventListener("click", () => {
    seleccionado = "papel";
    juego();
})
piedra.addEventListener("click", () => {
    seleccionado = "tijera";
    juego();
})

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



function juego(){
    let seleccionado = 
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

