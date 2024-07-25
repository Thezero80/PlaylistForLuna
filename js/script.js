const playlist = document.getElementById('playlist');
const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-button');

playlist.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        const songSrc = e.target.getAttribute('data-src');
        audioPlayer.src = songSrc;
        playButton.innerText = 'Pausar';
        audioPlayer.play();
    }
});

playButton.addEventListener('click', function () {
    if (audioPlayer.paused) {
        playButton.innerText = 'Pausar';
        audioPlayer.play();
    } else {
        playButton.innerText = 'Reproducir';
        audioPlayer.pause();
    }
});