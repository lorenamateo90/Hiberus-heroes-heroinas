

function buscarAlumno(dni, alumnos) {
    let alumno = null //var local
    if (alumnos.has(dni)){
        alumno = alumnos.get(dni);
    }
   return alumno;
};

function matricularAlumno(alumno, alumnos) {
    alumnos.set(alumno.dni, alumno);
};

function darDeBajaAlumno(dni, alumnos) {
    if (alumnos.has(dni)){
        alumnos.delete(dni);
    }
};

function actualizarDatosAlumno(alumno, alumnos) {
    if (alumnos.has(alumno.dni)){
        alumnos.set(alumno.dni, alumno);
    }
};

function listarAlumnos(alumnos){
    //TODO: I*D del recorrido de un Map
    //1º forma
    // if (alumnos){
    // for (const alumno of alumnos) {
    //     console.log("Alumno: " , alumno[1].nombre);
    // }
    //2ºforma
    alumnos.forEach((valor, clave) => {
        console.log ("Alumno: ", valor);
    })
};

// function limpiarAlumnos(alumnos){
//     if(alumnos){
//     alumnos.clear();
//     console.log("Lista de alumnos limpia: ", alumnos.size); // 0
//     }
// }

// function asignaturasAlumnos (asignaturas){
//     asignaturas.add('Mates');
//     asignaturas.add('Ingles');
//     asignaturas.add('Programacion');
//     asignaturas.add('Fisica');
//     asignaturas.add('Frances');
//     console.log(asignaturas);

// }

function asignarAsignaturasAlAlumno(alumno, asignaturas){
    if (alumno && asignaturas){
        alumno.asignaturas = asignaturas;
    }
}

export { buscarAlumno, matricularAlumno, darDeBajaAlumno, actualizarDatosAlumno, listarAlumnos};