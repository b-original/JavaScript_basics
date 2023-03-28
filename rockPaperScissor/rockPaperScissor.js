console.log("ROCK Paper Scissor!!");
//document.write("ROCK Paper Scissor!!");
//
let computerInput="";
let result='';
let userInput='';
document.getElementById("res").innerHTML="TYPO";
function callRPS(){
	userInput=prompt("Enter your tag: ");
	userInput= userInput.trim().toUpperCase();
	getCompInput();
	if(computerInput=="ROCK"){
		if(userInput=="ROCK"){
			console.log(computerInput);
			result=("ITS A DRAW!!!");
		}
		else if(userInput=="PAPER"){
			console.log(computerInput);
			result=("YOU WON, Hurray!!!");
		}
		else if(userInput=="SCISSOR"){
			console.log(computerInput);
			result=("You Lose, :(");
		}
		else{
			console.log(computerInput);
			alert("please Enter the given values : Rock, Paper, Scissor");
		}
	}
	else if(computerInput=="PAPER"){
		if(userInput=="PAPER"){
			console.log(computerInput);
			result=("ITS A DRAW!!!");
		}
		else if(userInput=="SCISSOR"){
			console.log(computerInput);
			result=("YOU WON, Hurray!!!");
		}
		else if(userInput=="ROCK"){
			console.log(computerInput);
			result=("You Lose, :(");
		}
		else{
			console.log(computerInput);
			alert("please Enter the given values : Rock, Paper, Scissor");
		}
	}
	else{
		if(userInput=="SCISSOR"){
			console.log(computerInput);
			result=("ITS A DRAW!!!");
		}
		else if(userInput=="ROCK"){
			console.log(computerInput);
			result=("YOU WON, Hurray!!!");
		}
		else if(userInput=="PAPER"){
			console.log(computerInput);
			result=("\nYou Lose, :(");
		}
		else{
			console.log(computerInput);
			alert("please Enter the given values : Rock, Paper, Scissor");
		}
	}
	
}
function getCompInput(){
	let randVal=Math.floor(Math.random() * 15);
	if(randVal%3==0){
		computerInput="ROCK";
	}
	else if (randVal%2==0){
		computerInput="PAPER";
	}
	else{
		computerInput="SCISSOR";
	}
}

callRPS()
document.getElementById("computer").innerHTML=computerInput;
document.getElementById("user").innerHTML=userInput;
document.getElementById("res").innerHTML = result;