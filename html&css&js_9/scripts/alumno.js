
        export default function Alumno(dni, nombre, apellido, curso, nota){
            this.dni = dni;
            this.nombre = nombre;
            this.apellido = apellido;
            this.curso = curso;
            this.nota = nota;
        };

        const alumno = new Alumno("juan");

        //prototype
        Alumno.prototype.asignaturas = new Array();

        // const añadirAsignatura=()=>{
        //  Alumno.prototype.asignaturas.push("Literatura")
   
        // };  
        // juan.añadirAsignatura();

        //1º forma. Añades las asignaturas una a una
        Alumno.prototype.añadirAsignatura = function(asignatura){
            this.asignaturas.push(asignatura);  
        }

        //2º forma. Añades todas las asignaturas de una vez
        // Alumno.prototype.añadirAsignaturas = function(...asignaturas){
        //     this.asignaturas.push(asignaturas);  
        // }
        // juan.añadirAsignaturas("Literatura", "Mates", "Fisica");    Esto iría abajo


        //3º forma. Añades todas las asignaturas de una vez pero creando un array al no poner el spread(...) pero así te cargas lo que hubiese antes dentro del array
        // Alumno.prototype.añadirAsignaturas = function(asignaturas){
        //     this.asignaturas = asignaturas; 
        // }
        // juan.añadirAsignaturas(["Literatura", "Mates", "Fisica"]);    Esto iría abajo

        Alumno.prototype.listarAsignaturas = function(){
            this.asignaturas.forEach(asig => console.log("Asignatura: ", asig));
        }