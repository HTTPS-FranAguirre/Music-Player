export default function song() {
    const d = document;
    const $playlist = d.querySelector(".playlist");
    const $range = d.querySelector(".range");
    const $headCurrentSongTimeReal = d.querySelector(
      ".head__current-song-time span:first-child"
      );
      const $headCurrentSongTime = d.querySelector(
        ".head__current-song-time span:last-child"
      );
    let $song = d.querySelectorAll("audio");
      let $playlistSong = d.querySelectorAll(".playlist__song-container");
      const $headArtistSongTitle = d.querySelector(".head__artist-song-title p");
    
      $song = d.querySelectorAll("audio");
      $song.forEach((playing) => {
        playing.addEventListener("play", (e) => {
          let currentAudio = e.target;
      
          // range control
          $range.addEventListener("input", (e) => {
            let gettingAudioTime = (e.target.valueAsNumber/100)*currentAudio.duration;
            currentAudio.currentTime = gettingAudioTime;
          })  
          
      
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
              clearInterval(checker);
            }
          }, 1000);
      
          //button toggle between play and pause
          const $buttonToggle = d.querySelector(".button-toggle");
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

          if (playing.classList.contains("active__audio")){
            // console.log(e.target.currentTime)
            let time = e.target.currentTime;
            let percentageOfMusic = (time/e.target.duration)*100;
            let percentageOfMusicInteger = percentageOfMusic.toFixed();
      
            $range.value = percentageOfMusic;
            $range.setAttribute("value", `${percentageOfMusicInteger}`);
            
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
              $range.style.background = `linear-gradient(90deg, rgb(0 233 255) 0%, black ${percentageOfMusicInteger}%, black 100% )`;
            }
            $range.style.background = `linear-gradient( 90deg, ${$color} 0%, black ${percentageOfMusicInteger}%, rgb(0, 0, 0) 100% )`;
      
          }
      
        });
        playing.addEventListener("ended", () => {

          $playlistSong.forEach((el) => {
            if (el.classList.contains("currentSong")) {
              let audio = el.querySelector("audio");
              audio.pause();
              audio.currentTime = 0;
              let song = el.querySelector("p");
              audio.classList.remove("active__audio");
              song.classList.remove("active__name");
              if (el.nextElementSibling !== null){
                el.nextElementSibling.classList.add("next");
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
              el.classList.add("scroll-animation");
              let countDown = setTimeout(() => {
                el.classList.remove("scroll-animation");
                $playlist.scrollBy(0, 52);
                clearTimeout(countDown);
              }, 750);
              el.classList.remove("next");
            }
          });
        });
      });
  }