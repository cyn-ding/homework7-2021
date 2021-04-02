var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume*100+"%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate = video.playbackRate *0.95;
// 	video.playbackRate *=.95
	console.log("New speed is "+video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate = video.playbackRate /.95;
// 	video.playbackRate /=.95
	console.log("New speed is "+video.playbackRate)
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing Volume");
	console.log(this.value)
	video.volume=this.value/100
	document.querySelector("#volume").innerHTML=video.volume*100+"%";
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	if (video.muted === false){
		video.muted=true
		document.querySelector("#mute").innerHTML="Unmute";
	} else {
		video.muted=false
		document.querySelector("#mute").innerHTML="Mute";
	}
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if (video.currentTime > video.duration - 15){
		// video.loop= true;
		console.log("Original location "+video.currentTime)
		video.currentTime = video.currentTime + 15;
		console.log("New location "+video.currentTime)
	} else {
		// video.currentTime = 0;
		video.loop = true;
		console.log("Original location "+video.currentTime)
		video.currentTime = video.currentTime + 15;
		console.log(video.currentTime)
		console.log("New location "+video.currentTime)
	}
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing CSS");
	video.play()
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Changing CSS");
	video.play()
	video.classList.remove("oldSchool");
});
