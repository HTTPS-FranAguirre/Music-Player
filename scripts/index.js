const d = document;

const $playlist = d.querySelector(".playlist");

const $playlistSong = d.querySelectorAll(".playlist__song-container");
const $p = [...d.querySelectorAll(".playlist__song-container > p")];
// const $p = d.querySelectorAll(".playlist__song-container > p");

const $artistSongTitle = d.querySelector(".head__artist-song-title > p");

/* const $playlistSong = d.querySelector(".playlist__song-container:first-child");
const $song = d.querySelector("audio");
const $artistSongTitle = d.querySelector(".head__artist-song-title > p"); */



const debug = (param) => console.log(...param);
debug($p);

const OBJ = { nombre: $p
}

console.log(OBJ.nombre[1])

// console.log($p.map)


$playlist.addEventListener("click", (e) => {
    const $2 = $p[2];

    // console.log($playlistSong);
    // console.log($4);
    // console.log($p);


    if (e.target === $2) {
        // console.log("Hiiii");
        $artistSongTitle.textContent = $2.textContent;
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