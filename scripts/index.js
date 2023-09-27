const d = document;

const $playlistSong = d.querySelector(".playlist__song-container:first-child");
const $song = d.querySelector("audio");
const $artistSongTitle = d.querySelector(".head__artist-song-title > p");

$playlistSong.addEventListener("click", () => {
    $artistSongTitle.textContent = $playlistSong.textContent;
    $song.play();
});