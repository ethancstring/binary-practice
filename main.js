import { BaseConversions, FixedPoint, FloatingPoint } from './conversions.js';

class Question {
	constructor(startBase, endBase, startNumber, answer, extra) {
		this.startBase = startBase;
		this.endBase = endBase;
		this.startNumber = startNumber;
		this.endNumber = endNumber;
		this.extra = extra;
	}

	getStartBase() {
		return this.startBase;
	}

	getEndBase() {
		return this.endBase;
	}

	getStartNumber() {
		return this.startNumber;
	}

	getEndNumber() {
		return this.endNumber;
	}

	getExtra(index) {
		return this.extra[index];
	}
}

function separate(questionType) {
	let start;
	let end;
	switch (questionType) {
		case "binarytodenary":
			start = "binary";
			end = "denary";
			break;
                case "denarytobinary":
                        start = "denary";
                        end = "binary";
                        break;
                case "hextodenary":
                        start = "hex";
                        end = "denary";
                        break;
                case "denarytohex":
                        start = "denary";
                        end = "hex";
                        break;
                case "octaltodenary":
                        start = "octal";
                        end = "denary";
                        break;
                case "denarytooctal":
                        start = "denary";
                        end = "octal";
                        break;
                case "binarytohex":
                        start = "binary";
                        end = "hex";
                        break;
                case "hextobinary":
                        start = "hex";
                        end = "binary";
                        break;
                case "binarytooctal":
                        start = "binary";
                        end = "octal";
                        break;
                case "octaltobinary":
                        start = "octal";
                        end = "binary";
                        break;
                case "hextooctal":
                        start = "hex";
                        end = "octal";
                        break;
                case "octaltohex":
                        start = "octal";
                        end = "hex";
                        break;
                case "signmagtodenary":
                        start = "signmag";
                        end = "denary";
                        break;
                case "denarytosignmag":
                        start = "denary";
                        end = "signmag";
                        break;
                case "twoscomptodenary":
                        start = "twoscomp";
                        end = "denary";
                        break;
                case "denarytotwoscomp":
                        start = "denary";
                        end = "twoscomp";
                        break;
                case "fixedpointtodenary":
                        start = "fixedpoint";
                        end = "denary";
                        break;
                case "denarytofixedpoint":
                        start = "denary";
                        end = "fixedpoint";
                        break;
                case "floatingpointtodenary":
                        start = "floatingpoint";
                        end = "denary";
                        break;
                case "denarytofloatingpoint":
                        start = "binary";
                        end = "floatingpoint";
                        break;
	}
	return [start, end];
}

function check(number) {
	const box = document.getElementById('answerEntry1');
	let answer = box.value;
	if (answer == BaseConversions.hexToDenary("A3")) {
		box.style.backgroundColor = '#63eb42';
	} else {
		box.style.backgroundColor = '#fc3a3a';
	}
}

