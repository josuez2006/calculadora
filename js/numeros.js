import { imprimirNumero, imprimirCararcter,imprimirPantallaSecundaria,PantallaPrincipal, cambiarCuenta, PantallaSecundaria, cuenta, comprobarCuenta} from './basicos.js';
import {confirmar,CambiarConfirmacion} from './resultado.js';

let MultiplesNumeros = [];
let UnNumero = [];
let contadorNumero = 0;
let contadorNumeros = 0;
let PermitirOperador = false;
let negativo = false;

function Boton(numero){
    if(confirmar){
        PantallaPrincipal.innerHTML = "";
    }
    if(negativo){
        UnNumero[contadorNumero] = UnNumero[contadorNumero] + numero;
        console.log(UnNumero[contadorNumero])
    }else{
        UnNumero[contadorNumero] = numero;
    }
    contadorNumero++;
    imprimirNumero(numero);
    imprimirPantallaSecundaria(numero);
    CambiarConfirmacion();
    negativo = false;
 }

 function BotonOperador(operador){
     comprobarCuenta();
     if(PantallaPrincipal.innerHTML != ""){
         PermitirOperador = true
        }
    if(PermitirOperador){
        DefinirNumero();
        MultiplesNumeros[contadorNumeros] = operador; 
        contadorNumeros++;
        switch(operador){
            case "//":
                cambiarCuenta(operador);
                operador = "√";

                break;
            case "**":
                cambiarCuenta(operador)
                operador = "";
                break;
        }
        imprimirCararcter(operador);
        PermitirOperador = false

    }
}
function bajarOperador(){
    contadorNumeros = 1;
}
function permitirOperador(){
    PermitirOperador = true
}
 
function DefinirNumero(){
    let numero = "";
    for(let i = 0;i < UnNumero.length;i++){
        numero = numero + UnNumero[i]; 
    }
    MultiplesNumeros[contadorNumeros] = parseInt(numero); 
    console.log(contadorNumeros)
    contadorNumeros++;
    contadorNumero = 0;
    UnNumero = [];
}

function modificarCuenta(remplazar,resetear){
    MultiplesNumeros = remplazar;
    console.log(MultiplesNumeros)
    if(resetear){
        contadorNumero--;
    }
}
function reiniciarCuenta(){
    MultiplesNumeros.length = 0;
    UnNumero.length = 0;
    contadorNumero = 0;
    contadorNumeros = 0;
}

function Negativos(){
    UnNumero[contadorNumero] = "-"
    negativo = true;
}
export { BotonOperador,MultiplesNumeros,Boton,DefinirNumero 
        ,UnNumero,modificarCuenta,reiniciarCuenta,permitirOperador,bajarOperador,Negativos};