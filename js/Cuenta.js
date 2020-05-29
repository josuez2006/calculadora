import{HacerCalculo} from './arimetica.js';
import{cuantosOperadoresHay,UbicacionesOperadores,ActualizarOperadores} from './Operadores.js';
import{PantallaSecundaria} from './basicos.js';

let resultado;
let contOperador = 1;
let contOperandoA = 0;
let contOperandoB = 2;
// let cuenta = "5 + 5";
// resolver(cuenta.split(" "));
export function resolver(cuenta){
    let operadores = cuantosOperadoresHay(cuenta);
    while(operadores.length != 0){  
        console.log(cuenta)
        ActualizarOperadores(cuenta);
        OrdenOperador();
        
        CalcularResultado(cuenta);
        // OperacinesNegativas(cuenta);
        if(cuenta.length == 1){
            operadores.length = 0;
        }
    }
    if(resultado != undefined){
        return resultado;
    }
    else{
        return "indefinido";
    }
}



function OrdenOperador(){
    contOperador = UbicacionesOperadores[0];
    contOperandoA = contOperador - 1;
    contOperandoB = contOperador + 1;
}

function CalcularResultado(cuenta){
    let mini_result = HacerCalculo(cuenta[contOperandoA],cuenta[contOperador],cuenta[contOperandoB]);
    cuenta.splice(contOperandoA,3);
    cuenta.splice(contOperandoA,0,mini_result);
    resultado = cuenta;
}

function OperacinesNegativas(cuenta){
    cuenta[contOperandoA].toString();
    cuenta[contOperandoB].toString();
    console.log(cuenta[contOperandoA].includes("-5",0));
    if(cuenta[contOperandoA].includes("-") && cuenta[contOperandoB].includes("-")){
        cuenta[contOperandoA].replace(",","");
        cuenta[contOperandoB].replace(",","");
    }
}