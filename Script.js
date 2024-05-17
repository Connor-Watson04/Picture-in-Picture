const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Propmt user to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    // capture live screen contents - user chooses what to display
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catches errors
    console.log("error here: ", error);
  }
}

//
button.addEventListener("click", async () => {
  // disable button on click
  button.disabled = true;
  // start picture in picture
  await videoElement.requestPictureInPicture();
  // reset button
  button.disabled = false;
});

// on Load

selectMediaStream();
