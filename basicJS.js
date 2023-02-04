// the hello world program
console.log('Hello World from console!');

//Below function displays an alert box over the current window with the specified message.
//alert("Hello, World from alert!");

// Below function is used when you want to print the content to the HTML document.
//document.write('Hello, World! from JS file based on scr');

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
console.log(`${x} kilometers is equal to ${miles} miles.`);
}
//CSS function for tab-page.
function alertFunct(inputValue,event){
	
	var i, tabcontent, tabcolor;
	tabcontent = document.getElementsByClassName("divcontent");
	
	//each time setting the each tab content visibility to none 
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	
	//below loop is used for clearing out all the tabs from clicked style format
	tabcolor=document.getElementsByClassName("buttoncls");
	for (i =0; i<tabcolor.length; i++){
		tabcolor[i].className= tabcolor[i].className.replace(" active", "");
	}
	// here assigning onlt clicked tab value to display
	document.getElementById(inputValue).style.display = "block";
	
	//assigning active tab with respected css
	event.currentTarget.className +=" active"
	//alert(`You have clicked on ${inputValue}.`);

}



