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

const $buttonToggle = d.querySelector(".button-toggle");

$buttonToggle.addEventListener("click", (e) => {
  $buttonToggle.classList.toggle("pause");
  if (!$buttonToggle.classList.contains("pause")){
    // console.log("reanudar");
    $playlistSong.forEach((ff) => {
      if (ff.classList.contains("cancionActual")) {
        let audio = ff.querySelector("audio");
        audio.play();
      }
    });
    $buttonToggle.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    height="1.5em"
    viewBox="0 0 320 512"
  >
    <path
      d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"
    />
  </svg>`
  }
  if ($buttonToggle.classList.contains("pause")){
    // console.log("pausar");
    $playlistSong.forEach((ff) => {
      if (ff.classList.contains("cancionActual")) {
        let audio = ff.querySelector("audio");
        audio.pause();
      }
    });
    $buttonToggle.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    height="1.5em"
    viewBox="0 0 384 512"
  >
    <path
      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
    />
  </svg>`
    
  }
})


/* Creacion dinamica de src en etiquetas "audio" */
$playlistSong.forEach((recorrido) => {
  const texto = recorrido.firstElementChild.textContent;
  const musiquita = recorrido.lastElementChild;
  musiquita.setAttribute("src", `./songs/${texto}.mp3`);
  musiquita.setAttribute("rel", "preload");
});

//Control de botones
const $buttonSpeedControl = d.querySelector(".speed-control");
const $buttonBackward = d.querySelector(".button-backward");
const $buttonStop = d.querySelector(".button-stop");
const $buttonForward = d.querySelector(".button-forward");


let contadorClicks = 2;
$buttonSpeedControl.addEventListener("click", (e) => {
  let texto = $buttonSpeedControl.querySelector("p");

  contadorClicks++;

  $playlistSong.forEach((bb) => {

      let audio = bb.querySelector("audio");   
      if (contadorClicks >= 4){
        audio.playbackRate = 2;
        texto.innerHTML = 2;
        contadorClicks = 0;
      }
    
      if (contadorClicks === 1) {
        audio.playbackRate = 0.5;
        texto.innerHTML = 0.5;
      }
    
      if (contadorClicks === 2) {
        audio.playbackRate = 1;
        texto.innerHTML = 1;
      }
    
      if (contadorClicks === 3) {
        audio.playbackRate = 1.5;
        texto.innerHTML = 1.5;
      }
  });
})


$buttonBackward.addEventListener("click", (e) => {
  $playlistSong.forEach((nn) => {
    if (nn.classList.contains("cancionActual")) {
      let musica = nn.querySelector("audio");
      musica.pause();
      musica.currentTime = 0;
      let cancion = nn.querySelector("p");
      cancion.classList.remove("active__name");
      if (!(nn.previousElementSibling === null)){
        nn.previousElementSibling.classList.add("back");
        $playlist.scrollBy(0, -52);
      } else {
        cancion.classList.add("active__name");
        musica.currentTime = 0;
        musica.play();
      }
    }
  });
  $playlistSong.forEach((nn) => {
    if (nn.classList.contains("back")) {
      nn.nextElementSibling.classList.remove("cancionActual");
      nn.classList.add("cancionActual");
      let musica = nn.querySelector("audio");
      musica.currentTime = 0;
      musica.play();
      let cancion = nn.querySelector("p");
      $artistSongTitle.textContent = cancion.textContent;
      cancion.classList.add("active__name");
      nn.classList.remove("back");
    }
  });
});

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

$buttonStop.addEventListener("click", (e) => {
  $playlistSong.forEach((bb) => {
    if (bb.classList.contains("cancionActual")) {
      let audio = bb.querySelector("audio");
      audio.currentTime = 0;
    }
  });
});

