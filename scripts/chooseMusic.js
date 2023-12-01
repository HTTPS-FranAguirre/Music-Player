export default function chooseMusic() {
    const d = document;
    const $playlist = d.querySelector(".playlist");
    let $playlistSongName = d.querySelectorAll(".playlist__song-container p");
    let $playlistSong = d.querySelectorAll(".playlist__song-container");
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
      $playlistSong = d.querySelectorAll(".playlist__song-container");
      $playlistSongName = d.querySelectorAll(".playlist__song-container p");
    })
  }