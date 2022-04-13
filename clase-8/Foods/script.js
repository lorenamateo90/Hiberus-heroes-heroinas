
document.querySelector('.menu')
    .addEventListener('click', function(){
        document.querySelectorAll(".target")
            .forEach((item) => {
                item.classList.toggle('change')
            })
    });

    const icons = document.querySelectorAll('.section-1-icons i');

    setInterval(function(){
        const icon = document.querySelector('section-1-icons .change')
        icon.classList.remove('change')
        icons[1].classList.add('change')
    },4000);