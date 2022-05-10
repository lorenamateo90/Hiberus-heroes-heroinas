'use strict';

// const audios = document.querySelectorAll("audio");
// const buttons = document.getElementById("buttons");

// audios.forEach(element => {
//     const button = document.createElement("button");
//     button.classList.add("btn");
//     button.innerText = element.id;
//     buttons.appendChild(button);

//     button.addEventListener("click", () => {
//         audios.forEach(element => {
//             element.pause(); 
//         })
//         element.play();
//     })
    
// });


//explicación profesor.

const sounds = 
[
    'applause',
    'boo',
    'gasp',
    'tada',
    'victory',
    'wrong'
]

function stopSounds(){
    sounds.forEach((sound)=>{
        const song = document.getElementById(sound);
        if(song){ //defensive
            song.pause();
            song.currentTime = 0; //reset time
        }
    })
}


sounds.forEach((sound)=>{

    //create element
    const btn = document.createElement('button');
    //format css
    btn.classList.add('btn');
    //label or caption
    btn.innerText = sound;

    //event
    btn.addEventListener('click', function(){
        //silence sounds
        stopSounds();
        //play sound
        const s = document.getElementById(sound);
        if (s){ //defensive
            s.play();
        }
    })
   const buttonsContainer = document.getElementById('buttons').appendChild(btn);

});