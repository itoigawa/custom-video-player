const video = document.getElementById('video');
const controls = document.querySelector('.controls');
const button = controls.querySelectorAll('.btn')[0];
const icon = button.querySelector('i');

button.addEventListener('click', () => {
	// 再生中かを判定
	if(video.paused) {
		video.play();
		icon.classList.replace(icon.classList[1], 'fa-pause');
	} else {
		video.pause();
		icon.classList.replace(icon.classList[1],'fa-play');
	}
})