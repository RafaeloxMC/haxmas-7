//getting date
const date = new Date();
const days = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

//list of all the images in img/ornaments and a list of emojis the top decoration thing can be
const ornamentItems = [
	"🎄",
	"🎅",
	"🤶",
	"🎁",
	"⭐",
	"❄️",
	"☃️",
	"🦌",
	"🔔",
	"🎀",
	"🍪",
	"🥛",
	"🧦",
	"🕯️",
	"✨",
	"💫",
	"🍬",
	"🎉",
];
const stars = ["⭐", "💫", "💖", "🎄", "🏴‍☠️", "👾"];

function changeStar() {
	let randomIndex = Math.floor(Math.random() * 6);
	document.getElementById("star").innerText = stars[randomIndex];
}

//checks if the HTML elements have loaded before doing anything
document.addEventListener("DOMContentLoaded", () => {
	//sets the elements with the IDs to variables for easy access!
	const decorations = document.getElementById("decorations");
	const dateText = document.getElementById("date");
	const star = document.getElementById("star");

	//sets the text inside dateText to DD/MM/YY (the superior format)
	dateText.innerText = days + "/" + month + "/" + year;

	//checks if the month is december
	if (month === 12) {
		let daysTilChristmas = Math.max(25 - days, 0);

		//for each day til christmas; it adds another ornament to the christmas tree
		for (let i = 0; i < daysTilChristmas; i++) {
			const randomImg = ornamentItems[Math.floor(Math.random() * 18)];
			decorations.innerHTML += `<p class="ornament" id="ornament${i}">${randomImg}</p>`;
			const ornament = document.getElementById("ornament" + i);
			//sets the margins to a random value between (4,3) and (14,5)
			ornament.style.marginLeft = Math.random() * 10 + 4 + "rem";
			ornament.style.marginTop = Math.random() * 2 + 3 + "rem";
		}
	}

	star.addEventListener("click", changeStar);
});