$buttonForward.addEventListener("click", (e) => {
  $playlistSong.forEach((nn) => {
    if (nn.classList.contains("cancionActual")) {
      let musica = nn.querySelector("audio");
      musica.pause();
      musica.currentTime = 0;
      let cancion = nn.querySelector("p");
      cancion.classList.remove("active__name");
      if (!(nn.nextElementSibling === null)){
        nn.nextElementSibling.classList.add("next");
        $playlist.scrollBy(0, 52);
      } else {
        cancion.classList.add("active__name");
        musica.currentTime = 0;
        musica.play();
      }
    }
    if (nn.classList.contains("next")) {
      nn.previousElementSibling.classList.remove("cancionActual");
      nn.classList.add("cancionActual");
      let musica = nn.querySelector("audio");
      musica.currentTime = 0;
      musica.play();
      let cancion = nn.querySelector("p");
      $artistSongTitle.textContent = cancion.textContent;
      cancion.classList.add("active__name");
      nn.classList.remove("next");
    }
  });
});

/* Reproductor de musica actual */
$playlist.addEventListener("click", (e) => {
  $artistSongTitle.textContent = e.target.textContent;

  $playlistSongName.forEach(function callback(currentValue, index) {
    let musica = $playlistSong[index].querySelector("audio");
    if (e.target === currentValue) {
      $playlistSong[index].classList.add("cancionActual");
      $playlistSongName[index].classList.add("active__name");
      musica.currentTime = 0;
      musica.play();
    } else {
      $playlistSong[index].classList.remove("cancionActual");
      $playlistSongName[index].classList.remove("active__name");
      musica.pause();
      musica.currentTime = 0;
    }

    //Img random
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }
    let numero = getRandomInt(1, 21);
    $headArtistPhoto.src = `./images/${numero}.jpg`;
  });
});

/* Duración de la canción y tiempo actual */
const $song = d.querySelectorAll("audio");

$song.forEach((reproducciendo) => {
  reproducciendo.addEventListener("play", (e) => {
    let reproducciendoActual = e.target;
    // console.log(Number.isNaN(reproducciendoActual.duration));

    // Manejo control de rango
    $rango.max = reproducciendoActual.duration;

    $rango.addEventListener("touchend", (e) => {
      reproducciendoActual.currentTime = e.target.valueAsNumber;
      reproducciendoActual.currentTime === $rango.value;
    });

    $rango.addEventListener("click", (e) => {
      reproducciendoActual.currentTime = e.target.valueAsNumber;
      reproducciendoActual.currentTime === $rango.value;
    });

    let v = setInterval(() => {
      if (!Number.isNaN(reproducciendoActual.duration) === true) {
        let minutos = Math.floor(reproducciendoActual.duration / 60);
        let segundos = Math.floor(reproducciendoActual.duration % 60);
        let minutosText = minutos.toString();
        let segundosText = segundos.toString();

        if (minutosText.length < 2) {
          minutosText = `0${minutos}`;
        }
        if (segundosText.length < 2) {
          segundosText = `0${segundos}`;
        }

        let duracionTotal = `${minutosText}:${segundosText}`;
        $headCurrentSongTime.textContent = duracionTotal;
        $rango.max = reproducciendoActual.duration;
        clearInterval(v);
      }
    }, 1000);

    //Boton de pausa-play se actualiza cuando se reproduce
    $buttonToggle.classList.remove("pause");
    $buttonToggle.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    height="1.5em"
    viewBox="0 0 320 512"
  >
    <path
      d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"
    />
  </svg>`;
  });

  reproducciendo.addEventListener("timeupdate", (e) => {
    let tiempo = e.target.currentTime;
    $rango.setAttribute("value", `${tiempo}`);
    $rango.value = tiempo;
    let minutos = Math.floor(tiempo / 60);
      let segundos = Math.floor(tiempo % 60);
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
  });
  reproducciendo.addEventListener("ended", (e) => {
    $playlistSong.forEach((nn) => {
      if (nn.classList.contains("cancionActual")) {
        let musica = nn.querySelector("audio");
        musica.pause();
        musica.currentTime = 0;
        let cancion = nn.querySelector("p");
        cancion.classList.remove("active__name");
        nn.nextElementSibling.classList.add("next");
      }
      if (nn.classList.contains("next")) {
        nn.previousElementSibling.classList.remove("cancionActual");
        nn.classList.add("cancionActual");
        let musica = nn.querySelector("audio");
        musica.currentTime = 0;
        musica.play();
        let cancion = nn.querySelector("p");
        $artistSongTitle.textContent = cancion.textContent;
        cancion.classList.add("active__name");
        nn.classList.remove("next");
      }
    });
  })
});
