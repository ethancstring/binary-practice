import { BaseConversions, FixedPoint, FloatingPoint } from './conversions.js';

function check(number) {
	const box = document.getElementById('answerEntry1');
	let answer = box.value;
	if (answer == BaseConversions.hexToDenary("A3")) {
		box.style.backgroundColor = '#63eb42';
	} else {
		box.style.backgroundColor = '#fc3a3a';
	}
}

document.getElementById('btn1').addEventListener('click', () => check(1));
