const secondHand = document.querySelector('.second');
const minHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

function setDate() {
	const now = new Date();
	const second = now.getSeconds();
	const secondDeg = ((second / 60 ) * 360)+90;
	secondHand.style.transform = `rotate(${secondDeg}deg)`;

	const mins = now.getMinutes();
	const minsDeg = ((mins / 60 ) * 360)+90;
	minHand.style.transform = `rotate(${minsDeg}deg)`;

	const hour = now.getHours();
	const hourDeg = ((hour / 12 ) * 360)+90;
	hourHand.style.transform = `rotate(${hourDeg}deg)`;	

}

setInterval(setDate, 1000);
setDate();

