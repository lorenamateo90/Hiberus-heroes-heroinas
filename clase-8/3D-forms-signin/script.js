//Acceso a los botones
//signup-btn
const signupBtn = document.querySelector(".signup-btn");

//signin-btn
const signinBtn = document.querySelector(".signin-btn");

//Acceso al forms-wrapper
const formsWrapper = document.querySelector(".forms-wrapper");

//Asignacion de eventos
signupBtn.addEventListener('click', function(e) {
    e.preventDefault();
    formsWrapper.classList.add("change")
});

signinBtn.addEventListener('click', function(e) {
    e.preventDefault();
    formsWrapper.classList.remove("change");
});