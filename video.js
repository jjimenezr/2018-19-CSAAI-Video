function main() {
  console.log("comenzamos");

  video1 = document.getElementById("onep");
  video2 = document.getElementById("dragon");
  video3 = document.getElementById("fairy");
  video4 = document.getElementById("opening");
  boton1 = document.getElementById("boton1");
  boton2 = document.getElementById("boton2");
  boton3 = document.getElementById("boton3");
  initloop1 = document.getElementById("initbucle1");
  initloop2 = document.getElementById("initbucle2");
  initloop3 = document.getElementById("initbucle3");
  finloop1 = document.getElementById("finbucle1");
  finloop2 = document.getElementById("finbucle2");
  finloop3 = document.getElementById("finbucle3");

  iloop1 = false;
  iloop2 = false;
  iloop3 = false;
  floop1 = false;
  floop2 = false;
  floop3 = false;
  timer = false;

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

  initloop1.onclick = () => {
    iloop1 = true;
    iloop2 = false;
    iloop3 = false;
  }

  initloop2.onclick = () => {
    iloop1 = false;
    iloop2 = true;
    iloop3 = false;
  }

  initloop3.onclick = () => {
    iloop1 = false;
    iloop2 = false;
    iloop3 = true;
  }

  finloop1.onclick = () => {
    floop1 = true;
    floop2 = false;
    floop3 = false;
  }

  finloop2.onclick = () => {
    floop1 = false;
    floop2 = true;
    floop3 = false;
  }

  finloop3.onclick = () => {
    floop1 = false;
    floop2 = false;
    floop3 = true;
  }

  function loopinicio() {
    if(iloop1){
      video4.currentTime = 10;
    }else if(iloop2){
      video4.currentTime = 20;
    }else if(iloop3){
      video4.currentTime = 30;
    }
  }


  if(!timer){
    timer = setInterval( () => {
      if (floop1 && video4.currentTime >= 40) {
        loopinicio();
      }else if(floop2 && video4.currentTime >= 50){
        loopinicio();
      }else if(floop3 && video4.currentTime >= 60){
        loopinicio();
      }
    }, 100)
  }
}
