// the hello world program
console.log('Hello World from console!');

//Below function displays an alert box over the current window with the specified message.
//alert("Hello, World from alert!");

// Below function is used when you want to print the content to the HTML document.
//document.write('Hello, World!');

//Since node does not support promt directly
const prompt=require("prompt-sync")({sigint:true});

// taking kilometers input from the user
const kilometers = prompt("Enter value in kilometers: ")

// conversion factor
const factor = 0.621371

// calculate miles
const miles = kilometers * factor

console.log(`${kilometers} kilometers is equal to ${miles} miles.`);