import { BaseConversions, FixedPoint, FloatingPoint } from './conversions.js';

class Question {
	constructor(startBase, endBase, startNumber, answer, extra) {
		this.startBase = startBase;
		this.endBase = endBase;
		this.startNumber = startNumber;
		this.answer = answer;
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

	getAnswer() {
		return this.answer;
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
                        start = "denary";
                        end = "floatingpoint";
                        break;
	}
	return [start, end];
}

function check(number) {
	const box = document.getElementById('answerEntry' + number);
	let answer = box.value.toUpperCase().replaceAll(".", "");
	if (answer == questionObjectsArray[number - 1].getAnswer()) {
		box.style.backgroundColor = '#63eb42';
	} else if (questionObjectsArray[number - 1].getEndBase() == "hex" && questionObjectsArray[number - 1].getAnswer().length == 1 && answer == "0" + questionObjectsArray[number - 1].getAnswer()) {
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
				startNum = genHex(2);
				break;
			case "octal":
				startNum = genOctal(Math.floor(Math.random() * 2) + 2);
				break;
			case "denary":
				if (end == "binary" || end == "octal" || end == "hex") {
					startNum = 0;
					while (startNum == 0) {
						startNum = Math.floor(Math.random() * 255) + 1;
					}
				} else if (end == "twoscomp" || end == "signmag") {
					startNum = 0;
					while (startNum == 0) {
						startNum = Math.floor((Math.random() * 256)) - 128;
					}
				} else if (end == "fixedpoint") {
					if (Math.random() > 0.5) {
                                	        extra[0] = 6;
                                	        extra[1] = 4;
                                	} else {
                                	        if (Math.random() > 0.67) {
                                	                extra[0] = 9;
                                	                extra[1] = 3;
                                	        } else {
                                	                extra[0] = 10;
                                	                extra[1] = 4;
                                	        }
                                	}
					startNum = 0;
					while (startNum == 0) {
						startNum = fractionalDenary(extra[0], extra[1], true);
					}
				} else {
					if (Math.random() > 0.67) {
                                	        extra[0] = 6;
                                	        extra[1] = 4;
                                	} else {
						if (Math.random() > 0.5) {
                                	        	extra[0] = 9;
                                	        	extra[1] = 3;
						} else {
							extra[0] = 10;
							extra[1] = 4;
						}
                                	}
					startNum = 0;
                                        while (startNum == 0) {
						startNum = fractionalDenary(extra[0], extra[1], false);
					}
				}
				break;
			case "fixedpoint":
				if (Math.random() > 0.5) {
                                        extra[0] = 6;
                                        extra[1] = 4;
                                } else {
                                        if (Math.random() > 0.67) {
                                                extra[0] = 9;
                                                extra[1] = 3;
                                        } else {
                                                extra[0] = 10;
                                                extra[1] = 4;
                                        }
                                }
				startNum = genBinary(extra[0] + extra[1]);
				break;
			case "floatingpoint":
				if (Math.random() > 0.5) {
					extra[0] = 6;
					extra[1] = 4;
				} else {
					if (Math.random() > 0.67) {
                                                extra[0] = 9;
                                                extra[1] = 3;
                                        } else {
                                                extra[0] = 10;
                                                extra[1] = 4;
                                        }
				}
				if (Math.random() > 0.5) {
					startNum = "01";
				} else {
					startNum = "10";
				}
				startNum += "" + genBinary(extra[0] - 2);
				let exponent = Math.floor(Math.random() * 6) - 2;
				if ((BaseConversions.binaryToDenary(startNum, true) * (2 ** (extra[0] - 1)) * 8) % 1 != 0) {
					exponent = 3;
				}
				startNum += BaseConversions.denaryToBinary(exponent, true, extra[1]);
				break;
		}
		switch (end) {
			case "binary":
				switch (start) {
					case "denary":
						answer = BaseConversions.denaryToBinary(startNum, false, 8);
						break;
					case "hex":
						answer = BaseConversions.hexToBinary(startNum);
						break;
					case "octal":
						answer = BaseConversions.octalToBinary(startNum);
						if (answer.substring(0, 4) == "0000") {
							answer = answer.substring(4);
						}
						break;
				}
				if (answer.length < 8) {
					for (let i = 0; i < (8 - answer.length); i++) {
						answer = "0" + answer;
					}
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
				answer = BaseConversions.denaryToBinary(startNum, true, 8);
				break;
			case "fixedpoint":
				answer = FixedPoint.toBinary(startNum, extra[0], extra[1]);
				break;
			case "floatingpoint":
				answer = FloatingPoint.toBinary(startNum, extra[0], extra[1]);
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
						answer = FixedPoint.toDenary(startNum, extra[0]);
						break;
					case "floatingpoint":
						answer = FloatingPoint.toDenary(startNum, extra[0], extra[1]);
						break;
				}
				break;
		}
		questionObjects[i] = new Question(start, end, startNum, answer, extra);
		i += 1;
	}
	return questionObjects;
}

