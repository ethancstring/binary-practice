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

function questions() {
	let params = new URLSearchParams(document.location.search);
	let binarytodenary = params.get("binarytodenary");
	let denarytobinary = params.get("denarytobinary");
        let hextodenary = params.get("hextodenary");
        let denarytohex = params.get("denarytohex");
        let octaltodenary = params.get("octaltodenary");
        let denarytooctal = params.get("denarytooctal");
        let binarytohex = params.get("binarytohex");
        let hextobinary = params.get("hextobinary");
        let binarytooctal = params.get("binarytooctal");
        let octaltobinary = params.get("octaltobinary");
        let hextooctal = params.get("hextooctal");
        let octaltohex = params.get("octaltohex");
        let twoscomptodenary = params.get("twoscomptodenary");
        let denarytotwoscomp = params.get("denarytotwoscomp");
        let fixedpointtodenary = params.get("fixedpointtodenary");
        let denarytofixedpoint = params.get("denarytofixedpoint");
        let floatingpointtodenary = params.get("floatingpointtodenary");
        let denarytofloatingpoint = params.get("denarytofloatingpoint");
	let denarytosignmag = params.get("denarytosignmag");
	let signmagtodenary = params.get("signmagtodenary");
	let noQuestions;
	if (params.get("noQuestions") != ""){
		noQuestions = parseInt(params.get("noQuestions"), 10);
	} else {
		noQuestions = 0;
	}
	console.log(denarytosignmag);
	console.log(signmagtodenary);
	console.log(noQuestions);
}

document.getElementById('btn1').addEventListener('click', () => check(1));
questions();
