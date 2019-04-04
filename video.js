function main() {
  console.log("comenzamos");

  video1 = document.getElementById("onep");
  video2 = document.getElementById("dragon");
  video3 = document.getElementById("fairy");
  video4 = document.getElementById("opening");
  boton1 = document.getElementById("boton1");
  boton2 = document.getElementById("boton2");
  boton3 = document.getElementById("boton3");

  video1.onmouseover = () => {
    video1.muted = false;
  }

  video1.onmouseout = () => {
    video1.muted = true;
  }

  video2.onmouseover = () => {
    video2.muted = false;
  }

  video2.onmouseout = () => {
    video2.muted = true;
  }

  video3.onmouseover = () => {
    video3.muted = false;
  }

  video3.onmouseout = () => {
    video3.muted = true;
  }

  boton1.onclick = () => {
    video4.src = "one_piece_video.mp4";
    video4.currentTime = video1.currentTime;
  }

  boton2.onclick = () => {
    video4.src = "dragon_ball_z_opening.mp4";
    video4.currentTime = video2.currentTime;
  }

  boton3.onclick = () => {
    video4.src = "fairy_tail_opening.mp4";
    video4.currentTime = video3.currentTime;
  }


}
