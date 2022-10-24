for (let i = 0; i < 7; i++) {
	document
		.querySelectorAll(".myButton")
		[i].addEventListener("click", function () {
			let audio;

			let currentButton = this.innerHTML;

			makeSound(currentButton);

			buttonAnimation(currentButton);
		});
}

document.addEventListener("keypress", function (event) {
	makeSound(event.key);
	buttonAnimation(event.key);
});

function makeSound(key) {
	switch (key) {
		case "w":
			audio = new Audio("assets/sounds/tom-1.mp3");
			audio.play();
			break;
		case "a":
			audio = new Audio("assets/sounds/tom-2.mp3");
			audio.play();
			break;
		case "s":
			audio = new Audio("assets/sounds/tom-3.mp3");
			audio.play();
			break;
		case "d":
			audio = new Audio("assets/sounds/tom-4.mp3");
			audio.play();
			break;
		case "j":
			audio = new Audio("assets/sounds/snare.mp3");
			audio.play();
			break;
		case "k":
			audio = new Audio("assets/sounds/crash.mp3");
			audio.play();
			break;
		case "l":
			audio = new Audio("assets/sounds/kick-bass.mp3");
			audio.play();
			break;
		default:
			break;
	}
}

function buttonAnimation(key) {
	let currentButton = document.querySelector("." + key);
	currentButton.classList.add("pressed");
	setTimeout(function(){
		currentButton.classList.remove("pressed");
	}, 100)
}
