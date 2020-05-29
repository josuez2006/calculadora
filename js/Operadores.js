
 let Operadores = [];
export let UbicacionesOperadores =[];

let contador = 0;
let jerarquia3 = [];
let jerarquia2 = [];
let jerarquia1 = [];
export function cuantosOperadoresHay(cuenta){
    let operador = 1;
    contador = 0;
    for(let i = 0; i < cuenta.length;i++){
        if(operador == i){
            Operadores[contador] = cuenta[i];
            contador++;
            operador += 2;
        }
    }
    return Operadores;
}

export function ActualizarOperadores(cuenta){
    
    UbicacionesOperadores.length = 0;
    Operadores.length = 0;
    let operador = 1;
    contador = 0;
    for(let i = 0; i < cuenta.length;i++){
        if(operador == i){
            Operadores[contador] = cuenta[i];
            ReconocerValor(Operadores[contador],i)
            contador++;
            operador += 2;
        }
    }
    UbicacionesOperadores = jerarquia3.concat(jerarquia2);
    UbicacionesOperadores = UbicacionesOperadores.concat(jerarquia1)
    jerarquia1.length = 0;
    jerarquia2.length = 0;
    jerarquia3.length = 0;
}


function ReconocerValor(valor,pocision){
  
    switch(valor){
        case "**":
            VerificarJerarquia(3,pocision)
            break;
        case "//":
            VerificarJerarquia(3,pocision)
            break;
        case "%":
            VerificarJerarquia(3,pocision)
            break;
        case "/":
            VerificarJerarquia(2,pocision)
            break;
        case "*":
            VerificarJerarquia(2,pocision)
            break;
        
        case "+":
            VerificarJerarquia(1,pocision)
            break;
        case "-":
            VerificarJerarquia(1,pocision)
            break;
    }
    
}
function VerificarJerarquia(jerarquia,pocision){
    if(jerarquia == 3){
        jerarquia3.push(pocision);
    }
    else if(jerarquia == 2){
       jerarquia2.push(pocision);
    }
    else if(jerarquia == 1){
        jerarquia1.push(pocision);
    }
    
    
}