const d = document;

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

/* Creacion dinamica de src en etiquetas "audio" */
$playlistSong.forEach((recorrido) => {
  const texto = recorrido.firstElementChild.textContent;
  const musiquita = recorrido.lastElementChild;
  musiquita.setAttribute("src", `./songs/${texto}.mp3`);
});

/* Reproductor de musica actual */
$playlist.addEventListener("click", (e) => {
  $artistSongTitle.textContent = e.target.textContent;
  $playlistSongName.forEach(function callback(currentValue, index) {
    let musica = $playlistSong[index].querySelector("audio");
    if (e.target === currentValue) {
      $playlistSong[index].style.backgroundColor = "green";
      musica.play();
    } else {
      $playlistSong[index].style.backgroundColor = "";
      musica.pause();
    }
    $rango.addEventListener("click", (e) => {
      console.log(e.target.value);
      musica.currentTime = e.target.value;
      console.log(musica.currentTime);
    })
  });
});

/* Duración de la canción y tiempo actual */
const $song = d.querySelectorAll("audio");
// console.log($song);

$song.forEach((reproducciendo) => {
  reproducciendo.addEventListener("play", (e) => {
    let reproducciendoActual = e.target;
    console.log("Reproduciendo");
    $rango.max = reproducciendoActual.duration;

    let minutos = Math.floor(reproducciendoActual.duration / 60);
    let segundos = Math.floor(reproducciendoActual.duration % 60);
    let minutosText = minutos.toString();
    let segundosText = segundos.toString();

    // console.log(minutos, segundos);

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
      // console.log(e.target.currentTime)

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
  reproducciendo.addEventListener("pause", (e) => {
    console.log("Detenido");
    let cancionAnterior = e.target;
    cancionAnterior.currentTime = 0;
    // $rango.value = 0;
    
  });

  reproducciendo.addEventListener("timeupdate", (e) => {
    // $rango.value = e.target.currentTime;
    $rango.setAttribute("value", `${e.target.currentTime}`);
    // console.log(e.target.currentTime)
  });
});