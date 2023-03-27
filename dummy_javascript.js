console.log('Hello World from console!');
console.log('Example for let const and var');
let a="let a= Tester";
var b= "var b = variable";
const c="constant c variable";

let a1=10;
let b1=a1;
b1=20;
	console.log("a1",a1);
	console.log("b1",b1);


{
	
	let a="let a =tester modified";
	var b= "var b = variable modified";
	//c="constant c variable modified";
	console.log(a);
	console.log(b);
	console.log(c);
}

console.log(a);
console.log(b);
console.log(c);
console.log("Operators in JS-----------------");

console.log("Exponentials in JS **");
let first= 10;
let second=2;

console.log("first="+first+" to the power second="+second+" is equals to "+(first**second));
console.log("incremental and decremental behaviour.");

console.log("first++ post increment "+first++);
console.log("second-- post decrement "+second--);
console.log("first++ new value "+first);
console.log("second new value "+second);

console.log("++ pre increment "+ ++first);
console.log("-- pre decrement "+ --second);


console.log("comparision operartors -------------------");

let comp1=6;
let comp2=7;
let comp3= "6";
console.log(comp1+" == "+comp2 +" is ",comp1==comp2);
console.log(comp1+" != "+comp2 +" is ",comp1!=comp2);
console.log("Below example are taken based on diff datatype of elements");
console.log("type of comp1: ",comp1,typeof comp1);
console.log("type of comp3: ",comp3,typeof comp3);
console.log(comp1+" === "+comp3 +" is ",comp1===comp3);
console.log(comp1+" !== "+comp3 +" is ",comp1!==comp3);

console.log("conditional operartors -------------------");
const prompt = require('prompt-sync')({sigint: true});
/*let inputVar1=prompt("what is your age?");
inputVar1=Number.parseInt(inputVar1);

if(inputVar1> 18){
	
	console.log("user authrized to Drive");
}
else{
	console.log("user not authorized to drive!!");
}

console.log("Done");

console.log("Switch statement execution ");

let inputVar2= prompt("enter fruit name: ");

switch(inputVar2){
	
	case("Oranges"):
		console.log("value : 30 Rs/kg");
		break;
	case("mangoes"):
		console.log("value : 35 Rs/kg");
		break;
	case("Apple"):
		console.log("value : 110 Rs/kg");
		break;
	case("Banana"):
		console.log("value : 25 Rs/kg");
		break;
	default:
		console.log('Sorry we are out of ',inputVar2);
		
}

*/