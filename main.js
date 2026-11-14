import { BaseConversions, FixedPoint, FloatingPoint } from './conversions.js';

function check(number) {
	const box = document.getElementById('answerEntry1');
	box.style.backgroundColor = 'black';
	box.style.color = 'white';
	box.value = BaseConversions.hexToDenary("FF");
}

document.getElementById('btn1').addEventListener('click', () => check(1));
