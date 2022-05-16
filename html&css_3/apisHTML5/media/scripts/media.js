// 1. Identificar y localizar el elemento interactivo

const playButton = document.getElementById('playBtn');
const pauseButton = document.getElementById('pauseBtn');
const media = document.getElementById("video1");

playButton.addEventListener("click", function(){
    media.play();
})


pauseButton.addEventListener("click", function(){
    media.pause();
})