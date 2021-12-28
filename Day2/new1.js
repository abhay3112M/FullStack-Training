//Javascript oops concepts
//different ways to create objects in javascript

function showDetails(p){
    console.log("name",p.name);
    console.log("age",p.age);
    console.log();
}

var p1 = new Object(); 
p1.name = "XYZ";
p1.age = 21;
showDetails(p1);


var p2 = {};
p2.name = "abc";
p2.age = 34;
showDetails(p2);


//JSON (javascript object notation) format
var p3 = {
    name:'ram',
    age:35
} 
showDetails(p3);


var p4 = {name:'sita'} //json notation
p4.age = 56;  //object notation
p4['email'] = 'sita101.com'; //dictionary notation
showDetails(p4);
console.log("email",p4.email);


