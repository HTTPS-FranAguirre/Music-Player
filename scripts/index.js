const d = document;

const $playlist = d.querySelector(".playlist");

const $playlistSong = d.querySelectorAll(".playlist__song-container");
const $playlistSongName = d.querySelectorAll(".playlist__song-container p");

const $artistSongTitle = d.querySelector(".head__artist-song-title p");

const $audioActual= d.querySelectorAll("audio");

$playlist.addEventListener("click", (e) => {
    for (let i = 0; i < $playlistSongName.length; i++) {

         if(e.target === $playlistSong[i] || e.target === $playlistSongName[i]) {
            $artistSongTitle.textContent = $playlistSong[i].textContent;
            console.log(`../songs/${$playlistSongName[i].textContent}.mp3`)
            $audioActual[i].setAttribute("src", `../songs/${$playlistSongName[i].textContent}.mp3`);

            $audioActual[i].play();

            $playlistSong[i].classList.add("active");     
            $playlistSongName[i].classList.add("active__name");

            //Este código sirve para tener el tiempo actual de la canción (Implementar más adelante)
            // const h = $song[i].currentTime;
            // console.log(h);  
            //Este código sirve para tener la duracion de la canción (Implementar más adelante)
            // const g = $song[i].duration;
            // console.log(g);  
        } else {
            $playlistSong[i].classList.remove("active");
            $playlistSongName[i].classList.remove("active__name"); 
            $audioActual[i].pause();
            // $audioActual[i].removeAttribute("src");
        }
    }   
})