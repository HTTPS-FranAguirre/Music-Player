const d = document;

const $headCurrentSongTime = d.querySelector(".head__current-song-time");

const $playlist = d.querySelector(".playlist");

const $playlistSong = d.querySelectorAll(".playlist__song-container");
const $playlistSongName = d.querySelectorAll(".playlist__song-container p");

const $artistSongTitle = d.querySelector(".head__artist-song-title p");

const $song= d.querySelectorAll("audio");

$playlist.addEventListener("click", (e) => {
    for (let i = 0; i < $playlistSongName.length; i++) {

         if(e.target === $playlistSong[i] || e.target === $playlistSongName[i]) {
            $artistSongTitle.textContent = $playlistSong[i].textContent;
            $song[i].setAttribute("src", `../songs/${$playlistSongName[i].textContent}.mp3`);
            
            $song[i].play();

            setTimeout(() => {
                let minutos = Math.floor($song[i].duration / 60);
                let segundos = Math.floor($song[i].duration % 60);
                let duracionTotal = `${minutos.toFixed(0)} : ${segundos.toFixed(0)}`
                const $parrafo = d.createElement("p");
                $parrafo.textContent = duracionTotal
                $headCurrentSongTime.appendChild($parrafo);
              }, 150);
            

            $playlistSong[i].classList.add("active");     
            $playlistSongName[i].classList.add("active__name");

            //Este código sirve para tener el tiempo actual de la canción (Implementar más adelante)
            // const h = $song[i].currentTime;
            // console.log(h);  
            //Este código sirve para tener la duracion de la canción (Implementar más adelante)
            // const g = $song.duration;
            // console.log(g);  
        } else {
            $playlistSong[i].classList.remove("active");
            $playlistSongName[i].classList.remove("active__name"); 
            $song[i].pause();
            // $audioActual[i].removeAttribute("src");
        }
    }   
})