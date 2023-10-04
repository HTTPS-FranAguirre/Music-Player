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
    
    // if (myArray.indexOf(e.target)){
    //     console.log(myArray.findIndex())
    // }

    for (let i = 0; i < $playlistSongName.length; i++) {

         if(e.target === $playlistSong[i] || e.target === $playlistSongName[i]) {
            $artistSongTitle.textContent = $playlistSong[i].textContent;
            $playlistSong[i].classList.add("active");     
            $playlistSongName[i].classList.add("active__name");     
        } else {
            $playlistSong[i].classList.remove("active");
            $playlistSongName[i].classList.remove("active__name");     
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