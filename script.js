
 
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


let a = prompt("Escribe la opcón");
a.toLowerCase();
console.log(respuestaMaquina(a));