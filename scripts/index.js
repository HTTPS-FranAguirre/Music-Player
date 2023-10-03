const d = document;

const $playlist = d.querySelector(".playlist");

const $playlistSong = d.querySelectorAll(".playlist__song-container");
const $playlistSongName = d.querySelectorAll(".playlist__song-container p");

const $artistSongTitle = d.querySelector(".head__artist-song-title p");

// const $song = d.querySelectorAll("audio");

/* const $playlistSong = d.querySelector(".playlist__song-container:first-child");
const $artistSongTitle = d.querySelector(".head__artist-song-title > p"); */


// console.log($playlistSong);

let myArray = Array.from($playlistSong);
let contenedor = [];


console.log(myArray[0]);

/* for (let i = 0; i < myArray.length; i++) {
    const cont = myArray[i].innerText;
    contenedor.push(cont);
} */


// console.log(contenedor);
// console.log($playlistSongName);



$playlist.addEventListener("click", (e) => {
    let nombre = e.target.textContent;
    $artistSongTitle.textContent = nombre;
    
    

    for (let i = 0; i < $playlistSongName.length; i++) {
        const tempo = $playlistSongName[i].innerHTML;
        // console.log(tempo);
        
        if(e.target === $playlistSongName[0]) {
            $playlistSong[0].classList.add("active");
        } else {
            $playlistSong[0].classList.remove("active");
        }

        if(e.target === $playlistSongName[1]) {
            $playlistSong[1].classList.add("active");
        } else {
            $playlistSong[1].classList.remove("active");
        }

        if(e.target === $playlistSongName[2]) {
            $playlistSong[2].classList.add("active");
        } else {
            $playlistSong[2].classList.remove("active");
        }

        if(e.target === $playlistSongName[3]) {
            $playlistSong[3].classList.add("active");
        } else {
            $playlistSong[3].classList.remove("active");
        }

        if(e.target === $playlistSongName[4]) {
            $playlistSong[4].classList.add("active");
        } else {
            $playlistSong[4].classList.remove("active");
        }

        if(e.target === $playlistSongName[5]) {
            $playlistSong[5].classList.add("active");
        } else {
            $playlistSong[5].classList.remove("active");
        }

    }

    // if($playlistSong.textContent === e.target.textContent) {
    //     console.log("Hola")
    // }

    // if($playlistSong.textContent === $artistSongTitle.textContent) {
    //     $playlistSong.classList.add('active');
    // }
    
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