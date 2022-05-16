
export const persist = {
    guardar: function (clave, info){
        if (info !== null && info !== undefined){
            localStorage.setItem(clave, info);
        }
    },

    recuperar: function(clave) {
        return localStorage.getItem(clave);
    }
};