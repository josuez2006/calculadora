import{BotonOperador} from './numeros.js';
let  resultBasico;

function Sumar(operandoA,operandoB){
    let Numeros = [operandoA,operandoB]
    resultBasico = 0;
    for(let i = 0; i < Numeros.length ; i++){
        resultBasico += Numeros[i]; 
    }
}
function Restar(operandoA,operandoB){
    let Numeros = [operandoA,operandoB]
    resultBasico = 0;
    for(let i = 0; i < Numeros.length-1; i++){
        if(i === 0){
            resultBasico = Numeros[i] - Numeros[i+1]; 
        }else{
            resultBasico -= Numeros[i+1];
        }
    }
}
function Multiplicar(operandoA,operandoB){
    let Numeros = [operandoA,operandoB]
    resultBasico = 0;
    for(let i = 0; i < Numeros.length-1; i++){
        if(i === 0){
            resultBasico = Numeros[i] * Numeros[i+1]; 
        }else{
            resultBasico *= Numeros[i+1];
        }
    }
}
function Dividir(operandoA,operandoB){
    let Numeros = [operandoA,operandoB]
    resultBasico = 0;
    for(let i = 0; i < Numeros.length-1; i++){
        if(i === 0){
            resultBasico = Numeros[i] / Numeros[i+1]; 
        }else{
            resultBasico /= Numeros[i+1];
        }
    }
}


let resultAvanzado = 0;

function Potenciar(numerador , exponente){
    resultAvanzado = numerador;
    for(let i = 0; i < exponente ; i++){
        resultAvanzado *= numerador;
    }
}
function Radicar(raiz , numerador){
    
    if(raiz === 2){
        for(let i = 0 ; i < numerador ; i++){
            if( numerador/i === i){
                resultAvanzado = i;
            }
        }
    }
    else if(raiz > 2){
        resultAvanzado = numerador/raiz;
    }
}

function Porcentaje(numero,porcentaje){
    numero = numero / 100;
    resultAvanzado = numero * porcentaje;
}
function HacerCalculo(operandoA,operador,operandoB){
    switch(operador){
       case "+":
           Sumar(operandoA,operandoB);
           return resultBasico;
           break;
       case "-":
           Restar(operandoA,operandoB);
           return resultBasico;
           break;
        case "/":
           Dividir(operandoA,operandoB);
           return resultBasico;
           break; 
       case "*":
           Multiplicar(operandoA,operandoB);
           return resultBasico;
           break;
        
       case "**":
           Potenciar(operandoA,operandoB);
           return resultAvanzado;
           break;
       case "//":
           Radicar(operandoA,operandoB);
           return resultAvanzado;
           break;
       case "%":
           Porcentaje(operandoA,operandoB);
           return resultAvanzado;
           break;
   }
}

export{Sumar,Restar,Multiplicar,Dividir,Radicar,Potenciar,Porcentaje,HacerCalculo}