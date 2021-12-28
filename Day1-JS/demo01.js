/* printing
console.log("Hello javascript World")
*/



/* Data types
var a = 10;
var b = "ajb";
var c = true;
var d = new Date();
var e = null; 
var f = undefined; //value explicitly undefined
var g //value implicitly undefined
//variable implicitly undefined

console.log("typeof a",typeof a);
console.log("typeof b",typeof b);
console.log("typeof c",typeof c);
console.log("typeof d",typeof d);
console.log("typeof e",typeof e);
console.log("typeof f",typeof f);
console.log("typeof g",typeof g);
console.log("typeof h",typeof h);

*/



/*Function and truthies
function CheckTruth(value){
    if(value)
        console.log(value,"is true");
    else
        console.log(value,"is false");
}

CheckTruth(true);
CheckTruth(7>8);
CheckTruth(0);
CheckTruth("");
CheckTruth("mn");
CheckTruth(-1);
CheckTruth(0.00001);
CheckTruth(new Date());
CheckTruth([]);
CheckTruth([0]);
CheckTruth([1,2,3,"mnm"]);
CheckTruth(null);
CheckTruth(undefined);

*/

/* array and some functions 
var arr = [1,2,3,4,5,6];
console.log("array is",arr);
console.log("length of array is",arr.length);
for(var i=0;i<arr.length;i++)
    console.log("arr[",i,"] is",arr[i]);

//add new items
arr.push(199);
console.log("array is",arr);
console.log("arr[100] is",arr[100]); //undefined
console.log("arr[-1] is",arr[-1]);

arr[10] = 99; //arr[7],arr[8],arr[9] will be undefined;
console.log("array is",arr);
for(var i=0;i<arr.length;i++)
    console.log("arr[",i,"] is",arr[i]);

//remove items
arr.slice(2,5) //(start index,end idex); //it create a new aray previous will not change
console.log("array is",arr);

arr.splice(2,5) //(start index,end idex); //it will affect previous array;
console.log("array is",arr);

*/



/*
//every function return something
//if not mentioned it will return Undefined
function add(x,y){
    console.log("arguments",arguments);
    return x+y;
}
console.log("type of add",typeof add);
console.log("add(2,3)",add(2,3));
console.log("add(2,4,5,6,7)",add(2,3,4,5,6,7));  //additional will ignored [will get stored in arguments]
console.log("add(10)",add(10)); //passing fewer args -> add(10,undefined)-> NaN
*/

/* array of functions
function plus(x,y){
    return x+y;
}
function minus(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}
var add = plus
console.log("type of plus",typeof plus,plus.name); // function is a type
console.log("type of add",typeof add,add.name);

const operations = [plus,minus,multiply,divide];
var a = 19,b = 8;
for(var i=0;i<operations.length;i++){
    let result = operations[i](a,b);
    console.log(a,operations[i].name,b,"=",result);
}
//anonymous function
var minus = function (x,y){
    return x-y;
}

*/










