const d = document;

const $headCurrentSongTimeActual = d.querySelector(".head__current-song-time span:first-child");
const $headCurrentSongTime = d.querySelector(".head__current-song-time span:last-child");

const $playlist = d.querySelector(".playlist");

const $playlistSong = d.querySelectorAll(".playlist__song-container");
const $playlistSongName = d.querySelectorAll(".playlist__song-container p");

const $artistSongTitle = d.querySelector(".head__artist-song-title p");

const $song= d.querySelectorAll("audio");

$playlist.addEventListener("click", (e) => {


    for (let i = 0; i < $playlistSongName.length; i++) {
        if(e.target === $playlistSong[i] || e.target === $playlistSongName[i]) {
            $artistSongTitle.textContent = $playlistSong[i].textContent;
            $song[i].setAttribute("src", `./songs/${$playlistSongName[i].textContent}.mp3`);

            $song[i].play();

            $playlistSong[i].classList.add("active");     
            $playlistSongName[i].classList.add("active__name");

            
                setTimeout(() => {
                let minutos = Math.floor($song[i].duration / 60);
                let segundos = Math.floor($song[i].duration % 60);
                let segundosLength = segundos.toString();
                let minutosLength = minutos.toString();

                if (segundosLength.length < 2){
                    segundosLength = `0${segundos}`
                }
                
                if (minutosLength.length < 2){
                    minutosLength = `0${minutos}`
                }
                
                let duracionTotal = `${minutosLength}:${segundosLength}`
                $headCurrentSongTime.textContent = duracionTotal

              }, 3000);

                let descartes = setInterval(() => {
                    let minutos = Math.floor($song[i].currentTime / 60);
                    let segundos = Math.floor($song[i].currentTime % 60);
                    let minutosLength = minutos.toString();
                    let segundosLength = segundos.toString();
    
                    if (segundosLength.length < 2){
                        segundosLength = `0${segundos}`
                    }
                    
                    if (minutosLength.length < 2){
                        minutosLength = `0${minutos}`
                    }
                    
                    let tiempoActual = `${minutosLength}:${segundosLength}`
                    $headCurrentSongTimeActual.textContent = tiempoActual
                }, 1000);


                

              
            

            
            // if ($song[i].paused === true) {
            //     console.log("ho")
            // }
            //   if($song[i].getAttribute("src") === `./songs/${$playlistSongName[i].textContent}.mp3`) {
            //       $song[i].currentTime = 0;
            //       clearTimeout(temporizador);
            // }

                    // if(e.target !== $playlistSongName[i]) {
                    //     clearTimeout(temporizador)
                        
                    // }
              

            //Este código sirve para tener el tiempo actual de la canción (Implementar más adelante)
            // const h = $song[i].currentTime;
            // console.log(h);   
        } else {
            $playlistSong[i].classList.remove("active");
            $playlistSongName[i].classList.remove("active__name"); 
            $headCurrentSongTime.textContent = `00:00`;
            // audio.pause()
            // $audioActual[i].removeAttribute("src");
        }
    }   
})