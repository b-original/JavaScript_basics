let age=[1,12,32,34,22,12];

//console.log(age.length);
//console.log(age[2]==age['2']);

//console.log(age.join()===(age.join(',')));
//console.log(age.join(','));
//console.log(typeof age.join());


const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3:10,
  4:12
};
//console.log(arrayLike);
//console.log(Array.prototype.join.call(arrayLike));


age[1]=9;
age[8]=55;
//console.log(age.join(',')); // 1,9,32,34,22,12,,,55 --> String
//console.log(age.slice(2,15)); // [ 32, 34, 22, 12, <2 empty items>, 55 ]

let arr2=[];

arr2[5]="Trial";
//console.log(arr2); //[ <5 empty items>, 'Trial' ]
//console.log(arr2.length);// 6

arr2[0]="Dust";
arr2[1]="Wind";
arr2[2]="Fire";
arr2[3]="water";

//console.log(arr2); //[ 'Dust', 'Wind', 'Fire', 'water', <1 empty item>, 'Trial' ]
//console.log(arr2.length); //6

arr2.length=10;

//console.log(arr2); //[ 'Dust','Wind', 'Fire','water',<1 empty item>,'Trial',<4 empty items>]
//console.log(arr2.length);//10

let honda={
	
	"carType":"Sedan",
	"Seating": 4,
	"engine": {
		 "cylinders": 4, 
		 "litre": 2.2 
	},
	"color": "black"
}

let honda_city=[honda,"lexuary sedan", 2023,{"bootspace":380}]

let honda_amaze=[honda,"hatchback sedan",2023,{"bootspace":380}]
/*
console.log(honda_city);
console.log(honda_amaze);
console.log(honda_city[0].color);
console.log(honda_amaze[0].color);

honda.color="Grey";
console.log(honda_city[0].color);
console.log(honda_amaze[0].color);

*/


let arr3=[33,22,55,88,"Bhavya","Zero","test"]
	
//console.log(arr3.indexOf(true));
//console.log(arr3.indexOf("Bhavya"));
//console.log(arr3.indexOf("Bhavya",-3));// reverse tracing
//console.log(arr3.indexOf("test",-1));

let var4= "bhavya";
//console.log(var4.indexOf('a')); //print first index out of string 
//console.log(var4.lastIndexOf('a'));//print last index out of string
//let var5=arr3.push(var4); //returns length of array
//console.log(var5,arr3);
/*
let var6=arr3.splice(1,1);//to delete 1 element staring from position 1
console.log(var6,arr3); //[ 22 ] [ 33, 55, 88, 'Bhavya', 'Zero', 'test' ]

let var7=arr3.splice(1,1,"value replaced");//to replace 1 element staring from position 1 with given value,
console.log(var7,arr3);//[ 55 ] [ 33, 'value replaced', 88, 'Bhavya', 'Zero', 'test' ]

let var8=arr3.splice(1,2);//to delete 2 elements staring from position 1
console.log(var8,arr3);//[ 'value replaced', 88 ] [ 33, 'Bhavya', 'Zero', 'test' ]
*/
let var9=arr3.splice(4,0,"new value inserted");//to insert new value at 4 without deleting any element
//console.log(var9,arr3);//[] [ 33, 22, 55, 88, 'new value inserted', 'Bhavya', 'Zero', 'test' ]

let arr4= arr3.concat(arr2);
//console.log(arr4);

let arr5= arr3.concat("test1", "test2","test3");// provide a shallow copy of arr3 with concated values to new arr5
//console.log(arr5,arr3);

//console.log(arr3);
//console.log(arr3.copyWithin(3,5,7)); //starting from 5th psoition <7th position replace elements starting from 3rd position in an array


let arr6= [10,23,55,48,76,24,84]
let isBelowAverage=(value)=>value<100;
//console.log(arr6.every(isBelowAverage)); //it will return true/false based on isBelowAverage condition if they are fulfulling the crietria or not 

//console.log(arr6);
//console.log(arr6.at(3));//48
//console.log(arr6.at(10));//undefined
//console.log("value of arr6 at (-3)=",arr6.at(-3)); //run itteration in reverse order from last

//console.log("value of arr6 at -1 position=",arr6.at(-1)); //84 last element of array

let itterator1= arr6.entries();
let pointer= itterator1.next();
/*
while(!pointer.done){
	console.log(typeof pointer.value,pointer.value);// returns an object of index and value out of array
	pointer=itterator1.next(); //to move the pointer to next element.
}
*/

//console.log(arr6.fill(0,3,11));//[10, 23, 55, 0, 0,  0,  0]

let filteredArr=arr6.filter((value)=>value>25) //filter helps to filter out the elements of an array based on predicate expression
//console.log(filteredArr); //[ 55, 48, 76, 84 ]

//console.log("To filter out the primes out of an array");

let primeArray=[-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(value){
		
	for(let i=2;value>i;i++){
		if(value%2===0){
			return false;
		}
	}
	return value>1;
}

//console.log(primeArray.filter(isPrime))//to fetch all prime no.
/*[
  2,  3,  5, 7,
  9, 11, 13
]*/

let freshArr=[1,2,3,4,5]
let strArr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n']
let valueReduced=strArr.reduce((total,i)=>total+i);//reduce the array values to single value as per operation.


console.log("total values reduced to ",valueReduced);

