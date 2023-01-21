// the hello world program
console.log('Hello World from console!');

//Below function displays an alert box over the current window with the specified message.
//alert("Hello, World from alert!");

// Below function is used when you want to print the content to the HTML document.
document.write('Hello, World! from JS file based on script tag placement! :)');

/*In case of same function present in html and in JS HTML will get priority!!!
	to check we have used Prompt in JS and alert in html!!
*/
function myFunction() {
var x = document.getElementById("valueInKM").value;

// conversion factor
const factor = 0.621371

// calculate miles
const miles = x * factor
prompt(`${x} kilometers is equal to ${miles} miles.`);
console.log(`${x} kilometers is equal to ${miles} miles.`);}
