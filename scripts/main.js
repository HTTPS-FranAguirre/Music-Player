import chooseMusic from "./chooseMusic.js";
import song from "./song.js";
import currentAudio from "./currentAudio.js";
import buttons from "./buttons.js";
import clickedColor from "./clickedColor.js";
import screenSize from "./screenSize.js";

document.addEventListener("DOMContentLoaded", () => {
  chooseMusic();
  buttons();
  currentAudio();
  song();
  clickedColor();
  screenSize();
});