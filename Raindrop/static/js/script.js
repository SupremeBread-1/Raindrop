var m = document.getElementById("player");
function controlAudio() {
  if (m.paused) {
    m.play();
  } else {
    m.pause();
  }
}
function setAudio(volume) {
  m.volume = volume;
}
