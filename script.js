const date = new Date();
const days = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

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

document.addEventListener("DOMContentLoaded", () => {
	const decorations = document.getElementById("decorations");
	const dateText = document.getElementById("date");
	const star = document.getElementById("star");

	dateText.innerText = days + "/" + month + "/" + year;

	if (month === 12) {
		let daysTilChristmas = Math.max(25 - days, 0);

		for (let i = 0; i < daysTilChristmas; i++) {
			const randomImg = ornamentItems[Math.floor(Math.random() * 18)];
			decorations.innerHTML += `<p class="ornament" id="ornament${i}">${randomImg}</p>`;
			const ornament = document.getElementById("ornament" + i);
			const verticalPos = 0.15 + Math.random() * 0.7;
			const maxWidth = verticalPos * 5;
			const horizontalOffset = (Math.random() - 0.5) * maxWidth * 0.8;
			ornament.style.marginLeft = 5 + horizontalOffset + "rem";
			ornament.style.marginTop = 0.5 + verticalPos * 1.5 + "rem";
		}
	}

	star.addEventListener("click", changeStar);
});
