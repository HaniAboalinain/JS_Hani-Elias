/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."
Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/


function tellFortune(x,y,z,n){

output = "You will be a "+x+" in "+y+", and married to "+z+" with "+n+" kids.";
return output;

}
tellFortune("software engineer","Jordan","Alice","3");



/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"
Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge(age){

humanYear=7*age;

outputs = "Your doggie is "+humanYear+" years old in dog years!"

return outputs;

}

calculateDogAge(2);


/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"
Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

function calculateSupply(age,amount){

rem=100-age;
cal=rem*12*30;

output = cal*amount;

return "You will need "+ output+ " cups of tea to last you until the ripe old age of 100" ;

}

calculateSupply(20, 5);

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name
Ex: greet("Jouza")
=> "Hello Jouza"
*/


function greet(name){
	output = "Hello " + name;
	return output;
}
greet('Hani');


/*
5
what is the error:
function double(cat) {
  return 2 * x;
}
function double(7) {
  return 2 * 7;
}
function double('7') {
  return 2 * 'x';
}
*/


function catAge(cat) {
  return 2 * cat;
}

function catAge(x) {
  return 2 * x;
}

function catAge(x) {
  return 2 * x;
}


/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}
functiondouble2 x)
return 2 * x;
}
function (x) double3 {
  return 2 * x;
*/



function double1(x) {
  return 2 * x ;
}
function double2 (x){
return 2 * x;
}
function double3 (x) {
  return 2 * x;
}



/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number
Ex: cube(4)
=> 64
*/

function cube(num){
	
	output = num**3;
	return output;
}
cube (3);



/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers
Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

function multiply(x, y){
	output = x*y;
	return output;
}
multiply(5, 2);


/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"
Ex: canIGetADrivingLicense(21)
=> "yes you can"
Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"
Ex: canIGetADrivingLicense(20)
=> "yes you can"
*/


function canIGetADrivingLicense(age){
	if (age>=20) {
		return "yes you can"
	}else {
		x=20-age;
		return "Please come back after "+x+" years to get one";
	}
}
canIGetADrivingLicense(20);


/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.
**hint: how we can know string length   Ex: : "tree".length   => 4
Ex: sameLength("tree","clue")
=> true
Ex: sameLength("tree","car")
=> false
*/

function sameLength(x, y){
	if (x.length==y.length) {
		output = "true";
	}else {
		output = "false";
	}
	return output;
}
sameLength("hani", "Elias");




/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers
Ex: largerNubmer(5,6)
=> 6
Ex: largerNubmer(5,3)
=> 5
*/

function largerNumber(x, y){
	if (x>y) {
		output = "The Larger Number is "+ x;
	}

	else if (x==y){
		output= "Number are Equal!!";
	}

	else{
	output = "The Larger Number is "+ y;
	}
	return output;
}
largerNumber (5,5);


/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number
Ex: smallerNubmer(8,6,7)
=> 6
Ex: smallerNubmer(5,99,34)
=> 5
Ex: smallerNubmer(5,99,3)
=> 3
Ex: smallerNubmer(5,3,3)
=> 3
*/

function smallerNumber(x, y, z){
	if (x<=y && x<=z) {
		output = "The Smaller Number is "+ x;
	}else if (y<=x && y<=z) {
		output = "The Smaller Number is "+ y;
	}else if (z<=x && z<=y) {
		output = "The Smaller Number is "+ z;}
	// else {
	// 	output = "There are matching numbers";
	// }
	return output;
}
smallerNumber (5,5,7);




/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string
Ex: shorterString("air","school","car","by","github")
=> by
Ex: shorterString("air","tr","car","by","github")
=> tr
Ex: shorterString("by","tr","car","air","github")
=> by
Ex: shorterString("air","by","car","school","github")
=> by
Ex: shorterString("air","tr","by","car","github")
=> by
Ex: shorterString("air","tr","car","github","by")
=> by
*/


function shorterString(x,y,z,a,b){
	if (x.length<y.length && x.length<z.length && x.length<a.length && x.length<b.length) {
		output=x;
	}
	else if (y.length<x.length && y.length<z.length && y.length<a.length && y.length<b.length){
		output = y;
	}
	else if (z.length<x.length && z.length<y.length && z.length<a.length && z.length<b.length){
		output = z;
	}
	else if (a.length<x.length && a.length<y.length && a.length<b.length && a.length<z.length){
		output = a;
	}
	else if (b.length<x.length && b.length<y.length && b.length<a.length && b.length<z.length){
		output = b;
	}
	return output;
}

shorterString("hi","hello","howareyou","h","asdasds");



/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string
Ex: longerString("air","school","car","github")
=> school
Ex: longerString("air","schoo","car","github")
=> github
try all the cases (change the order of the longestString)
*/

function longerString(x,y,z,a){

	if (x.length >y.length && x.length > z.length && x.length > a.length)
		return x;

	else if (y.length >x.length && y.length > z.length && y.length > a.length)
		return y;

	else if (z.length >x.length && z.length > y.length && z.length > a.length)
		return z;
	
	else if (a.length >x.length && a.length > y.length && a.length > z.length)
		return a;
}

longerString("car","cars","rrrr","qqqqq");



/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd
Ex: isEven(1)
=> false
Ex: isEven(2)
=> true
*/

function isEven(x){
	if (x==0) {
	output = "Number is 0!!";
	}
	else if (x%2==0) {
		output = "True";
	}

	else {
		output = "False";
	}
	return output;
}
isEven(5);


/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even
Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true
*/


function isOdd(x){
	if (x==0) {
	output = "Number is 0!!";
	}
	else if (x%2==0) {
		output = "False";
	}

	else {
		output = "True";
	}
	return output;
}
isOdd(5);


/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed
Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5
*/

function positive(x){
	x=(x**2)**(1/2);
	return x;
}
positive(-5);



/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.
Ex: fullName("Mohammad","Jouza")
=> "Mohammad Jouza"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(firstName, lastName){
	output = firstName+" " + lastName;
	return output;
}
fullName("Elias", "Nada");


/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.
Ex: average(1,2,3,4,5)
=> 3
Ex: average(5,7,9,3,5)
=> 5.8
*/

function average(z,x,c,v,b){
	output= (z+x+c+v+b)/5;
	return output;
}
average(20,40,60,80,100);




/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN
Ex: randomNumber()
=> 0.2278
Ex: randomNumber()
=> 0.475
*/


function randomNumber(){
	x=Math.random();
	return x;
}
randomNumber();

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN
Ex: randomBetweenNumbers(1,8)
=> 7.5412
Ex: randomBetweenNumbers(3,100)
=> 23
*/

function randomBetweenNumbers(max,min){
	z=(Math.random()*(max - min) +min) ;
	return z;
}
randomBetweenNumbers(4,10);


/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49
Ex: scoreInUniversty(96)
=> "A"
Ex: scoreInUniversty(3)
=> "F"
Ex: scoreInUniversty(71)
=> "C"
*/





function scoreInUniversty(x){

if (x<=100 && x>=0)
{
	if (x>=95 && x<100)
		return "A";

	else if (x>=85 && x<95)
		return "B";

	else if (x>=70 && x<85)
		return "C";

	else if (x>=50 && x<70)
		return "D";
	
	else
		return "F";



}

else 
return "wrong input";

}

scoreInUniversty(40);



/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: counter()
=> 3
*/
x=0;
function counter(){

	return ++x;
	
}
counter();


/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: counter()
=> 3
Ex: resetCounter()
=> 3 and the counter reset now
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: resetCounter()
=> 2 and the counter reset now
Ex: counter()
=> 1
*/

x=0;
function counter(){

	return ++x;
	
}
counter();



function resetCounter(){
	y=x;

	x=0;

	return y+" The counter is reset now ";
	
}

resetCounter();




