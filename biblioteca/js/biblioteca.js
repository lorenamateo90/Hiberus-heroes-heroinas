
const libroAventuras = {
    titulo: 'Alicia',
    imagenPortada: './images/alicia.jpg',
    color: 'azul',
    autor: 'Lewis Carrol',
    numeroPaginas: 144,
    editorial: 'Anaya',
};

const libroTerror = {
    titulo: 'Dracula',
    imagenPortada: './images/dracula.jpeg',
    color: 'negro',
    autor: 'Bram Stoker',
    numeroPaginas: 488,
    editorial: 'Alma',
};

const libroSuspense = {
   
    titulo: 'Nunca',
    imagenPortada: './images/nunca.jpeg',
    color: 'rojo',
    autor: 'Ken Follet',
    numeroPaginas: 832,
    editorial: 'PlazaJanes',
};

const libreria = [libroAventuras, libroTerror, libroSuspense];


export const biblio = {
    //data
    libros: [],

    //función para pintar en el html todos los objetos que tengamos y que estos se muestren por pantalla.
    cargarLibros: function(){
        
        const container = document.querySelector('.container');
        const booksSection = document.createElement('section');
        container.appendChild(booksSection);
   
        for(let libro of this.libros){
            booksSection.innerHTML += 
            `
            <article class="card">
            <h3>${libro.titulo}</h3>
            <img class="bookImage" src=${libro.imagenPortada} alt= "imagen libro"/>
            </article>
            `
        };   
    }
};

biblio.libros = libreria;
biblio.cargarLibros();
