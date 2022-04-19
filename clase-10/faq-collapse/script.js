
document.querySelectorAll(".faq-toggle").forEach((button) =>{
    button.addEventListener('click', () => {
        button.parentElement.classList.toggle('active');
    });
});