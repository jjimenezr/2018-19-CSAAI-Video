function main() {
  console.log("comenzamos");

  video1 = document.getElementById("onep")

  video1.onmouseover = () => {
    video1.muted = false;
  }
}
