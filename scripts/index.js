const d = document;

const $headCurrentSongTimeReal = d.querySelector(".head__current-song-time span:first-child");
const $headCurrentSongTime = d.querySelector(".head__current-song-time span:last-child");

const $playlist = d.querySelector(".playlist");

const $playlistSong = d.querySelectorAll(".playlist__song-container");
const $playlistSongName = d.querySelectorAll(".playlist__song-container p");

const $artistSongTitle = d.querySelector(".head__artist-song-title p");

const $headSongDurationBar = d.querySelector(".head__song-duration-bar progress");

const $rango = d.querySelector(".rango");

console.log($rango)

// $rango.addEventListener("click", (e) => {
//     console.log(e.target.valueAsNumber);
// })

/* Creacion dinamica de src en etiquetas "audio" */
$playlistSong.forEach(recorrido => {
    const texto = recorrido.firstElementChild.textContent;
    const musiquita = recorrido.lastElementChild;
    musiquita.setAttribute("src", `./songs/${texto}.mp3`);
})

/* Reproductor de musica actual */
$playlist.addEventListener("click", (e) => {
    $artistSongTitle.textContent = e.target.textContent
    $playlistSongName.forEach(function callback(currentValue, index) {
        let musica = $playlistSong[index].querySelector("audio");
        if(e.target === currentValue){
            $playlistSong[index].style.backgroundColor = "green";
            musica.play();
        } else {
            $playlistSong[index].style.backgroundColor = "";
            musica.pause();
        }
    });
})

/* Duración de la canción y tiempo actual */
const $song = d.querySelectorAll("audio");
console.log($song);

$song.forEach(reproducciendo => {
    reproducciendo.addEventListener("play", (e) => {
    let reproducciendoActual = e.target;
    console.log("Reproduciendo");
    console.log(e);

    $rango.max = reproducciendoActual.duration;
    $rango.addEventListener("click", (e) => {
    reproducciendoActual.currentTime = e.target.valueAsNumber;
})
    

    let minutos = Math.floor(reproducciendoActual.duration / 60);
    let segundos = Math.floor(reproducciendoActual.duration % 60);
    let minutosText = minutos.toString();
    let segundosText = segundos.toString();

    console.log(minutos,segundos)

    if (minutosText.length < 2){
        minutosText = `0${minutos}`
    }
    if (segundosText.length < 2){
        segundosText = `0${segundos}`
    }

    let duracionTotal = `${minutosText}:${segundosText}`
    $headCurrentSongTime.textContent = duracionTotal

    let descartes = setInterval(() => {
        if(!reproducciendoActual.currentTime){
            clearInterval(descartes);
        }
        // console.log(e.target.currentTime)

        let minutos = Math.floor(reproducciendoActual.currentTime / 60);
        let segundos = Math.floor(reproducciendoActual.currentTime % 60);
        let minutosLength = minutos.toString();
        let segundosLength = segundos.toString();

        if (segundosLength.length < 2){
            segundosLength = `0${segundos}`
        }
        
        if (minutosLength.length < 2){
            minutosLength = `0${minutos}`
        }
        
        let tiempoActual = `${minutosLength}:${segundosLength}`

        $headCurrentSongTimeReal.textContent = tiempoActual
        
    }, 1000);

    
    
})
    reproducciendo.addEventListener("pause", (e) => {
        console.log("Detenido");
        let cancionAnterior = e.target;
        cancionAnterior.currentTime = 0;
    })



    reproducciendo.addEventListener("timeupdate", (e) => {
        $rango.value = e.target.currentTime;
      });
})
/* Reproductor de musica */

// $playlist.addEventListener("click", (e) => {
//     let hi = e.target.nextElementSibling;
    
// })

/*  */


/* Creacion dinamica de musica en el dom al inicio */
// const nombre = [];

// const coincide = (element) => element === e.target.innerText;
//     nameSong = nombre.find(coincide);
//     console.log(nameSong)
//     const $audio = document.createElement("audio")
//         $audio.src = `./songs/${nameSong}.mp3`;
//         id = nombre.findIndex(coincide);
//         console.log(id);
//             $playlistSong[id].appendChild($audio);
/*  */

/* const listaCanciones = Array.from($playlistSongName);


for (let i = 0; i < listaCanciones.length; i++){
    nombre.push(listaCanciones[i].innerHTML);
}

console.log(nombre);




$playlist.addEventListener("click", (e) => {

    // console.log(e);

    // audio.pause();
    

    // const ggg = nombre.findIndex(coincide)

    // console.log(ggg);

    // console.log(e.target.innerText);


    // const audio = new Audio(`./songs/${nombreCancion}.mp3`)
      
    // audio.play();

    for (let i = 0; i < $playlistSongName.length; i++) {
        if(e.target === $playlistSong[i] || e.target === $playlistSongName[i]) {

            

    $audio.play();


            // const audio = new Audio(`./songs/${$playlistSong[i].innerHTML}.mp3`)

            

            // audio.addEventListener("play", () => {
            //     console.log("Se ha comenzado/reanudado la reproducción");
            //   });

            $artistSongTitle.textContent = $playlistSong[i].textContent;

            // $song[i].setAttribute("src", `./songs/${$playlistSongName[i].textContent}.mp3`);

            // $song[i].play();

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
                setTimeout(() => {
                let minutos = Math.floor($audio.duration / 60);
                let segundos = Math.floor($audio.duration % 60);
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
            // $audio.pause(); 
            if ($audio.play < 2) {
                $audio.pause();
            }

            // $song[i].currentTime = 0;
            $headCurrentSongTime.textContent = `00:00`;
            // $audioActual[i].removeAttribute("src");
        }
    }   
})
 */