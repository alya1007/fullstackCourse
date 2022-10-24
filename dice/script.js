function pickRandomNumber() {
	let randNumber = Math.floor(Math.random() * 6) + 1;
	return randNumber;
}

function setImgName() {
	let imgName = "assets/img/dice" + pickRandomNumber() + ".png";
	return imgName;
}

function generateDie(img) {
	img.setAttribute("src", setImgName());
}

function throwDice() {
	let img1 = document.querySelectorAll(".dice")[0];
	let img2 = document.querySelectorAll(".dice")[1];

	generateDie(img1);
	generateDie(img2);

	let name1 = img1.getAttribute("src");
	let name2 = img2.getAttribute("src");

	if (name1.charAt(15) > name2.charAt(15)) {
		document.querySelector(".title_text").innerHTML = "Player 1 Wins!";
	} else if (name1.charAt(15) < name2.charAt(15)) {
		document.querySelector(".title_text").innerHTML = "Player 2 Wins!";
	} else if (name1.charAt(15) == name2.charAt(15)) {
		document.querySelector(".title_text").innerHTML = "Draw!";
	}
}

throwDice();