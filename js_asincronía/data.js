export default class Data {
    constructor(urlBase){
        this._urlBase = urlBase;
    }

    //getters/setters

    //comportamiento

    //1. Callbacks
    // getUsers(callback){
    //     fetch(`${this._urlBase}/users`) //peticion asincrona. Esto es una promesa. La pedimos y tarda un tiempo.
    //     .then(response => response.json()) // Aquí cogemos el json del response
    //     //.then (json => console.log(json))  // Aquí lo sacamos por consola
    //     .then (json => callback(json))

    // }

    //2. Solo promesas
//     getUsers(){
//          return fetch(`${this._urlBase}/users`); //peticion asincrona. Esto es una promesa. La pedimos y tarda un tiempo.
//     }
// }


    //3. Async /await
    async getUsers(){
        // const response = await fetch(`${this._urlBase}/users`);
        // return await response.json()
        return await fetch(`${this._urlBase}/users`)
            .then(response => response.json());
    }
}