function showDetails(p){
    console.log("name",p.name);
    console.log("age",p.age);
    console.log();
}
//creation of an object
var p1 = new Object(); 

//objects can have properties
p1.name = "XYZ";
p1.age = 21;

//objects can have behaviours
p1.show = showDetails;

p1.show(p1);