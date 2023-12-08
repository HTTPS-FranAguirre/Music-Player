import song from "./song.js";
import buttons from "./buttons.js";
let $playlistSong = document.querySelectorAll(".playlist__song-container");
let playlistSongCopy = $playlistSong;
export default function chooseMusic() {
  const $headChooseMusic = document.querySelector(".head__choose-music");
  $headChooseMusic.addEventListener("change", (e)=> {
    const d = document;
    const $playlist = d.querySelector(".playlist");
    let $playlistSong = d.querySelectorAll(".playlist__song-container");
    const $buttonSpeedControl = d.querySelector(".speed-control");
    const $buttonToggle = d.querySelector(".button-toggle");
    $buttonToggle.classList.add("pause");
    
    const $range = d.querySelector(".range");
    let wait = setInterval(() => {
      if ($buttonToggle.classList.contains("pause")) {
        $range.value = 0;
        $range.style.background = `black`;
        const $headCurrentSongTimeReal = d.querySelector(
          ".head__current-song-time span:first-child"
          );
          $headCurrentSongTimeReal.textContent = "00:00";
          $buttonToggle.innerHTML = `<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.5em"
      viewBox="0 0 384 512"
    >
      <path
        d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
      />
    </svg>`;
        clearInterval(wait);
      }
    }, 100)

      const $headCurrentSongTime = d.querySelector(
        ".head__current-song-time span:last-child"
      );
      $headCurrentSongTime.textContent = "00:00";

      const $headArtistSongTitle = d.querySelector(".head__artist-song-title p");
      $headArtistSongTitle.textContent = "";

      let text = $buttonSpeedControl.querySelector("p");

      $playlistSong.forEach((el) => {
        let audio = el.querySelector("audio");
        audio.playbackRate = 1;
        text.innerHTML = 1;
      });

      // delete the predefined playlist
      let fileLength = e.target.files.length;
      if (e.target.files.length !== 0){
        $playlistSong.forEach((element) => {
          $playlist.removeChild(element);
        })
      };
      for (let i = 0; i < fileLength; i++) {
        let $div = d.createElement("div");
        $div.classList.add("playlist__song-container");
        let $text = d.createElement("p");
        $text.innerHTML = `${e.target.files[i].name}`
        let $audio = d.createElement("audio");
        $audio.src = URL.createObjectURL(e.target.files[i]);
        $audio.setAttribute("rel", "preload");
        $div.appendChild($text)
        $div.appendChild($audio)
        $playlist.appendChild($div)
      }
      song();

      
      const $headTools = d.querySelector(".head__tools");
      const $headToolsLastChild = d.querySelector(".head__tools span:last-child");
      if (!$headToolsLastChild.classList.contains("playlist__default")){
        let $span = d.createElement("span");
        $span.classList.add("playlist__default");
        $span.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l208 0 0-64L32 96zM192 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0zm-64-64c0 17.7 14.3 32 32 32l48 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-48 0c-17.7 0-32 14.3-32 32zm96 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0zm88-96l-.6 0c5.4 9.4 8.6 20.3 8.6 32c0 13.2-4 25.4-10.8 35.6c24.9 8.7 42.8 32.5 42.8 60.4c0 11.7-3.1 22.6-8.6 32l8.6 0c88.4 0 160-71.6 160-160l0-61.7c0-42.4-16.9-83.1-46.9-113.1l-11.6-11.6C429.5 77.5 396.9 64 363 64l-27 0c-35.3 0-64 28.7-64 64l0 88c0 22.1 17.9 40 40 40s40-17.9 40-40l0-56c0-8.8 7.2-16 16-16s16 7.2 16 16l0 56c0 39.8-32.2 72-72 72z"/></svg>`;
        $span.style.cursor = "pointer";
        $headTools.appendChild($span);
      
        $span.addEventListener("click", () => {
          let $playlist = d.querySelector(".playlist");
          let $playlistSong = d.querySelectorAll(".playlist__song-container");

          if ($playlistSong.length !== 0) {
            $playlistSong.forEach(element => {
              $playlist.removeChild(element);
            })
          }

          

          playlistSongCopy.forEach(playlistDefault => {
            let $div = d.createElement("div");
            $div = playlistDefault;
            $playlist.appendChild($div);
            if (playlistDefault.classList.contains("current__song")){
              let text = playlistDefault.querySelector("p");
              let audio = playlistDefault.querySelector("audio");
              audio.currentTime = 0;
              text.classList.remove("active__name");
              audio.classList.remove("active__audio");
              playlistDefault.classList.remove("current__song");
            }
          })
          const $buttonToggle = d.querySelector(".button-toggle");
            $buttonToggle.classList.add("pause");
          
            const $range = d.querySelector(".range");
            let wait = setInterval(() => {
              if ($buttonToggle.classList.contains("pause")) {
                $range.value = 0;
                $range.style.background = `black`;
                const $headCurrentSongTimeReal = d.querySelector(
                  ".head__current-song-time span:first-child"
                  );
                  $headCurrentSongTimeReal.textContent = "00:00";
                  $buttonToggle.innerHTML = `<svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 384 512"
            >
              <path
                d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
              />
            </svg>`;
                clearInterval(wait);
              }
            }, 100)
        
              const $headCurrentSongTime = d.querySelector(
                ".head__current-song-time span:last-child"
              );
              $headCurrentSongTime.textContent = "00:00";
        
              const $headArtistSongTitle = d.querySelector(".head__artist-song-title p");
              $headArtistSongTitle.textContent = "";

              $headChooseMusic.value = "";

              let $playlistDefault = d.querySelector(".playlist__default");

              let text = $buttonSpeedControl.querySelector("p");
              text.textContent = "1";
        
              $playlistSong.forEach((el) => {
                let audio = el.querySelector("audio");
                audio.playbackRate = 1;
                text.innerHTML = 1;
              });
              $playlistDefault.remove();
        });
      }
    })

}