
//Arrays
var list1 = ["The Chef Mickey Mouse","The Cooker SpongeBob SquarePants","The Gastronomist Woody WoodPecker","Kitchen Master Hommer Simpson","The Gourmet specialist Garfield"]
var list2 = ["prepared a nasty","cooked a sickening","made a disgusting "," cooked a dancid","prepared a putrid"]
var list3 = ["worm pasta","beetle burger","slimy soup","reaches risotto","monster icecream"]
var list4 = ["for your breakfast","for your lunch","for your snack time","for your dinner","for your dessert"]

// Empty list for Random phrase
var list6 = []

// Create a new speechSynthesis object
var synth = window.speechSynthesis;

// Variable with items of array (random)
var textToSpeak = list6;

// DOM Elements
var displayPhrase = document.getElementById('displayPhrase');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn6 = document.getElementById('btn6');
var btnReset = document.getElementById('btnReset');
var speakButton = document.getElementById('btnRandom');
var warningBtn6 = document.getElementById('warningBtn6');


function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

// Onclick handler
speakButton.onclick = function() {
	//variables to get 1 random item from each list
	var randon1 = list1[Math.floor(Math.random()*list1.length)];
	var randon2 = list2[Math.floor(Math.random()*list2.length)];
	var randon3 = list3[Math.floor(Math.random()*list3.length)];
	var randon4 = list4[Math.floor(Math.random()*list4.length)];
	// add values to empty list
	list6.push(randon1);
	list6.push(randon2);
	list6.push(randon3);
	list6.push(randon4);
	//call speak function
	speakNow(textToSpeak);
	// display values in text (replace comma by space)
	displayPhrase.textContent = list6.toString().replace(/,/g,' ');
	// reset list
	list6.length = 0;
}

// List of Set & Play (user choose what will play)
var getRandom = [];

// variables to loop through each item from each list of every click in the buttons
var count1 = 0; // for btn1
var count2 = 0; // for btn2
var count3 = 0; // for btn3
var count4 = 0; // for btn4

//On click handler btn1
//This function will loop through each item of array, and wait for another click to speak the next item, also, add value for the Set & Play action. Clear display 
btn1.onclick = function() {
	var textToSpeak1 = list1[count1];
	speakNow(textToSpeak1);
	count1++;
	if(count1 === list1.length){
		count1 = 0;
	}
	getRandom.push(textToSpeak1);
	displayPhrase.textContent = "";
}

//On click handler btn2
//This function will loop through each item of array, and wait for another click to speak the next item, also, add value for the Set & Play action. Clear display 
btn2.onclick = function() {
	var textToSpeak2 = list2[count2];
	speakNow(textToSpeak2);
	count2++;
	if(count2 === list2.length){
		count2 = 0;
	}
	getRandom.push(textToSpeak2);
	displayPhrase.textContent = "";
}

//On click handler btn3
//This function will loop through each item of array, and wait for another click to speak the next item, also, add value for the Set & Play action. Clear display 
btn3.onclick = function() {
	var textToSpeak3 = list3[count3];
	speakNow(textToSpeak3);
	count3++;
	if(count3 === list3.length){
		count3 = 0;
	}
	getRandom.push(textToSpeak3);
	displayPhrase.textContent = "";
}

//On click handler btn4
//This function will loop through each item of array, and wait for another click to speak the next item, also, add value for the Set & Play action. Clear display 
btn4.onclick = function() {
	var textToSpeak4 = list4[count4];
	speakNow(textToSpeak4);
	count4++;
	if(count4 === list4.length){
		count4 = 0;
	}
	getRandom.push(textToSpeak4);
	displayPhrase.textContent = "";
}

//On click handler of Set & Play button
btn6.onclick = function(){
	// Look if the random array is empty, if empty, ask for user choose at least 1 option
	if(getRandom.length === 0){
		warningBtn6.style.display = "block";
		warningBtn6.textContent = "You must choose at least 1 option";
	}else if(getRandom.length > 0){
		warningBtn6.style.display = "none";
	}
	// display phrase 
	displayPhrase.textContent = getRandom.toString().replace(/,/g,' ');
	// speak Random phrase
	speakNow(getRandom);
}

//On click handler for Reset button
btnReset.onclick = function(){
	//clear Random list
	getRandom = [];
	//clear display phrase
	displayPhrase.textContent = "";
}







