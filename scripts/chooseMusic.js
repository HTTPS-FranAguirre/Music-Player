import song from "./song.js";
export default function chooseMusic() {
  const $headChooseMusic = document.querySelector(".head__choose-music");
  $headChooseMusic.addEventListener("change", (e)=> {
    const d = document;
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

      const $playlist = d.querySelector(".playlist");
        // let $playlistSongName = d.querySelectorAll(".playlist__song-container p");
        let $playlistSong = d.querySelectorAll(".playlist__song-container");

      // delete the predefined playlist
      let fileLength = e.target.files.length;
      if (fileLength !== 0){
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
    })
  }