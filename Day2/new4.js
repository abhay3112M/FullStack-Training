
function CreatePerson(name,age){
    var p = new Object();
    p.name = name;
    p.age = age;
    p.eat = function(food){
        console.log(this.name,"eat",food);
    }
    p.move = function(from,to){
        console.log(this.name,"goes",from,"to",to)
    }
    return p;
}

var ram = CreatePerson('ram',30);
var sita = CreatePerson('sita',40);

ram.eat("Pasta");
ram.move("a","b");

sita.eat("Pizza");
sita.move("x","y");