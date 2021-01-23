var m = document.getElementById("player");
var p = document.getElementById("words");

function controlAudio() {
  if (m.paused) {
    p.classList.add("words-active");
    m.play();
  } else {
    p.classList.remove("words-active");
    m.pause();
  }
}

function setAudio(volume) {
  m.volume = volume;
}
