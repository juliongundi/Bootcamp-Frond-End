function initWebsite() {
    var playButton = document.getElementById("playButton");
    var pauseButton = document.getElementById("pauseButton");
    var video = document.getElementById("video");

    playButton.addEventListener("click", function () {
        video.play();
        playButton.classList.add("hide");
        pauseButton.classList.remove("hide");
    });


    pauseButton.addEventListener("click", function () {
        video.pause();
        pauseButton.classList.add("hide");
        playButton.classList.remove("hide");
    });
}

window.onload = initWebsite;