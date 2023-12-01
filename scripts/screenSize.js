export default function screenSize() {
    const $playlist = document.querySelector(".playlist");
    $playlist.addEventListener("click", (e) => {
      let screenSize = window.innerHeight - 52;
    
      if (e.clientY < 230) {
        $playlist.scrollBy(0, -52);
      }
      if (e.clientY > screenSize) {
        $playlist.scrollBy(0, 52);
      }
    });
  }