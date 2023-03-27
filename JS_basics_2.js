//console.log(console); //this helps out to list COnsole object functions.
/*
Object [console] {log: [Function: log],
	  warn: [Function: warn],
	  dir: [Function: dir],
	  time: [Function: time],
	  timeEnd: [Function: timeEnd],
	  timeLog: [Function: timeLog],
	  trace: [Function: trace],
	  assert: [Function: assert],
	  clear: [Function: clear],
	  count: [Function: count],
	  countReset: [Function: countReset],
	  group: [Function: group],
	  groupEnd: [Function: groupEnd],
	  table: [Function: table],
	  debug: [Function: debug],
	  info: [Function: info],
	  dirxml: [Function: dirxml],
	  error: [Function: error],
	  groupCollapsed: [Function: groupCollapsed],
	  Console: [Function: Console],
	  profile: [Function: profile],
	  profileEnd: [Function: profileEnd],
	  timeStamp: [Function: timeStamp],
	  context: [Function: context]
}*/

//console.log("This is an simple tag")
//console.error("This is an error tag");
//console.assert(55>53);//true hence no output.
//console.assert(5>53); // false hence assertion failed Out put as an error 
//console.clear() to clear console screen

let obj={a:1,b:2,c:3,d:4}
let arr= [1,2,3,5,6,8,0]
//console.table(obj) // represent the object key values in tabluar format
//console.table(arr); //same with array as well with index as key and value in value column.

console.time("p1");
for(let i=0;i<5;i++){
	console.log(i);
	console.timeLog("p1");
}
console.timeEnd("p1");
//console.timeLog("p1");
console.time("p2");
let j=0;
while(j<5){
	console.log(j);
	j++;}
console.timeEnd("p2");
/*
	Time and time end are the console functions for time logging operation we can use time() function to start the process and with timeEnd() function we can simply print the time took with the variable.
	Also there is TimeLog() function to log time in intervals without ending variable.
	 In case we are using timeLog() on same variable after the timeEnd() call it will throw below Exception (node:7576) Warning: No such label 'p1' for console.timeLog()
*/
