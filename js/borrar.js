import{UnNumero, modificarCuenta, reiniciarCuenta, permitirOperador, bajarOperador} from './numeros.js';
import{cuenta,ModificarPantalla, reiniciarCuenta2} from './basicos.js';
import { confirmar } from './resultado.js';

const pantalla = document.getElementById('numeroActual');
const pantallaSecundaria = document.getElementById('cuenta');
let permitido = false;
let subcuenta = "";

function BorrarNumero(){
    if(!confirmar){

        permitirOperador();
        //dividir la cuenta
        subcuenta = cuenta.split(" ");
        //restar un numero
        subcuenta[subcuenta.length-1] = subcuenta[subcuenta.length-1].slice(0,-1)
        if(permitido === true){
            subcuenta.pop()
        }
        if(subcuenta[subcuenta.length-1] === ""){
            subcuenta.pop()
            if(UnNumero.length === 0){
                subcuenta.splice(subcuenta.length-1,1)
            }
            else{
                UnNumero.pop();
                pantalla.innerHTML = UnNumero;
            }
            permitido = true
        }
        if(subcuenta.length === 1){
            permitido = false;
        }
    
        let contador = 0;
        for(let i = 0;i < subcuenta.length; i++){
            if(i == contador){
                subcuenta[i] = parseInt(subcuenta[i]);
                contador += 2;
            }
        }
    
        //convertir a string
        let subcuentaFinal = "";
        for(let i = 0; i < subcuenta.length;i++){
            if(i < subcuenta.length-1){
                subcuentaFinal += subcuenta[i] + " ";
            }
            else{
                subcuentaFinal += subcuenta[i];
            }
        }
        if(pantallaSecundaria.innerHTML !== ""){
            
            //actualizar pantalla y calculo
            ModificarPantalla(subcuentaFinal);
            bajarOperador();
            modificarCuenta(subcuenta,true);
            if(pantallaSecundaria.innerHTML === ""){
                reiniciarCuenta();
            }
    
        }else{
            reiniciarCuenta();
        }
    }
}

function BorrarTodo(){
    pantalla.innerHTML = "";
    pantallaSecundaria.innerHTML = "";
    reiniciarCuenta();
    reiniciarCuenta2();
}
export{BorrarNumero,BorrarTodo};