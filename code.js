// let songindex=0;
// let audioElement= new Audio('songs/1.mp3');
// let masterPlay = document.getElementById('masterPlay');
// let myProgressVar = document.getElementById('progressvar');
// let gif = document.getElementById('gif');
// let mastersongname = document.getElementById('mastersong');
// let songsitem = Array.from(document.getElementsByClassName('songitem'));

// let songs = [
//     {
//         songname: "salam",
//         filepath: "songs/1.mp3",
//         coverpath: "covers/1.jpg"
//     },
//     {
//         songname: "ishq",
//         filepath: "songs/2.mp3",
//         coverpath: "covers/2.jpg"
//     },
//     {
//         songname: "faasle",
//         filepath: "songs/3.mp3",
//         coverpath: "covers/3.jpg"
//     },
//     {
//         songname: "vaat unkahi",
//         filepath: "songs/4.mp3",
//         coverpath: "covers/4.jpg"
//     },
//     {
//         songname: "dekho",
//         filepath: "songs/5.mp3",
//         coverpath: "covers/5.jpg"
//     },
//     {
//         songname: "dil mein mere",
//         filepath: "songs/6.mp3",
//         coverpath: "covers/6.jpg"
//     },
//     {
//         songname: "salam e ishq",
//         filepath: "songs/7.mp3",
//         coverpath: "covers/7.jpg"
//     },
//     {
//         songname: "tere pyar mein",
//         filepath: "songs/8.mp3",
//         coverpath: "covers/8.jpg"
//     },
//     {
//         songname: "chand tarey",
//         filepath: "songs/9.mp3",
//         coverpath: "covers/9.jpg"
//     },
//     {
//         songname: "din dhalay",
//         filepath: "songs/10.mp3",
//         coverpath: "covers/10.jpg"
//     },
// ]

// songsitem.forEach((element, i) => 
// {
//     element.querySelector("img").src = songs[0].coverpath;
//     const imgElement = element.querySelector("img");
//     const songnameElement = element.querySelector(".songname");

//     if (imgElement && songnameElement) {
//         imgElement.src = songs[i].coverpath;
//         songnameElement.innerText = songs[i].songname;
//     } else {
//         console.error(`Unable to find img or .songname elements in songitem ${i}`);
//     }
// });


// ///listen to events 
// masterPlay.addEventListener('click',()=>
// {
//     if(audioElement.paused || audioElement.currentTime<=0)
//     {
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
//     gif.style.opacity=1;
//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity=0;
//     }
// }

// )

// audioElement.addEventListener('timeupdate', () => { // Corrected event name
//     console.log('timeupdate');

//     progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
//     console.log(progress);
//     myProgressVar.value=progress;
// }
// )
 
// myProgressVar.addEventListener('change', () => {
//     if (audioElement.duration > 0) {
//         audioElement.currentTime = myProgressVar.value * audioElement.duration / 100;
//     }
// });

// const makeallplays = ()=>{
//     Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>
// {
//     element.classList.remove('fa-pause-circle');
//     element.classList.add('fa-play-circle');
//  }) 
// }

// Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>
// {
//    element.addEventListener('click',(e)=>
//    {
//     makeallplays();
//     songindex = parseInt(e.target.id)
//     e.target.classList.remove('fa-play-circle');
//     e.target.classList.add('fa-pause-circle');
//     audioElement.src = `songs/${songindex+1}.mp3`;
//     mastersongname.innerText = songs[songindex].songname;
//     audioElement.currentTime=0;
//     audioElement.play();
//     gif.style.opacity=1;
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
//    })
// })

// document.getElementById('next').addEventListener('click',()=>
// {
//     if(songindex>=9)
//     {
//     songindex=0;
//     }
//     else{
//         songindex+=1;
//     }
//     audioElement.src = `songs/${songindex+1}.mp3`;
//     mastersongname.innerText = songs[songindex].songname;
//     audioElement.currentTime=0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
// })

// document.getElementById('previous').addEventListener('click',()=>
// {
//     if(songindex<=0)
//     {
//     songindex=0;
//     }
//     else{
//         songindex-=1;
//     }
//     audioElement.src = `songs/${songindex+1}.mp3`;
//     mastersongname.innerText = songs[songindex].songname;
//     audioElement.currentTime=0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
// })