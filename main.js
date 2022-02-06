function musicmode(musicsrc,thisVolume,thisLoop){
    let modeBtn = document.querySelector("music-btn")
    let mp3 = new Audio(musicsrc)
    const files = this.files;

    modeBtn.classList.add("style")
    modeBtn.style.userSelect = "none"
    modeBtn.style.cursor = "pointer"

    modeBtn.onclick = function(){
        if(modeBtn.innerHTML == "Play"){
            modeBtn.innerHTML = "Pause"
            mp3.play();
        }else{
            modeBtn.innerHTML = "Play"
            mp3.pause();
        }
    }



    mp3.addEventListener("playing",function(){
        console.log(`The music is playing!\n: ${musicsrc}`);
        modeBtn.innerHTML = "Pause"
    })
    mp3.addEventListener("pause",function(){
        console.log("The music is paused!");
        modeBtn.innerHTML = "Play"
    })


    mp3.volume = thisVolume
    mp3.loop = thisLoop

    if(mp3.loop == true){
        console.log("Is Loop");
    }
}
