import { resolver }from './Cuenta.js';
import { MultiplesNumeros , DefinirNumero, reiniciarCuenta } from './numeros.js';
import { imprimirNumero ,PantallaPrincipal,PantallaSecundaria, reiniciarCuenta2} from './basicos.js';
export let confirmar = false;
export function Resultado(){
    DefinirNumero();
    let br = document.createElement('br');
    PantallaSecundaria.appendChild(br);
    let resultado = resolver(MultiplesNumeros);
    PantallaPrincipal.innerHTML = "";
    imprimirNumero(resultado);
    PantallaSecundaria.innerHTML += resultado;
    reiniciarCuenta();
    reiniciarCuenta2();
    confirmar = true;
}
export function CambiarConfirmacion(){
    confirmar = false;
}
