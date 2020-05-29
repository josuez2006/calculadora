import{Sumar,Restar,Dividir,Multiplicar,Radicar,Potenciar,Porcentaje} from './arimetica.js';
import{Boton,BotonOperador,Negativos} from './numeros.js';
import{Resultado} from './resultado.js';
import{BorrarNumero,BorrarTodo} from './borrar.js';
import{Parentesis1,Parentesis2} from './parentesis.js';


document.getElementById('Habilitar').addEventListener('click',()=>{

    let paramodificar =document.querySelectorAll('.modificar');
    for(let i = 0; i < paramodificar.length; i++){
        paramodificar[i].classList.toggle('noVisible');
    }
    let botones = document.getElementById('botones');
    
    botones.classList.toggle('ordenar-botones')
    botones.classList.toggle('remplazo')
})
document.getElementById('boton1').addEventListener('click',function(){Boton(1)});
document.getElementById('boton2').addEventListener('click',function(){Boton(2)});
document.getElementById('boton3').addEventListener('click',function(){Boton(3)});
document.getElementById('boton4').addEventListener('click',function(){Boton(4)});
document.getElementById('boton5').addEventListener('click',function(){Boton(5)});
document.getElementById('boton6').addEventListener('click',function(){Boton(6)});
document.getElementById('boton7').addEventListener('click',function(){Boton(7)});
document.getElementById('boton8').addEventListener('click',function(){Boton(8)});
document.getElementById('boton9').addEventListener('click',function(){Boton(9)});
document.getElementById('boton0').addEventListener('click',function(){Boton(0)});
document.getElementById('botonPI').addEventListener('click',function(){Boton(3.14)});
document.getElementById('botonSuma').addEventListener('click',() => {Sumar();BotonOperador("+");});
document.getElementById('botonResta').addEventListener('click',() => {Restar();BotonOperador("-")});
document.getElementById('botonMultiplicacion').addEventListener('click',() => {Multiplicar();BotonOperador("*")});
document.getElementById('botonDivision').addEventListener('click',() => {Dividir();BotonOperador("/")});
document.getElementById('botonRaiz').addEventListener('click',() => {Radicar();BotonOperador("//")});
document.getElementById('botonPotencia').addEventListener('click',() => {Potenciar();BotonOperador("**")});
document.getElementById('botonPorcentaje').addEventListener('click',() => {Porcentaje();BotonOperador("%")});
document.getElementById('parentesis1').addEventListener('click',() => {Parentesis1();});
document.getElementById('parentesis2').addEventListener('click',() => {Parentesis2();});
document.getElementById('botonResultado').addEventListener('click',() => {Resultado()});
document.getElementById('Cleaner-caracter').addEventListener('click',()=>{BorrarNumero()})
document.getElementById('Cleaner-todo').addEventListener('click',()=>{BorrarTodo()})
// document.getElementById('Cleaner-operacion-prev').addEventListener('click',()=>{BorrarOperacionPrevia()})
document.getElementById('botonNegativo').addEventListener('click',()=>{Negativos()})
// document.getElementById('botonDecimal').addEventListener('click',()=>{Decimales()})

