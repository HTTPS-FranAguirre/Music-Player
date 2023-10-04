const d = document;

const $playlist = d.querySelector(".playlist");

const $playlistSong = d.querySelectorAll(".playlist__song-container");
const $playlistSongName = d.querySelectorAll(".playlist__song-container p");

const $artistSongTitle = d.querySelector(".head__artist-song-title p");

// const $song = d.querySelectorAll(".playlist__song-container audio");

// console.log($song);
let audioActual= d.querySelectorAll("audio");

console.log(audioActual);

$playlist.addEventListener("click", (e) => {
    for (let i = 0; i < $playlistSongName.length; i++) {

         if(e.target === $playlistSong[i] || e.target === $playlistSongName[i]) {
            $artistSongTitle.textContent = $playlistSong[i].textContent;
            audioActual[i].setAttribute("src", `../songs/${$playlistSongName[i].textContent}.mp3`);
            audioActual[i].play();

            $playlistSong[i].classList.add("active");     
            $playlistSongName[i].classList.add("active__name");

            // $song[i].play(); 


            //Este código sirve para tener el tiempo actual de la canción (Implementar más adelante)
            // const h = $song[i].currentTime;
            // console.log(h);  
            //Este código sirve para tener la duracion de la canción (Implementar más adelante)
            // const g = $song[i].duration;
            // console.log(g);  
        } else {
            $playlistSong[i].classList.remove("active");
            $playlistSongName[i].classList.remove("active__name"); 
            audioActual[i].pause();
            audioActual[i].removeAttribute("src");
            // audioActual.removeAttribute("src");
        }
    }   
})


/* $playlist.addEventListener("click", (e) => {
    for (let i = 0; i < $playlistSong.length; i++) {
        if(e.target === $playlistSong[i]){
            console.log("Haz apretado el array " + i)
            $playlistSong[i].classList.add('active');
        }
    }

    if(e.target.textContent) {
        console.log(e);
        const contenedorMusica = e.target.textContent;
        e.target.parentElement.classList.add('active');
        $artistSongTitle.textContent = e.target.textContent;
        const $song = d.createElement("audio");
        $song.src=`../songs/${contenedorMusica}.mp3`
        $song.play();
    }
}) */

// console.log($playlistSongPrueba[10])
// console.log($playlistSong[10])

// const almacenamiento = $playlistSongPrueba.map((el) => 
//     {
//         myArray.push(el);
//     }
// );
// console.log(almacenamiento);