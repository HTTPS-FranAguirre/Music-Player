export default function clickedColor() {
    const $clickedColor = document.querySelector(".head__current-color");
    
    $clickedColor.addEventListener("input", (e) => {
      let changedColor = e.target.value;
      const $html = document.documentElement;
      $html.style.setProperty("--color", changedColor);
    });
    
    $clickedColor.addEventListener("change", (e) => {
      let changedColor = e.target.value;
      localStorage.setItem("color", changedColor);
    });
    
    if (localStorage.getItem("color")) {
      let color = localStorage.getItem("color");
      document.documentElement.style.setProperty("--color", color);
    }
  }