function questionsOrder() {
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
	const questions = [];
	let i = 0;
	if (binarytodenary === "true") {
		questions[i] = "binarytodenary";
		i++;
	}
	if (denarytobinary === "true") {
		questions[i] = "denarytobinary";
		i++;
	}
        if (hextodenary === "true") {              
                questions[i] = "hextodenary";
                i++;
        }
        if (denarytohex === "true") {              
                questions[i] = "denarytohex";
                i++;
        }
        if (octaltodenary === "true") {              
                questions[i] = "octaltodenary";
                i++;
        }
        if (binarytohex === "true") {              
                questions[i] = "binarytohex";
                i++;
        }
        if (hextobinary === "true") {              
                questions[i] = "hextobinary";
                i++;
        }
        if (octaltohex === "true") {              
                questions[i] = "octaltohex";
                i++;
        }
        if (hextooctal === "true") {              
                questions[i] = "hextooctal";
                i++;
        }
        if (octaltobinary === "true") {              
                questions[i] = "octaltobinary";
                i++;
        }
        if (binarytooctal === "true") {              
                questions[i] = "binarytooctal";
                i++;
        }
        if (denarytosignmag === "true") {              
                questions[i] = "denarytosignmag";
                i++;
        }
        if (signmagtodenary === "true") {              
                questions[i] = "signmagtodenary";
                i++;
        }
        if (denarytotwoscomp === "true") {              
                questions[i] = "denarytotwoscomp";
                i++;
        }
        if (twoscomptodenary === "true") {              
                questions[i] = "twoscomptodenary";
                i++;
        }
        if (denarytofixedpoint === "true") {              
                questions[i] = "denarytofixedpoint";
                i++;
        }
        if (denarytofloatingpoint === "true") {              
                questions[i] = "denarytofloatingpoint";
                i++;
        }
        if (fixedpointtodenary === "true") {              
                questions[i] = "fixedpointtodenary";
                i++;
        }
        if (floatingpointtodenary === "true") {              
                questions[i] = "floatingpointtodenary";
                i++;
        }
        if (denarytooctal === "true") {              
                questions[i] = "denarytooctal";
                i++;
        }
	if (i < noQuestions) {
		for (let j = i; j <= (noQuestions - 1); j++) {
			questions[j] = questions[Math.floor(Math.random() * i)];
		}
	}
	return questions;
}

function setup() {
	const questions = questionsOrder();
	const questionObjects = [];
	let i = 0;
	for (const question of questions) {
		let questionParts = separate(question);
		let start = questionParts[0];
		let end = questionParts[1];
		let startNum;
		let answer;
		let extra = [0, 0];
		switch (start) {
			case "binary":
			case "twoscomp":
			case "signmag":
				startNum = genBinary(8);
				break;
			case "hex":
				startNum = genHex(Math.floor(Math.random() * 3) + 2);
				break;
			case "octal":
				startNum = genOctal(Math.floor(Math.random() * 3) + 2);
				break;
			case "denary":
				if (end == "binary" || end == "octal" || end == "hex") {
					startNum = 0;
					while (startNum == 0) {
						startNum = Math.floor(Math.random() * 256);
					}
				} else if (end == "twoscomp" || end == "signmag") {
					startNum = 0;
					while (startNum == 0) {
						startNum = Math.floor((Math.random() * 256)) - 128;
					}
				} else if (end == "fixedpoint") {
					extra[0] = Math.floor(Math.random() * 5) + 8;
					extra[1] = Math.floor(Math.random() * Math.floor((extra[0] - 1) / 2)) + 2;
					startNum = fractionalDenary(extra[0], extra[1], true);
				} else {
					extra[0] = Math.floor(Math.random() * 5) + 8;
                                        extra[1] = Math.floor(Math.random() * Math.floor((extra[0] - 1) / 2)) + 2;
					startNum = fractionalDenary(extra[0], extra[1], false);
				}
				break;
			case "fixedpoint":
				extra[0] = Math.floor(Math.random() * 5) + 8;
                                extra[1] = Math.floor(Math.random() * Math.floor((extra[0] - 1) / 2)) + 2;
				startNum = genBinary(extra[0] + extra[1]);
				break;
			case "floatingpoint":
				extra[0] = Math.floor(Math.random() * 5) + 8;
                                extra[1] = Math.floor(Math.random() * Math.floor((extra[0] - 1) / 2)) + 2;
				if (Math.random() > 0.5) {
					startNumber = "01";
				} else {
					startNumber = "10";
				}
				startNumber += "" + genBinary(extra[0] + extra[1] - 2);
				break;
		}
		switch (end) {
			case "binary":
				switch (start) {
					case "denary":
						answer = BaseConversions.denaryToBinary(startNum, false);
						break;
					case "hex":
						answer = BaseConversions.hexToBinary(startNum);
						break;
					case "octal":
						answer = BaseConversions.octalToBinary(startNum);
						break;
				}
				break;
                        case "hex":
                                switch (start) {
                                        case "denary":
                                                answer = BaseConversions.denaryToHex(startNum);
                                                break;
                                        case "binary":
                                                answer = BaseConversions.binaryToHex(startNum);
                                                break;
                                        case "octal":
                                                answer = BaseConversions.octalToHex(startNum);
                                                break;
                                }            
                                break;
                        case "octal":
                                switch (start) {
                                        case "denary":
                                                answer = BaseConversions.denaryToOctal(startNum);
                                                break;
                                        case "hex":
                                                answer = BaseConversions.hexToOctal(startNum);
                                                break;
                                        case "binary":
                                                answer = BaseConversions.binaryToOctal(startNum);
                                                break;
                                }            
                                break;
			case "signmag":
				answer = BaseConversions.denaryToSignMag(startNum);
				break;
			case "twoscomp":
				answer = BaseConversions.denaryToBinary(startNum, true);
				break;
			case "fixedpoint":
				answer = FixedPoint.toBinary(startNum, extra[1], extra[0] - extra[1]);
				break;
			case "floatingpoint":
				answer = FloatingPoint.toBinary(startNum, extra[1], extra[0] - extra[1]);
				break;
			case "denary":
				switch (start) {
					case "binary":
						answer = BaseConversions.binaryToDenary(startNum, false);
						break;
					case "hex":
						answer = BaseConversions.hexToDenary(startNum);
						break;
					case "octal":
						answer = BaseConversions.octalToDenary(startNum);
						break;
					case "signmag":
						answer = BaseConversions.signMagToDenary(startNum);
						break;
					case "twoscomp":
						answer = BaseConversions.binaryToDenary(startNum, true);
						break;
					case "fixedpoint":
						answer = FixedPoint.toDenary(startNum, extra[1]);
						break;
					case "floatingpoint":
						answer = FloatingPoint.toDenary(startNum, extra[1], extra[0] - extra[1]);
						break;
				}
				break;
		}
		questionObjects[i] = new Question(start, end, startNum, answer);
	}
	return questionObjects;
}

