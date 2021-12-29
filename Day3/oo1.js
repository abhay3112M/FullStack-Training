//params
var printsum = function(...params){
    var sum = 0;
    for(let x of params)
        sum+=x;
    console.log(sum);
}

printsum(1,2,3,4,5);

//spread
var set1 = [1,2,3,4,5];
var set2 = [6,7,8,9,0];

var set3 = [...set1,...set2];
console.log(set3);