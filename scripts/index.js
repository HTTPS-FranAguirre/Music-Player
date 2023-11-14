const d = document;

const $headArtistPhoto = d.querySelector(".head__artist-photo img");

const $headCurrentSongTimeReal = d.querySelector(
  ".head__current-song-time span:first-child"
);
const $headCurrentSongTime = d.querySelector(
  ".head__current-song-time span:last-child"
);

const $playlist = d.querySelector(".playlist");

const $playlistSong = d.querySelectorAll(".playlist__song-container");
const $playlistSongName = d.querySelectorAll(".playlist__song-container p");

const $artistSongTitle = d.querySelector(".head__artist-song-title p");

const $headSongDurationBar = d.querySelector(
  ".head__song-duration-bar progress"
);

const $rango = d.querySelector(".rango");

//Control de botones
const $buttonBackward = d.querySelector(".button-backward");
const $buttonPlay = d.querySelector(".button-play");
const $buttonPause = d.querySelector(".button-pause");
const $buttonStop = d.querySelector(".button-stop");
const $buttonForward = d.querySelector(".button-forward");

$buttonBackward.addEventListener("click", (e) => {
  $playlistSong.forEach(nn => {
    if (nn.classList.contains("cancionActual")){
      let musica = nn.querySelector("audio");
      musica.pause();
      musica.currentTime = 0;
      nn.previousElementSibling.classList.add("back");
    }
  })
  $playlistSong.forEach(nn => {
    if (nn.classList.contains("back")){
      nn.nextElementSibling.classList.remove("cancionActual");
      nn.classList.add("cancionActual");
      let musica = nn.querySelector("audio");
      musica.play();
      let cancion = nn.querySelector("p");
      $artistSongTitle.textContent = cancion.textContent;
      nn.classList.remove("back");  
    }
  })
})

// $buttonBackward.addEventListener("click", (e) => {
//   $playlistSong.forEach(nn => {
//     console.log("***************");
//     if (nn.classList.contains("cancionActual")){
//       let musica = nn.querySelector("audio");
//       musica.pause();
//       musica.currentTime = 0;
//       nn.previousElementSibling.classList.add("back");
//     };

//     setTimeout(() => {
//       if (nn.classList.contains("back")){
//         nn.nextElementSibling.classList.remove("cancionActual");
//         nn.classList.add("cancionActual");
//         let musica = nn.querySelector("audio");
//         musica.play();
//         nn.classList.remove("back");  
//       }
//     }, 100);
//   })
// })

$buttonPlay.addEventListener("click", (e) => {
  $playlistSong.forEach(ff => {
    if (ff.classList.contains("cancionActual")){
        let audio = ff.querySelector("audio");
        audio.play();
    }
  })
})

$buttonPause.addEventListener("click", (e) => {
  $playlistSong.forEach(ff => {
    if (ff.classList.contains("cancionActual")){
        let audio = ff.querySelector("audio");
        audio.pause();
    }
  })
})

$buttonStop.addEventListener("click", (e) => {
  $playlistSong.forEach(bb => {
    if (bb.classList.contains("cancionActual")){
      let audio = bb.querySelector("audio");
      audio.currentTime = 0;
    }
  })
})

$buttonForward.addEventListener("click", (e) => {
  $playlistSong.forEach(nn => {
    if (nn.classList.contains("cancionActual")){
      let musica = nn.querySelector("audio");
      musica.pause();
      musica.currentTime = 0;
      nn.nextElementSibling.classList.add("next");
    };
    if (nn.classList.contains("next")){
      nn.previousElementSibling.classList.remove("cancionActual");
      nn.classList.add("cancionActual");
      let musica = nn.querySelector("audio");
      musica.play();
      let cancion = nn.querySelector("p");
      $artistSongTitle.textContent = cancion.textContent;
      nn.classList.remove("next");  
    }
  })
})



/* Creacion dinamica de src en etiquetas "audio" */
$playlistSong.forEach((recorrido) => {
  const texto = recorrido.firstElementChild.textContent;
  const musiquita = recorrido.lastElementChild;
  musiquita.setAttribute("src", `./songs/${texto}.mp3`);
});

/* Reproductor de musica actual */
$playlist.addEventListener("click", (e) => {
  $artistSongTitle.textContent = e.target.textContent;

  //Img random
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  let numero = getRandomInt(1, 21);
  $headArtistPhoto.src = `./images/${numero}.jpg`;
  $playlistSongName.forEach(function callback(currentValue, index) {
    let musica = $playlistSong[index].querySelector("audio");
    if (e.target === currentValue) {
      $playlistSong[index].classList.add("cancionActual");
      musica.play();
    } else {
      $playlistSong[index].classList.remove("cancionActual");
      musica.pause();
      musica.currentTime = 0;
    }
  });
});

/* Duración de la canción y tiempo actual */
const $song = d.querySelectorAll("audio");
// console.log($song);

$song.forEach((reproducciendo) => {
  reproducciendo.addEventListener("play", (e) => {
    let reproducciendoActual = e.target;

    let minutos = Math.floor(reproducciendoActual.duration / 60);
    let segundos = Math.floor(reproducciendoActual.duration % 60);
    let minutosText = minutos.toString();
    let segundosText = segundos.toString();

        // Manejo control de rango
        $rango.max = reproducciendoActual.duration;

        $rango.addEventListener("touchend", (e) => {
          reproducciendoActual.currentTime = e.target.valueAsNumber;
          reproducciendoActual.currentTime === $rango.value;
        })

        $rango.addEventListener("click", (e) => {
          reproducciendoActual.currentTime = e.target.valueAsNumber;
          reproducciendoActual.currentTime === $rango.value;
        })

    if (minutosText.length < 2) {
      minutosText = `0${minutos}`;
    }
    if (segundosText.length < 2) {
      segundosText = `0${segundos}`;
    }

    let duracionTotal = `${minutosText}:${segundosText}`;
    $headCurrentSongTime.textContent = duracionTotal;

    let descartes = setInterval(() => {
      if (!reproducciendoActual.currentTime) {
        clearInterval(descartes);
      }

      let minutos = Math.floor(reproducciendoActual.currentTime / 60);
      let segundos = Math.floor(reproducciendoActual.currentTime % 60);
      let minutosLength = minutos.toString();
      let segundosLength = segundos.toString();

      if (segundosLength.length < 2) {
        segundosLength = `0${segundos}`;
      }

      if (minutosLength.length < 2) {
        minutosLength = `0${minutos}`;
      }

      let tiempoActual = `${minutosLength}:${segundosLength}`;

      $headCurrentSongTimeReal.textContent = tiempoActual;
    }, 1000);
  });

  reproducciendo.addEventListener("timeupdate", (e) => {
    $rango.setAttribute("value", `${e.target.currentTime}`);
    $rango.value = e.target.currentTime
  });
});