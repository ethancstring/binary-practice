function startQuiz() {
	const binarytodenary = document.getElementById("binarytodenary");
        const denarytobinary = document.getElementById("denarytobinary");
        const hextodenary = document.getElementById("hextodenary");
        const denarytohex = document.getElementById("denarytohex");
        const octaltodenary = document.getElementById("octaltodenary");
        const denarytooctal = document.getElementById("denarytooctal");
        const binarytohex = document.getElementById("binarytohex");
        const hextobinary = document.getElementById("hextobinary");
        const binarytooctal = document.getElementById("binarytooctal");
        const octaltobinary = document.getElementById("octaltobinary");
        const hextooctal = document.getElementById("hextooctal");
        const octaltohex = document.getElementById("octaltohex");
        const denarytotwoscomp = document.getElementById("denarytotwoscomp");
        const twoscomptodenary = document.getElementById("twoscomptodenary");
        const denarytofixedpoint = document.getElementById("denarytofixedpoint");
        const fixedpointtodenary = document.getElementById("fixedpointtodenary");
        const denarytofloatingpoint = document.getElementById("denarytofloatingpoint");
	const denarytosignmag = document.getElementById("denarytosignmag");
	const signmagtodenary = document.getElementById("signmagtodenary");
        const floatingpointtodenary = document.getElementById("floatingpointtodenary");
	const noQuestions = document.getElementById("noQuestions");
	let binarytodenaryVal = binarytodenary.checked;
	let denarytobinaryVal = denarytobinary.checked;
	let hextodenaryVal = hextodenary.checked;
	let denarytohexVal = denarytohex.checked;
	let octaltodenaryVal = octaltodenary.checked;
	let denarytooctalVal = denarytooctal.checked;
	let binarytohexVal = binarytohex.checked;
	let hextobinaryVal = hextobinary.checked;
	let binarytooctalVal = binarytooctal.checked;
	let octaltobinaryVal = octaltobinary.checked;
	let hextooctalVal = hextooctal.checked;
	let octaltohexVal = octaltohex.checked;
	let denarytotwoscompVal = denarytotwoscomp.checked;
	let twoscomptodenaryVal = twoscomptodenary.checked;
	let denarytofixedpointVal = denarytofixedpoint.checked;
	let fixedpointtodenaryVal = fixedpointtodenary.checked;
	let denarytofloatingpointVal = denarytofloatingpoint.checked;
	let floatingpointtodenaryVal = floatingpointtodenary.checked;
	let denarytosignmagVal = denarytosignmag.checked;
	let signmagtodenaryVal = signmagtodenary.checked;
	let noQuestionsVal = noQuestions.value;
	let urlVars = "?";
	if (binarytodenaryVal){
		urlVars += "binarytodenary=true&";
	} else {
		urlVars += "binarytodenary=false&";
	}
        if (denarytobinaryVal){
                urlVars += "denarytobinary=true&";
        } else {
                urlVars += "denarytobinary=false&";
        }
        if (hextodenaryVal){
                urlVars += "hextodenary=true&";
        } else {
                urlVars += "hextodenary=false&";
        }
        if (denarytohexVal){
                urlVars += "denarytohex=true&";
        } else {
                urlVars += "denarytohex=false&";
        }
        if (octaltodenaryVal){
                urlVars += "octaltodenary=true&";
        } else {
                urlVars += "octaltodenary=false&";
        }
        if (denarytooctalVal){
                urlVars += "denarytooctal=true&";
        } else {
                urlVars += "denarytooctal=false&";
        }
        if (binarytohexVal){
                urlVars += "binarytohex=true&";
        } else {
                urlVars += "binarytohex=false&";
        }
        if (hextobinaryVal){
                urlVars += "hextobinary=true&";
        } else {
                urlVars += "hextobinary=false&";
        }
        if (octaltohexVal){
                urlVars += "octaltohex=true&";
        } else {
                urlVars += "octaltohex=false&";
        }
        if (hextooctalVal){
                urlVars += "hextooctal=true&";
        } else {
                urlVars += "hextooctal=false&";
        }
        if (binarytooctalVal){
                urlVars += "binarytooctal=true&";
        } else {
                urlVars += "binarytooctal=false&";
        }
        if (octaltobinaryVal){
                urlVars += "octaltobinary=true&";
        } else {
                urlVars += "octaltobinary=false&";
        }
        if (twoscomptodenaryVal){
                urlVars += "twoscomptodenary=true&";
        } else {
                urlVars += "twoscomptodenary=false&";
        }
        if (denarytotwoscompVal){
                urlVars += "denarytotwoscomp=true&";
        } else {
                urlVars += "denarytotwoscomp=false&";
        }
        if (fixedpointtodenaryVal){
                urlVars += "fixedpointtodenary=true&";
        } else {
                urlVars += "fixedpointtodenary=false&";
        }
        if (denarytofixedpointVal){
                urlVars += "denarytofixedpoint=true&";
        } else {
                urlVars += "denarytofixedpoint=false&";
        }
        if (floatingpointtodenaryVal){
                urlVars += "floatingpointtodenary=true&";
        } else {
                urlVars += "floatingpointtodenary=false&";
        }
        if (denarytofloatingpointVal){
                urlVars += "denarytofloatingpoint=true&";
        } else {
                urlVars += "denarytofloatingpoint=false&";
        }
        if (denarytosignmagVal){
                urlVars += "denarytosignmag=true&";
        } else {
                urlVars += "denarytosignmag=false&";
        } 
        if (signmagtodenaryVal){
                urlVars += "signmagtodenary=true&";
        } else {
                urlVars += "signmagtodenary=false&";
        } 
	urlVars += "noQuestions=" + noQuestionsVal;
	if (binarytodenaryVal || denarytobinaryVal || denarytohexVal || hextodenaryVal || octaltodenaryVal || denarytooctalVal || hextobinaryVal || binarytohexVal || octaltohexVal || hextooctalVal || binarytooctalVal || octaltobinaryVal || twoscomptodenaryVal || denarytotwoscompVal || floatingpointtodenaryVal || denarytofloatingpointVal || fixedpointtodenaryVal || denarytofixedpointVal || signmagtodenaryVal || denarytosignmagVal) {
		window.location.href = "quiz.html" + urlVars;
	}
}

document.getElementById('startquizbtn').addEventListener('click', () => startQuiz());
