console.log("Loops JS examples:");
const prompt = require('prompt-sync')({sigint: true});

let num= prompt("enter the value you want sum till: ");
num= Number.parseInt(num);
let sum=0;
for(let i=1; i<=num;i++){
	sum+=i;
}

console.log("sum of first "+num+" numbers is: "+sum);

console.log("for in example:------------------");

let arr={
	"sam":10,
	"tam":22,
	"clear":13,
	"task":55,
	"drone":39
}

for (let a in arr){
	console.log("value of "+a+" is: "+arr[a]);
}

console.log("For of loop execution:");
console.log("Basic requirement for FOR-OF loop is item should be itterable.");

for(let b of "Bhavya Varshney"){
	console.log("char in Strings are:"+b);
}

console.log("if we want to iterate over object using keys then we can use Object.keys(object)");

for(let a=0; a<Object.keys(arr).length;a++){
	
	console.log("here are the values for keys: "+Object.keys(arr)[a]+" "+arr[Object.keys(arr)[a]]);
}