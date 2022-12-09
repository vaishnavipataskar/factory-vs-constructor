var cl=console.log;

let str = "I love javascript";

//1. length >> Property

let strLength = str.length;
cl(strLength);

//2. findIndex >> it is a method(function la call kelele asel tr)

str = "I Love Angular,Angular is developed by Google. Angular is javascript framework"

//to find first angular word's index number
let firstIndex = str.indexOf('Angular');
cl(firstIndex);

//to find second angular word's index number = first index no + 1
let secondIndex = str.indexOf("Angular", 7+1);
cl(secondIndex);

//to find third angular word's index number = second index no + 1
let thirdIndex = str.indexOf('Angular', 15+1);
cl(thirdIndex);

//when we change the string then upper index number will change automatically 
//we can do this thing 

let secondIndex2 = str.indexOf('Angular', firstIndex+1);
cl(secondIndex2);

let thirdIndex3 = str.indexOf('Angular', secondIndex2+1);
cl(thirdIndex3);

//when there is no specific word in that string then ans will be -1

let indexOfReact = str.indexOf('React0');
cl(indexOfReact);

//when we want last index number in the string 

let lastIndex = str.lastIndexOf('Angular');
cl(lastIndex);

//when we want second last index number 

let lastButOneIndex = str.lastIndexOf('Angular',lastIndex-1);
cl(`lastButOneIndex of angular is ${lastButOneIndex}`);

let lastBut2Index = str.lastIndexOf('Angular',lastButOneIndex-1);
cl(`lastBut2Index of Angular is ${lastBut2Index}`);

let lastIndexReact = str.lastIndexOf('React');
cl(`last index of react is ${lastIndexReact}`);

//3.Includes

str = "I love Angular,Angular is developed by Google,Angular is javascript framework."

//this include give ans in yes/no type
let isAngular = str.includes("angular");
cl(isAngular);

let isReact = str.includes("React");
cl(isReact);

//str has angular >> cl('......')

//we can write this way by using indexOf method
if(str.indexOf ('Angular')>=0){
    cl("Angular is present in string")
}

if(str.indexOf('React')>=0){
    cl('React is present in string')
}

//by using includes
if(str.includes('Angular')){
    cl("Angular is included in string")
}

if(str.includes("React")){
    cl('React is included in string')
}else{
    cl('React is not included')
}

//4. lowercase and uppercase 
str="I love javascript";

let lStr = str.toLowerCase();
cl(lStr);  //i love javascript
let uStr = str.toUpperCase();
cl(uStr);  //I LOVE JAVASCRIPT

cl(str.toLowerCase().includes('javascript'));  //yes

//5. trim
let skill=" Angular  "
cl(skill,skill.length);   //10

cl(skill.trim(),skill.trim().length);  //7

if (skill.trim().length===7){
    cl(`you are on right track`)
}

//charAt
//>>character at 
str="I love javascript";
cl(str.charAt(7));   //j
cl(str[7]);    //j

for (let i=0; i<str.length; i++){
    cl(str[i])
}

//7. Extracting string part 
//what is difference between slice/substring/substr

//i. slice
//it accepts two parameters/arguments
//both parameters are not mandetory 
//endIndex is not included in end result 
//slice method accepts -ve arguments

str="cricket,chess,coding,cooking";

let hob1=str.slice(9,14);
cl(hob1);
hob1=str.slice();
cl(hob1);
hob1=str.slice(9);
cl(hob1);
hob1=str.slice(-15, -9);
cl(hob1)

//ii. substring(only one is diff betn slice and substring)
//it accepts 2 parameters
//both are optional
//end index is not included in end result
//it does not accepts -ve arguments 
//if we pass -ve arguments then it will considered

hob1=str.substring(9,14);
cl(hob1);
hob1=str.substring();
cl(hob1);
hob1=str.substring(9);
cl(hob1);

//iii. substr
//it accept 2 argument
//this method is deprecated from ES-6 
//start index is mandetory 
//length is optional

str="cricket,chess,coding,cooking";

hob1=str.substr(9,5);
cl(hob1);

hob1=str.substr(9);
cl(hob1);

//Replace

str="I love reactjs, Reactjs is developed by google, reactjs is a javascript framwork"

let newStr = str.replace('react',"Angular");
cl(newStr);     //only 1st reactjs is replaced by Angular

let newStr2 = str.replace(/reactjs/gi, "Angular");
cl(newStr2);

//9.Concat

let greet1="Hello";
let greet2="Javascript";

// greet1= greet1+" "+greet2
//greet1+=" "+greet2;
//greet1 = `${greet1}${greet2}`;

greet1=greet1.concat(' ',greet2);
cl(greet1)

