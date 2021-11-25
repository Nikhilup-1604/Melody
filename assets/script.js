console.log("welcome to spotify");

//Initialize the Variables
let songIndex = 0;
let audioElement= new Audio("my.mp3");
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById("myProgressBar");
let songs = [{songName:"Tu jaane na" ,filepath: "song/my.mp3" ,coverpath:"covers/1.jpg"},
{songName:"Tu jaane na" ,filepath: "song/my.mp3" ,coverpath:"covers/1.jpg"},
{songName:"Tu jaane na" ,filepath: "song/my.mp3" ,coverpath:"covers/1.jpg"},
{songName:"Tu jaane na" ,filepath: "song/my.mp3" ,coverpath:"covers/1.jpg"},
{songName:"Tu jaane na" ,filepath: "song/my.mp3" ,coverpath:"covers/1.jpg"},
{songName:"Tu jaane na" ,filepath: "song/my.mp3" ,coverpath:"covers/1.jpg"},
{songName:"Tu jaane na" ,filepath: "song/my.mp3" ,coverpath:"covers/1.jpg"},
{songName:"Tu jaane na" ,filepath: "song/my.mp3" ,coverpath:"covers/1.jpg"}
];

//audioElement.play();

//Handle play/pause click

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add("fa-pause-circle");
    }
    else{
        audioElement.pause ();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }

})

//Listen to Events
myProgressBar.addEventListener('timeupdate',()=>{
    console.log("timeUpadte");

    //Update seekbar

})
