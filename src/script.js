let seleccionUsuario = document.querySelector("#seleccion_usuario");
let seleccionPC = document.querySelector("#seleccion_pc");
let piedra = document.querySelector("#boton_piedra");
let papel = document.querySelector("#boton_papel");
let tijera = document.querySelector("#boton_tijera");
var texto = document.querySelector(".texto");

var seleccionado = null;
var seleccionadoPC = null;

piedra.addEventListener("click", () => {
    seleccionado = "piedra";
    seleccionUsuario.style.backgroundImage = "url(/imagenes/piedra.png)"
    juego();
})
papel.addEventListener("click", () => {
    seleccionado = "papel";
    seleccionUsuario.style.backgroundImage = "url(/imagenes/papel.png)"
    juego();
})
tijera.addEventListener("click", () => {
    seleccionado = "tijera";
    seleccionUsuario.style.backgroundImage = "url(/imagenes/tijera.png)"
    juego();
})

function respuestaMaquina(){
    let num = parseInt(Math.random()*10);
    if(num <= 3){
        seleccionPC.style.backgroundImage = "url(/imagenes/piedra.png)";
        seleccionadoPC = "piedra";
    }else if(num > 3 && num <= 6){
        seleccionPC.style.backgroundImage = "url(/imagenes/papel.png)";
        seleccionadoPC = "papel";
    }else{
        seleccionPC.style.backgroundImage = "url(/imagenes/tijera.png)";
        seleccionadoPC = "tijera";
    }
 }



function juego(){
    respuestaMaquina();
    if(seleccionado === seleccionadoPC){
        texto.textContent = 'EMPATE';  
    }else if(seleccionado == "piedra"){
        if(seleccionadoPC == "papel"){
            texto.textContent = "DERROTA";
        }else{
            texto.textContent = "VICTORIA";
        }
    }else if(seleccionado == "papel"){
        if(seleccionadoPC == "tijera"){
            texto.textContent = "DERROTA";
        }else{
            texto.textContent = "VICTORIA";
        }
    }else if(seleccionado == "tijera"){
        if(seleccionadoPC == "piedra"){
            texto.textContent = "DERROTA";
        }else{
            texto.textContent = "VICTORIA";
        }
    }          
}

