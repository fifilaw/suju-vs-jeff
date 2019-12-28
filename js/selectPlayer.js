let intro= document.getElementById("choosePlayer");
let suju = document.getElementById("suju");
let jeff = document.getElementById("jeff");

suju.onclick = function (){
	let sujuPlayer	= document.querySelector("chooseCat");
	makeComputerChoice();
	console.log("Suju is picked");
	window.location.href ="www.google.com";
}