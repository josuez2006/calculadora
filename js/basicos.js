
export let cuenta = "";
const PantallaPrincipal = document.getElementById('numeroActual');
const PantallaSecundaria = document.getElementById('cuenta');
let especial = false;
function imprimirNumero(numero){
    PantallaPrincipal.innerHTML += numero;
    especial = false;
}

function imprimirPantallaSecundaria(numero){
    cuenta += numero;
    PantallaSecundaria.innerHTML = cuenta;
    cuenta.split(" ")
}

function ModificarPantalla(subcuenta){
    cuenta = subcuenta;
    console.log(cuenta)
    PantallaSecundaria.innerHTML = subcuenta;
}

function imprimirCararcter(caracter){
    
    PantallaPrincipal.innerHTML = "";
    if(especial){
        imprimirPantallaSecundaria(" &nbsp" + caracter);
    }else{
        imprimirPantallaSecundaria(" &nbsp" + caracter + "&nbsp ");
    }
}
function reiniciarCuenta2(){
    cuenta = "";
}
function cambiarCuenta(operador){
    switch(operador){
        case "//":
            PantallaSecundaria.innerHTML = "";
            let sup = document.createElement('sup');
            console.log(cuenta[0].sup())
            let contentSup = document.createTextNode(cuenta[cuenta.length-1]);
            sup.appendChild(contentSup);
            PantallaSecundaria.appendChild(sup);
            cuenta = PantallaSecundaria.innerHTML;
            break;
        case "**":
            cuenta += "<sup>";
            especial = true;
            break;
    }
    
}
function comprobarCuenta(){
    cuenta.split(" ")
    if(cuenta[cuenta.length-1] == "<sup>"){
        cuenta += "</sup>";
    }
}

export { imprimirNumero , imprimirCararcter, imprimirPantallaSecundaria,
    ModificarPantalla,PantallaPrincipal,PantallaSecundaria,reiniciarCuenta2,cambiarCuenta,comprobarCuenta};