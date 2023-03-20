console.log("Random guess game:");
const prompt = require('prompt-sync')({sigint: true});

let random_num=Math.floor(Math.random() * 10);
let counter=100;
let inputVar1
while(inputVar1!=random_num){
	inputVar1=prompt("enter your number!!! ");	
	if(random_num>inputVar1){
		console.log("your value is less then the winning number.....");
		counter--;
	}
	else if(random_num<inputVar1){
		console.log("your value is greater then the winning number.....");
		counter--;
	}
	else{
		counter--;
		console.log("Congrats !! you gussed the correct no. ",inputVar1);
		console.log("And your score is: ",counter);
	}
};