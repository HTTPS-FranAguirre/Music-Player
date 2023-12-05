export default function buttons() {
const d = document;
let $playlist = d.querySelector(".playlist");
let $playlistSong = d.querySelectorAll(".playlist__song-container");
const $headArtistSongTitle = d.querySelector(".head__artist-song-title p");
const $buttonSpeedControl = d.querySelector(".speed-control");
const $buttonBackward = d.querySelector(".button-backward");
const $buttonToggle = d.querySelector(".button-toggle");
const $buttonStop = d.querySelector(".button-stop");
const $buttonForward = d.querySelector(".button-forward");

let clickCounter = 2;
$buttonSpeedControl.addEventListener("click", () => {
    $playlistSong = d.querySelectorAll(".playlist__song-container");
  let text = $buttonSpeedControl.querySelector("p");

  clickCounter++;

  $playlistSong.forEach((el) => {
    let audio = el.querySelector("audio");
    if (clickCounter >= 4) {
      audio.playbackRate = 2;
      text.innerHTML = 2;
      clickCounter = 0;
    }

    if (clickCounter === 1) {
      audio.playbackRate = 0.5;
      text.innerHTML = 0.5;
    }

    if (clickCounter === 2) {
      audio.playbackRate = 1;
      text.innerHTML = 1;
    }

    if (clickCounter === 3) {
      audio.playbackRate = 1.5;
      text.innerHTML = 1.5;
    }
  });
});

$buttonBackward.addEventListener("click", () => {
    $playlistSong = d.querySelectorAll(".playlist__song-container");
  $playlistSong.forEach((el) => {
    if (el.classList.contains("currentSong")) {
      let audio = el.querySelector("audio");
      audio.pause();
      audio.currentTime = 0;
      let song = el.querySelector("p");
      audio.classList.remove("active__audio");
      song.classList.remove("active__name");
      if (!(el.previousElementSibling === null)) {
        el.previousElementSibling.classList.add("back");
        $playlist.scrollBy(0, -52);
      } else {
        audio.classList.add("active__audio");
        song.classList.add("active__name");
        audio.currentTime = 0;
        audio.play();
      }
    }
  });
  $playlistSong.forEach((el) => {
    if (el.classList.contains("back")) {
      el.nextElementSibling.classList.remove("currentSong");
      el.classList.add("currentSong");
      let audio = el.querySelector("audio");
      audio.currentTime = 0;
      audio.play();
      let song = el.querySelector("p");
      $headArtistSongTitle.textContent = song.textContent;
      audio.classList.add("active__audio");
      song.classList.add("active__name");
      el.classList.remove("back");
    }
  });
});

$buttonToggle.addEventListener("click", () => {
    $playlistSong = d.querySelectorAll(".playlist__song-container");
  $buttonToggle.classList.toggle("pause");
  if (!$buttonToggle.classList.contains("pause")) {
    let almacen = [];
    $playlistSong.forEach((el) => {
      if (el.classList.contains("currentSong")) {
        let audio = el.querySelector("audio");
        audio.play();
      }
      const ele = !el.classList.contains("currentSong");
      if (ele){
        almacen.push(el);
      }
    });
    if (almacen.length === $playlistSong.length){
      $playlistSong[0].classList.add("currentSong");
      let audio =  $playlistSong[0].querySelector("audio");
      let text = $playlistSong[0].querySelector("p");
      $headArtistSongTitle.textContent = text.textContent;
      audio.classList.add("active__audio");
      text.classList.add("active__name");
      audio.play();
    }
    $buttonToggle.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    height="1.5em"
    viewBox="0 0 320 512"
  >
    <path
      d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"
    />
  </svg>`;
  }
  if ($buttonToggle.classList.contains("pause")) {
    $playlistSong.forEach((el) => {
      if (el.classList.contains("currentSong")) {
        let audio = el.querySelector("audio");
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
  </svg>`;
  }
});

$buttonStop.addEventListener("click", () => {
    $playlistSong = d.querySelectorAll(".playlist__song-container");
  $playlistSong.forEach((el) => {
    if (el.classList.contains("currentSong")) {
      let audio = el.querySelector("audio");
      audio.pause();
      audio.currentTime = 0;
      $buttonToggle.classList.add("pause");
      $buttonToggle.innerHTML = `<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.5em"
      viewBox="0 0 384 512"
    >
      <path
        d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
      />
    </svg>`;
    }
  });
});

$buttonForward.addEventListener("click", () => {
    $playlistSong = d.querySelectorAll(".playlist__song-container");
  $playlistSong.forEach((el) => {
    if (el.classList.contains("currentSong")) {
      let audio = el.querySelector("audio");
      audio.pause();
      audio.currentTime = 0;
      let song = el.querySelector("p");
      audio.classList.remove("active__audio");
      song.classList.remove("active__name");
      if (!(el.nextElementSibling === null)) {
        el.nextElementSibling.classList.add("next");
        $playlist.scrollBy(0, 52);
      } else {
        audio.classList.add("active__audio");
        song.classList.add("active__name");
        audio.currentTime = 0;
        audio.play();
      }
    }
    if (el.classList.contains("next")) {
      el.previousElementSibling.classList.remove("currentSong");
      el.classList.add("currentSong");
      let audio = el.querySelector("audio");
      audio.currentTime = 0;
      audio.play();
      let song = el.querySelector("p");
      audio.classList.add("active__audio");
      $headArtistSongTitle.textContent = song.textContent;
      song.classList.add("active__name");
      el.classList.remove("next");
    }
  });
});
}