function genBinary(length) {
	let binary = "";
	for (let i = 0; i < length; i++) {
		if (Math.random() > 0.5) {
			binary += "" + "1";
		} else {
			binary += "" + "0";
		}
	}
	return binary;
}

function genHex(length) {
	let hex = BaseConversions.denaryToHexDigit(Math.floor(Math.random() * 15) + 1);
	for (let i = 1; i < length; i++) {
		hex += "" + BaseConversions.denaryToHexDigit(Math.floor(Math.random() * 16));
	}
	return hex;
}

function genOctal(length) {
	let octal = "";
	if (length == 3) {
        	octal = BaseConversions.denaryToHexDigit(Math.floor(Math.random() * 3) + 1);
		length = 2;
	}
        for (let i = 0; i < length; i++) {
                octal += "" + BaseConversions.denaryToHexDigit(Math.floor(Math.random() * 8));
        }
	while (octal == "00") {
		octal = ""
		for (let i = 0; i < length; i++) {
                	octal += "" + BaseConversions.denaryToHexDigit(Math.floor(Math.random() * 8));
        	}
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
		weights[0] *= -1;
		for (const weight of weights) {
			if (Math.random() > 0.5) {
				denary += weight;
			}
		}
		return denary;
	} else {
		let denary = 0;
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
		const weights = [];
		weights[0] = 1;
                for (let i = 1; i < (length1); i++) {
                        weights[i] = weights[i - 1] / 2;
                }
                weights[0] = -1;
                for (const weight of weights) {
                        if (Math.random() > 0.5 && (weight >= 0.0625 || exponent >= 6)) {
                                denary += weight;
                        }
                }
		if (exponent < -5) {
			exponent = Math.floor(Math.random() * 5) * -1;
		}
		denary *= 2 ** exponent;
		while (denary < 50 && exponent < (2 ** (length2 - 1))) {
			if (Math.random() > 0.7) {
				exponent++;
				denary *= 2;
			} else {
				break;
			}
		}
		if ((denary * 32) % 1 != 0) {
			denary = Math.floor(denary * 32) / 32;
		}
		return denary;
	}
}

function draw(questionObjects) {
	let i = 1;
	const div = document.getElementById("questionsDiv");
	for (const question of questionObjects) {
		const questionNo = document.createElement("h4");
		questionNo.textContent = "Question " + i;
		const question = document.createElement("p");
		let questionContents = "Convert ";
		questionContents += questionObjects[i - 1].getStartNumber() + " from ";
		switch (questionObjects[i - 1].getStartBase()) {
			case "binary":
				questionContents += "8 bit binary";
				break;
			case "denary":
			case "octal":
				questionContents += questionObjects[i - 1].getStartBase();
				break;
			case "hex":
				questionContents += "hexadecimal";
				break;
			case "twoscomp":
				questionContents += "8 bit two's complement binary";
				break;
			case "fixedpoint":
				questionContents += "fixed point binary with " + questionObjects[i - 1].getExtra(0) + " bits before the point and " + questionObjects[i - 1].getExtra(1) + " bits after";
				break;
			case "floatingpoint":
				questionContents += "floating point binary with a " + questionObjects[i - 1].getExtra(0) + " bit mantissa and a " + questionObjects[i - 1].getExtra(1) + " bit exponent";
				break;
			case "signmag":
				questionContents += "8 bit sign and megnitude binary";
				break;
		}
		questionContents += " to ";
		switch (questionObjects[i - 1].getEndBase()) {
                        case "binary":          
                                questionContents += "8 bit binary";
                                break;
                        case "denary":
                        case "octal":
                                questionContents += questionObjects[i - 1].getEndBase();
                                break;
                        case "hex":   
                                questionContents += "hexadecimal";
                                break;
                        case "twoscomp":
                                questionContents += "8 bit two's complement binary";
                                break;
                        case "fixedpoint":
                                questionContents += "fixed point binary with " + questionObjects[i - 1].getExtra(0) + " bits before the point and " + questionObjects[i - 1].getExtra(1) + " bits after";
                                break;
                        case "floatingpoint":
                                questionContents += "floating point binary with a " + questionObjects[i - 1].getExtra(0) + " bit mantissa and a " + questionObjects[i - 1].getExtra(1) + " bit exponent";
                                break;
                        case "signmag":
                                questionContents += "8 bit sign and megnitude binary";
                                break;
		}
		question.textContent = questionContents;
		const textEntry = document.createElement("input");
		textEntry.setAttribute("type", "text");
		textEntry.setAttribute("class", "answerEntry");	
		textEntry.setAttribute("id", "answerEntry" + i);
		const button = document.createElement("button");
		button.textContent = "Check";
		button.setAttribute("id", "btn" + i);
		button.setAttribute("class", "entryBtn");
		div.append(questionNo);
		div.append(question);
		div.append(textEntry);
		div.append(button);
		i++;
	}
}

//document.getElementById('btn1').addEventListener('click', () => check(1));


let questionObjectsArray = setup();
draw(questionObjectsArray);

for (let i = 1; i <= questionObjectsArray.length; i++) {
	document.getElementById('btn' + i).addEventListener('click', () => check(i));
}
