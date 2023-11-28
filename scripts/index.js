const d = document;

const $headArtistPhoto = d.querySelector(".head__artist-photo img");

const $headCurrentSongTimeReal = d.querySelector(
  ".head__current-song-time span:first-child"
);
const $headCurrentSongTime = d.querySelector(
  ".head__current-song-time span:last-child"
);

const $playlist = d.querySelector(".playlist");

let $playlistSong = d.querySelectorAll(".playlist__song-container");
let $playlistSongName = d.querySelectorAll(".playlist__song-container p");

const $artistSongTitle = d.querySelector(".head__artist-song-title p");

const $range = d.querySelector(".range");

const $buttonToggle = d.querySelector(".button-toggle");

const $headChooseMusic = d.querySelector(".head__choose-music");
$headChooseMusic.addEventListener("change", (e)=> {
  // Barrer con los playlist predefinidos
  let fileLength = e.target.files.length;
  if (fileLength !== 0){
    $playlistSong.forEach((element) => {
      $playlist.removeChild(element);
    })
  };
  for (let i = 0; i < fileLength; i++) {
    // console.log(e.target.files[i]);
    $div = d.createElement("div");
    $div.classList.add("playlist__song-container");
    $text = d.createElement("p");
    $text.innerHTML = `${e.target.files[i].name}`
    $audio = d.createElement("audio");
    $audio.src = URL.createObjectURL(e.target.files[i]);
    $audio.setAttribute("rel", "preload");
    $div.appendChild($text)
    $div.appendChild($audio)
    $playlist.appendChild($div)
  }
  $song = d.querySelectorAll("audio");
  $playlistSong = d.querySelectorAll(".playlist__song-container");
  $playlistSongName = d.querySelectorAll(".playlist__song-container p");

  $song.forEach((playing) => {
    playing.addEventListener("play", (e) => {
      let currentAudio = e.target;
      // console.log(currentAudio)
      // range control
      $range.max = currentAudio.duration;
  
      $range.addEventListener("touchend", (e) => {
        currentAudio.currentTime = e.target.valueAsNumber;
        currentAudio.currentTime === $range.value;
      });
  
      $range.addEventListener("click", (e) => {
        currentAudio.currentTime = e.target.valueAsNumber;
        currentAudio.currentTime === $range.value;
      });
  
      let checker = setInterval(() => {
        if (Number.isNaN(currentAudio.duration) === false) {
          let minutes = Math.floor(currentAudio.duration / 60);
          let seconds = Math.floor(currentAudio.duration % 60);
          let minutesText = minutes.toString();
          let secondsText = seconds.toString();
  
          if (minutesText.length < 2) {
            minutesText = `0${minutes}`;
          }
          if (secondsText.length < 2) {
            secondsText = `0${seconds}`;
          }
  
          let songDuration = `${minutesText}:${secondsText}`;
          $headCurrentSongTime.textContent = songDuration;
          $range.max = currentAudio.duration;
          clearInterval(checker);
        }
      }, 1000);
  
      //button toggle between play and pause
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
  
    playing.addEventListener("timeupdate", (e) => {
      let time = e.target.currentTime;
      $range.setAttribute("value", `${time}`);
      $range.value = time;
      let minutes = Math.floor(time / 60);
      let seconds = Math.floor(time % 60);
      let minutesLength = minutes.toString();
      let secondsLength = seconds.toString();
  
      if (secondsLength.length < 2) {
        secondsLength = `0${seconds}`;
      }
  
      if (minutesLength.length < 2) {
        minutesLength = `0${minutes}`;
      }
  
      let timeNow = `${minutesLength}:${secondsLength}`;
  
      $headCurrentSongTimeReal.textContent = timeNow;
  
      const $color = document.documentElement.style.getPropertyValue("--color");
      if ($color === "") {
        $range.style.background = `linear-gradient(to right, rgb(0 233 255) ${$range.min}%, black ${$range.value}%, black ${$range.max}% )`;
      }
      $range.style.background = `linear-gradient(to right, ${$color} ${$range.min}%, black ${$range.value}%, black ${$range.max}% )`;
    });
    playing.addEventListener("ended", () => {
      $playlistSong.forEach((el) => {
        if (el.classList.contains("currentSong")) {
          let audio = el.querySelector("audio");
          audio.pause();
          audio.currentTime = 0;
          let song = el.querySelector("p");
          song.classList.remove("active__name");
          el.nextElementSibling.classList.add("next");
        }
        if (el.classList.contains("next")) {
          el.previousElementSibling.classList.remove("currentSong");
          el.classList.add("currentSong");
          let audio = el.querySelector("audio");
          audio.currentTime = 0;
          audio.play();
          let song = el.querySelector("p");
          $artistSongTitle.textContent = song.textContent;
          song.classList.add("active__name");
          el.classList.remove("next");
        }
      });
    });
  });
})

$buttonToggle.addEventListener("click", () => {
  $buttonToggle.classList.toggle("pause");
  if (!$buttonToggle.classList.contains("pause")) {
    $playlistSong.forEach((el) => {
      if (el.classList.contains("currentSong")) {
        let audio = el.querySelector("audio");
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

/* Dynamic creation of "src" in "audio" tags */
// Playlist por defecto
$playlistSong.forEach((el) => {
  const $text = el.firstElementChild.textContent;
  const $audio = el.lastElementChild;
  $audio.setAttribute("src", `./songs/${$text}.mp3`);
  $audio.setAttribute("rel", "preload");
});

//Button control
const $buttonSpeedControl = d.querySelector(".speed-control");
const $buttonBackward = d.querySelector(".button-backward");
const $buttonStop = d.querySelector(".button-stop");
const $buttonForward = d.querySelector(".button-forward");

let clickCounter = 2;
$buttonSpeedControl.addEventListener("click", () => {
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
  $playlistSong.forEach((el) => {
    if (el.classList.contains("currentSong")) {
      let audio = el.querySelector("audio");
      audio.pause();
      audio.currentTime = 0;
      let song = el.querySelector("p");
      song.classList.remove("active__name");
      if (!(el.previousElementSibling === null)) {
        el.previousElementSibling.classList.add("back");
        $playlist.scrollBy(0, -52);
      } else {
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
      $artistSongTitle.textContent = song.textContent;
      song.classList.add("active__name");
      el.classList.remove("back");
    }
  });
});

$buttonStop.addEventListener("click", () => {
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
  $playlistSong.forEach((el) => {
    if (el.classList.contains("currentSong")) {
      let audio = el.querySelector("audio");
      audio.pause();
      audio.currentTime = 0;
      let song = el.querySelector("p");
      song.classList.remove("active__name");
      if (!(el.nextElementSibling === null)) {
        el.nextElementSibling.classList.add("next");
        $playlist.scrollBy(0, 52);
      } else {
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
      $artistSongTitle.textContent = song.textContent;
      song.classList.add("active__name");
      el.classList.remove("next");
    }
  });
});

/* Reproductor de audio actual */

$playlist.addEventListener("click", (e) => {
  
  // Img random
  function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }
      let number = getRandomInt(1, 21);

      $playlistSong.forEach(function callback(currentValue, index) {
        let audio = $playlistSong[index].querySelector("audio");
        let $text = currentValue.querySelector("p");
        if (e.target === currentValue || e.target === $text) {
      $artistSongTitle.textContent = $text.textContent;
      $playlistSong[index].classList.add("currentSong");
      $playlistSongName[index].classList.add("active__name");
      audio.currentTime = 0;
      audio.play();
      $headArtistPhoto.src = `./images/${number}.jpg`;
    } else {
      $playlistSong[index].classList.remove("currentSong");
      $playlistSongName[index].classList.remove("active__name");
      audio.pause();
      audio.currentTime = 0;
    }
  });
});

/* Song duration and current time */
let $song = d.querySelectorAll("audio");

$song.forEach((playing) => {
  playing.addEventListener("play", (e) => {
    let currentAudio = e.target;
    // console.log(currentAudio)
    // range control
    $range.max = currentAudio.duration;

    $range.addEventListener("touchend", (e) => {
      currentAudio.currentTime = e.target.valueAsNumber;
      currentAudio.currentTime === $range.value;
    });

    $range.addEventListener("click", (e) => {
      currentAudio.currentTime = e.target.valueAsNumber;
      currentAudio.currentTime === $range.value;
    });

    let checker = setInterval(() => {
      if (Number.isNaN(currentAudio.duration) === false) {
        let minutes = Math.floor(currentAudio.duration / 60);
        let seconds = Math.floor(currentAudio.duration % 60);
        let minutesText = minutes.toString();
        let secondsText = seconds.toString();

        if (minutesText.length < 2) {
          minutesText = `0${minutes}`;
        }
        if (secondsText.length < 2) {
          secondsText = `0${seconds}`;
        }

        let songDuration = `${minutesText}:${secondsText}`;
        $headCurrentSongTime.textContent = songDuration;
        $range.max = currentAudio.duration;
        clearInterval(checker);
      }
    }, 1000);

    //button toggle between play and pause
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

  playing.addEventListener("timeupdate", (e) => {
    let time = e.target.currentTime;
    $range.setAttribute("value", `${time}`);
    $range.value = time;
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    let minutesLength = minutes.toString();
    let secondsLength = seconds.toString();

    if (secondsLength.length < 2) {
      secondsLength = `0${seconds}`;
    }

    if (minutesLength.length < 2) {
      minutesLength = `0${minutes}`;
    }

    let timeNow = `${minutesLength}:${secondsLength}`;

    $headCurrentSongTimeReal.textContent = timeNow;

    const $color = document.documentElement.style.getPropertyValue("--color");

    if ($color === "") {
      $range.style.background = `linear-gradient(90deg, rgb(0 233 255) ${$range.min}%, black ${$range.value}%, black ${$range.max}% )`;
    }
    $range.style.background = `linear-gradient( 90deg, ${$color} ${$range.min}%, rgb(0, 0, 0) ${$range.value}%, rgb(0, 0, 0) ${$range.max}% )`;
  });
  playing.addEventListener("ended", () => {
    $playlistSong.forEach((el) => {
      if (el.classList.contains("currentSong")) {
        let audio = el.querySelector("audio");
        audio.pause();
        audio.currentTime = 0;
        let song = el.querySelector("p");
        song.classList.remove("active__name");
        el.nextElementSibling.classList.add("next");
      }
      if (el.classList.contains("next")) {
        el.previousElementSibling.classList.remove("currentSong");
        el.classList.add("currentSong");
        let audio = el.querySelector("audio");
        audio.currentTime = 0;
        audio.play();
        let song = el.querySelector("p");
        $artistSongTitle.textContent = song.textContent;
        song.classList.add("active__name");
        el.classList.remove("next");
      }
    });
  });
});

//If you click on an element that is not so visible, it scrolls 52 pixels
$playlist.addEventListener("click", (e) => {
  let screenSize = window.innerHeight - 52;

  if (e.clientY < 230) {
    $playlist.scrollBy(0, -52);
  }
  if (e.clientY > screenSize) {
    $playlist.scrollBy(0, 52);
  }
});

const $clickedColor = d.querySelector(".head__current-color");
// console.log($clickedColor);

$clickedColor.addEventListener("input", (e) => {
  let changedColor = e.target.value;
  const $html = document.documentElement;
  $html.style.setProperty("--color", changedColor);
});

$clickedColor.addEventListener("change", (e) => {
  let changedColor = e.target.value;
  localStorage.setItem("color", changedColor);
});

d.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("color")) {
    color = localStorage.getItem("color");
    document.documentElement.style.setProperty("--color", color);
  }
});