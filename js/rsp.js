// VARIABLES AT THE TOP
let options = 
	["rock","paper","scissors"];
let computerchoice;
let userchoice;
let result, buttons;

let userScore = 0;
let computerScore = 0;


// FUNCTIONS AFTER VARIABLES
function makeComputerChoice(){
	console.log("Computer was",computerchoice);
	return computerchoice = Math.floor( Math.random() * options.length );   
}
/* Dont need this part, just to see what computer is doing
function showComputerChoice(){
	document.write(options[computerchoice])
}
makeComputerChoice ();
showComputerChoice ();
===== END of testing======*/
function reset(){
	location.reload();
}

function makeUserChoice(choice){
	makeComputerChoice();// makeComputerChoice when user made a choice
	userchoice = choice; 
	//  show the options in console
	console.log(
		options[userchoice],
		"vs",
		options[computerchoice]
	);
	//  show the options on the document
	result.innerHTML =
		"<img src='images/"+
			options[userchoice]+".png'>"+
		" "+"<img src='images/VS.png'>"+" "+"<img src='images/"+
			options[computerchoice]+".png'>";

	makeGameResult();
}


function makeGameResult(){
	let resultstring = "";
	let userScore_span = document.getElementById("suju-score");
	let computerScore_span = document.getElementById("jeff-score");
	let scoreBoard = document.querySelector("score-board");

	if(userchoice == computerchoice) {
		console.log("It's a tie");
		resultstring="<div>It's a tie</div>";
		
	}
	else if(
		(userchoice == 0 && computerchoice == 1) || 
        (userchoice == 1 && computerchoice == 2) || 
        (userchoice == 2 && computerchoice == 0) 
		) {
		console.log("You lost!");
		resultstring="<div>Boo you lost!</div>";
		lost();
	}
	else if( 
		(userchoice == 0 && computerchoice == 2) ||
        (userchoice == 1 && computerchoice == 0) ||
        (userchoice == 2 && computerchoice == 1)
        
		) {

		console.log("You won!");
		resultstring="<div>Wow you won!</div>";
		win();
	}

	function win() {
		userScore++;
		console.log("User "+ userScore);
		userScore_span.innerHTML = userScore;
	}

	function lost() {
		computerScore++;
		console.log("Computer "+ computerScore);
		computerScore_span.innerHTML = computerScore;
	}

	result.innerHTML += 
		resultstring+
		"<div><button onclick='showOptions()'>Let's Play Again!</button></div>";
	showResults();

}

//Show and hide the 3 buttons. When showing results, show play agian button; Click play button, show three options.
function showOptions(){
	buttons.style.display = "block";
	result.style.display = "none";
}
function showResults(){
	buttons.style.display = "none";
	result.style.display = "block";
}


// model view controller MVC

// Everything is set up ready to go. Let the browser display your buttons. By default, showOptions() will display buttons and hide the result.
// Since we put our js on top, we need to add onload 
window.onload = function(){
	result = document.querySelector("#rps_result");
	buttons = document.querySelector("#rps_buttons");
    document.querySelector(".btn_rock").addEventListener("click", function(){makeUserChoice(0);}, false)
    document.querySelector(".btn_paper").addEventListener("click", function(){makeUserChoice(1);}, false)
    document.querySelector(".btn_scissors").addEventListener("click", function(){makeUserChoice(2);}, false)
}


function reset() {
	let resetScore = document.getElementById("reset-score");

	resetScore.mousePressed(location.reload());


}