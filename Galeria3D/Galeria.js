document.addEventListener("DOMContentLoaded", function (){
const contenedorGaleria = document.querySelector('.contenedor-galeria');
const prev = document.querySelector('.btn-prev');
const sig = document.querySelector('.btn-sig');

let x = 0;

prev.addEventListener('click', () =>{
    x += 45;
    rotacion();
});

sig.addEventListener('click', () =>{
    x -= 45;
    rotacion();
});

function rotacion(){
    contenedorGaleria.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}

function rotacionContinua(){
    x -= 45;
    contenedorGaleria.style.transform = rotacion();
}

setInterval(rotacionContinua,2000);

});

  
