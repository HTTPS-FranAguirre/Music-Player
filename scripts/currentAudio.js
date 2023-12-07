export default function currentAudio() {
    const d = document;
    const $playlist = d.querySelector(".playlist");
    $playlist.addEventListener("click", (e) => {
        let $playlistSong = d.querySelectorAll(".playlist__song-container");
        let $playlistSongName = d.querySelectorAll(".playlist__song-container p");
        const $headArtistSongTitle = d.querySelector(".head__artist-song-title p");
        const $headArtistPhoto = d.querySelector(".head__artist-photo img");
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
            $headArtistSongTitle.textContent = $text.textContent;
            $playlistSong[index].classList.add("current__song");
            $playlistSongName[index].classList.add("active__name");
            audio.classList.add("active__audio");
            audio.currentTime = 0;
            audio.play();
            $headArtistPhoto.src = `./images/${number}.jpg`;
          } else {
            $playlistSong[index].classList.remove("current__song");
            $playlistSongName[index].classList.remove("active__name");
            audio.classList.remove("active__audio");
            audio.pause();
            audio.currentTime = 0;
          }
        });
      });
}