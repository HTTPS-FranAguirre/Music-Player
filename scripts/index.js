const d = document;

const $headCurrentSongTime = d.querySelector(".head__current-song-time p");

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

              }, 2000);

              let temporizador = setInterval(() => {
                console.log($song[i].currentTime.toFixed(0))

                console.log($song[i].duration.toFixed(0)); 
              }, 1000);
            
                setInterval(() => {
                    if($song[i].currentTime.toFixed(0) === $song[i].duration.toFixed(0)) {
                      clearInterval(temporizador);
                      console.log("*Se ejecuta")
                    }
                }, 5000);
              

            //Este código sirve para tener el tiempo actual de la canción (Implementar más adelante)
            // const h = $song[i].currentTime;
            // console.log(h);   
        } else {
            $playlistSong[i].classList.remove("active");
            $playlistSongName[i].classList.remove("active__name"); 
            $song[i].pause();
            // $song[i].currentTime = 0;
            // $audioActual[i].removeAttribute("src");
        }
    }   
})