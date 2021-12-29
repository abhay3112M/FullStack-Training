function Person(name,age){
    this.name = name;
    this.age = age;
    this.access = [];
}

var teachDriving = function(Person,type){
    if(Person.age<18){
        return console.log(Person.name + " you need to wait for "+(18-Person.age)+" years to drive");
    }
    Person.access.push(type);
    console.log(Person.name+" you are now licensed to drive "+type);
    Person.drive = function(type){
        for(var x of Person.access){
            if(x===type)
                return console.log(Person.name+" drives "+type);
        }
        console.log(Person.name+" is not licensed to drive "+type);
    }
}


var prabhat=new Person("Prabhat", 40); 
var shivanshi=new Person("Shivanshi", 15); 

teachDriving(prabhat, 'Car');
teachDriving(prabhat,'Bike');
teachDriving(shivanshi, 'Bike');

prabhat.drive('Car');
prabhat.drive('Bus');
shivanshi.drive('anything');
