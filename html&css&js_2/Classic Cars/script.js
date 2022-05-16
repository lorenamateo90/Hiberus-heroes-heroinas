//acceder a todoslos elementos video

const videos = document.querySelectorAll(".video");

//Alternativa 1
function recorrerVideos(){
 videos.forEach(video => {
   video.addEventListener("mouseover", function(){
       video.play()
    });
   video.addEventListener("mouseout", function(){
    video.pause();
    });
 });
};

recorrerVideos();

//Alternativa 2
// videos.forEach(video => {
//     video.addEventListener("mouseover", function(){
//         video.play()
//      });
//     video.addEventListener("mouseout", function(){
//      video.pause();
//      });
//   });


// Tratamiento interacción menú principal

document.querySelector(".menu").addEventListener("click", () => {
    document.querySelectorAll(".target").forEach((item) =>{
        item.classList.toggle("change")
    });
});

document.querySelectorAll(".wrapper").forEach((item) => {
    item.addEventListener(".click", () => {
        document.querySelectorAll(".target").forEach((item) =>{
            item.classList.remove("change");
        } )
    }) 
})


