
export const biblio = {
    //data
    libros: [],
    //comportamiento
    prestarLibro: function(titulo){
        const libroAPrestar = this.buscarTituloLibro(titulo);
        if (libroAPrestar !== undefined) {
            //actualizar la libreria
            this.libros = this.libros.filter ((libro) => libro.titulo != libroAPrestar.titulo);
        }
        return libroAPrestar;
    },

    devolverLibro: function (libroDevuelto){
        if(libroDevuelto){ // se puede poner de esta forma o de la que esta comentada debajo
        // if(libroDevuelto !== null && libroDevuelto !== undefined){
            if (this.buscarTituloLibro(libroDevuelto.titulo) === undefined) {
                this.libros.unshift(libroDevuelto);
            }
        }
    },

    //filtrar: (n_paginas) => biblio.libros.filter((libro) => libro.numeroPaginas > n_paginas) //En este caso es arrow. Tb puede ir con llaves y el return
    filtrar: function (n_paginas){ //con la funcion anonima accedemos mediante el this a las propiedades. En arrow ponemos directamente el objeto en vez del this para acceder a ellas
        return this.libros.filter((libro) => libro.numeroPaginas > n_paginas)
    },

    buscarPorAutor: function(autor){
        return this.libros.find ((libro) => libro.autor === autor)
    },

    buscarTituloLibro: function(titulo){
        return this.libros.find((libro) => libro.titulo.toUpperCase() === titulo.toUpperCase()); // asi buscara el titulo se introduzca en minusc o mayusc indistintamente
    },

    quitarLibro: function (libro) {
        return this.libros.pop();
    },

    forrarLibros: function(){
        this.libros = this.libros.map((libro) => ({...libro, forrado:true}));
    },

    listarLibros: function(){
        this.libros.forEach((libro) => console.log(libro));
    }
}