function genBinary(length) {
	let binary = "";
	for (let i = 0; i < length; i++) {
		if (Math.random() > 0.5) {
			binary += "" + "1";
		} else {
			binary == "" + "0";
		}
	}
	return binary;
}

function genHex(length) {
	let hex = "";
	for (int i = 0; i < length; i++) {
		hex += "" + BaseConversions.denaryToHexDigit(Math.floor(Math.random() * 16));
	}
	return hex;
}

function genOctal(length) {
        let octal = "";
        for (int i = 0; i < length; i++) {
                octal += "" + BaseConversions.denaryToHexDigit(Math.floor(Math.random() * 8));
        }
        return octal;                             
}   

function fractionalDenary(length1, length2, fixedComp) {
	if (fixedComp) {
		let denary = 0;
		const weights = [];
		weights[0] = 2 ** (length1 - 1);
		for (let i = 1; i < (length1 + length2); i++) {
			weights[i] = weights[i - 1] / 2;
		}
		weights[0] *- -1;
		for (const weight of weights) {
			if (Math.random() > 0.5) {
				denary += weight;
			}
		}
		return denary;
	} else {
		let denary = 0;
		const weights = [];
                weights[0] = 1;
                for (let i = 1; i < (length1); i++) {
                        weights[i] = weights[i - 1] / 2;
                }
		weights[0] = -1;
		for (const weight of weights) {
                        if (Math.random() > 0.5) {
                                denary += weight;
                        }
                }
		const weightsExp = [];
		weightsExp[0] = 2 ** (length2 - 1);
		for (let i = 1; i < length2; i++) {
			weightsExp[i] = weightsExp[i - 1] / 2;
		}
		weightsExp[0] *= -1;
		let exponent = 0;
		for (const weight of weightsExp) {
			if (Math.random() > 0.5) {
                                exponent += weight;
                        }
                }
		denary *= 2 ** exponent;
		return denary;
	}
}

document.getElementById('btn1').addEventListener('click', () => check(1));


setup();
