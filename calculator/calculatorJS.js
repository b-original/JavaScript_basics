
var printtext="";
var addCheck;
var subCheck;
var multipleCheck;
var divCheck;
function printFunct(btId,name,event){
	var name=name;
	if(name==('+')){
		printtext=printtext.concat(",");
		addCheck=true;}
	else if(name==('-')){
		printtext=printtext.concat(",");
		subCheck=true;}
	else if(name==('*')){
		printtext=printtext.concat(",");
		multipleCheck=true;}
	else if (name==('DIVISION')){
		printtext=printtext.concat(",");
		divCheck=true;}
	else
		printtext=printtext.concat(name);
		
	document.getElementById('outputtextValue').innerHTML=printtext;
}

function printtextsubmit(){
    var result=0;
	const arr=printtext.split(",");
	if(addCheck){
		result=parseInt(arr[0])+parseInt(arr[1]);
	}
	if(subCheck){
		result=parseInt(arr[0])-parseInt(arr[1]);
	}
	if(multipleCheck){
		result=parseInt(arr[0])*parseInt(arr[1]);
	}
	if(divCheck){
		result=parseInt(arr[0])/parseInt(arr[1]);
	}
	//document.getElementById('outputtextValue').innerHTML=result;
	alert(result);
	
}
	