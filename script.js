const video = document.getElementById('video');
const controls = document.querySelector('.controls');
const button = controls.querySelectorAll('.btn')[0];
const icon = button.querySelector('i');
const progress = document.getElementById('progress');
const timestamp = controls.querySelector('.timestamp');

const setVideoProgress = () => {
	video.currentTime = (progress.value * video.duration) / 100;
}

progress.addEventListener('change', setVideoProgress);

const timeConvert = (time) => {
	let minute = 0;
	let second = Math.floor(time);

	if(second >= 60) {
		minute++;
		second = 0;
	}

	// 分、秒が1桁だった場合、先頭に0を追加
	let disMinute;
	if(String(minute).length === 1) {
		disMinute = '0' + minute;
	} else {
		disMinute = minute;
	}

	let disSecond;
	if(String(second).length === 1) {
		disSecond = '0' + second;
	} else {
		disSecond = second;
	}

	return disMinute + ':' + disSecond;
}

// 再生時間を表示
video.addEventListener('timeupdate', function() {
	// id = "progress"のvalueの更新
	progress.value = (video.currentTime / video.duration) * 100;

	timestamp.innerHTML = timeConvert(video.currentTime);
	const maxVideo = Math.floor(video.duration);
	// console.log(Math.floor(video.currentTime), maxVideo)
	if(Math.floor(video.currentTime) >= maxVideo) {
		icon.classList.replace(icon.classList[1],'fa-play');
	}
})


video.addEventListener('click', () => {
	// 再生中かを判定
	if(video.paused) {
		video.play();
		icon.classList.replace(icon.classList[1], 'fa-pause');
	}
})

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
