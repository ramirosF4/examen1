import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'sweetalert2'; 
import Swal from 'sweetalert2';
import fontawesome from '@fortawesome/fontawesome-free/css/all.min.css';

const form = document.getElementById('regexForm');
const expresionInput = document.getElementById('expresionInput');
const textoInput = document.getElementById('textoInput');
const resultDiv = document.getElementById('resultado');
const btn_verificar = document.getElementById('verificarBtn');
const btn_limpiar = document.getElementById('limpiarBtn');

const alerta=()=>{
    Swal.fire({
        title: '¡Atención!',
        text: 'llene todos los campos',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
    }); 
}
const alerta2=()=>{
    Swal.fire({
        title: '!Éxito!',
        text: 'El texto cumple con la expresión regular',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    }); 
}
const alerta3=()=>{
    Swal.fire({
        title: '¡Error!',
        text: 'El texto no cumple con la expresión regular',
        icon: 'error',
        confirmButtonText: 'Aceptar'
    }); 
}

btn_limpiar.addEventListener('click', ()=> {
    expresionInput.value = '';
    textoInput.value = '';
    resultDiv.textContent = '';
});  

const verificarExpresion = (expresion) => {// Verifica si la expresión regular es válida
    try {
        new RegExp(expresion);//
        return true;
    } catch (e) {
        return false;
    }
};
btn_verificar.addEventListener('click', () => {
    const expresion = expresionInput.value;
    const texto = textoInput.value;
    if (!expresion.trim() || !texto.trim()) {
        alerta();
        return;
    }
    if (verificarExpresion(expresion)) {
        const regex = new RegExp(expresion); 
        const coincide = regex.test(texto);  
        
        coincide ? alerta2() : alerta3();
    } else {
        alerta();
    }
});