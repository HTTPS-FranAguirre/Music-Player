const d = document;

const $playlist = d.querySelector(".playlist");

const $playlistSong = d.querySelectorAll(".playlist__song-container");
const $playlistSongPrueba = [...d.querySelectorAll(".playlist__song-container")];

const $artistSongTitle = d.querySelector(".head__artist-song-title > p");

const $song = d.querySelectorAll("audio");

/* const $playlistSong = d.querySelector(".playlist__song-container:first-child");
const $artistSongTitle = d.querySelector(".head__artist-song-title > p"); */




$playlist.addEventListener("click", (e) => {
    for (let i = 0; i < $playlistSong.length; i++) {
        if(e.target === $playlistSong[i]){
            console.log("Haz apretado el array " + i)
            // $playlistSong[i].classList.add('active');
        }
    }

    if(e.target.textContent) {
        console.log(e);
        const contenedorMusica = e.target.textContent;
        e.target.parentElement.classList.add('active');
        $artistSongTitle.textContent = e.target.textContent;
        const song = d.createElement("audio");
        song.src=`../songs/${contenedorMusica}.mp3`
        song.play();
    }
})

console.log($playlistSongPrueba[10])
console.log($playlistSong[10])

// const almacenamiento = $playlistSongPrueba.map((el) => 
//     {
//         myArray.push(el);
//     }
// );
// console.log(almacenamiento);