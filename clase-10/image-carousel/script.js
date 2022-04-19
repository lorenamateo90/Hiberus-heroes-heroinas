//identificación
//declaración de variables (let y const)
const carousel = document.getElementById('imgs');
const images = document.querySelectorAll('#imgs img');

//botones
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let index = 0;

//funciones 
function cambiarImagen(){
    if (index > images.length - 1 ){ // sentido derecha
        index = 0;
    } else if (index < 0 ){
        index = images.length -1 //sentido izquierda
    }

    carousel.style.transform = `translateX(${-index * 500}px)`
    console.log(carousel.style.transform);
};

 let codeInterval = setInterval(function(){
    //index++; // autoincremento. Las 3 lineas quieren decir lo mismo.
    //index = index + 1;
    index += 1;
    cambiarImagen();
}, 2000)




function resetInterval (){
    clearInterval(codeInterval);
}

//tratamiento
//botones
leftBtn.addEventListener('click', () =>{
    index = index - 1;
    cambiarImagen(); // Invocación de una función llamada cambiarImagen()
});

rightBtn.addEventListener('click', () =>{
    index = index + 1;
    cambiarImagen(); // Invocación de una función llamada cambiarImagen()
    resetInterval();
});

//rebaño