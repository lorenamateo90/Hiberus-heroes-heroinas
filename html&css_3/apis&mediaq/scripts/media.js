//1.- identificar y localizar el elemento interactivo
// Acceso al wrapper media-player
const player = document.getElementById ('mediaPlayer');


// Botones interactivos
const playButton = document.getElementById('playBtn');
const pauseButton = document.getElementById('pauseBtn');


// Video
const media = document.getElementById('video1');


// Metadata
const duration = document.getElementById('duration');
const played = document.getElementById('played');


// Establecer estado general
played.dataset.state = 'paused';

playButton.addEventListener('click', function() {
    if (played.dataset.state === 'paused'){
        media.play();
        played.dataset.state = 'playing';
    }

}); 

pauseButton.addEventListener('click', function() {
    if (played.dataset.state === 'playing'){
        media.pause();
        played.dataset.state = 'paused';
    }
}); 


// Evento carga metadata
media.addEventListener('loadedmetadata', function(event){
    duration.textContent = formatTime(media.duration);
});

media.addEventListener('timeupdate', function(event){
    played.textContent = formatTime(media.currentTime);
})

//Formatear metadata
function formatTime(time) {
   let minutes = Math.floor(time / 60);
   let seconds = Math.round(time) % 60;

   return `${
       minutes < 10 ? '0' + minutes : minutes
    }: ${
       seconds < 10 ? '0' + seconds : seconds
    }`
};
