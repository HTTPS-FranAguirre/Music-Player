const d = document;

const $playlist = d.querySelector(".playlist");

const $playlistSong = d.querySelectorAll(".playlist__song-container");
const $p = [...d.querySelectorAll(".playlist__song-container > p")];
// const $p = d.querySelectorAll(".playlist__song-container > p");

const $artistSongTitle = d.querySelector(".head__artist-song-title > p");

const $song = d.querySelectorAll("audio");

/* const $playlistSong = d.querySelector(".playlist__song-container:first-child");
const $artistSongTitle = d.querySelector(".head__artist-song-title > p"); */




$playlist.addEventListener("click", (e) => {
    for (let i = 0; i < $playlistSong.length; i++) {
        if(e.target === $playlistSong[i]){
            console.log(e);
            console.log("Haz apretado el array " + i)
        }
    }

    if(e.target.textContent) {
        const contenedorMusica = e.target.textContent;
        $artistSongTitle.textContent = e.target.textContent;
        const song = d.createElement("audio");
        song.src=`../songs/${contenedorMusica}.mp3`
        song.play();
    }


    // if ($playlistSong) {
    //     $artistSongTitle.textContent = $p.textContent;
    // }
    // console.log(e.target);
})

/* $playlistSong.addEventListener("click", () => {
    $artistSongTitle.textContent = $playlistSong.textContent;
    $song.play();
}); */