var obj = new Object();
var numbers=[];
var numberInput=document.getElementById('number');
var numberList=document.getElementById('numberList');
var consoleDiv=document.getElementById('console');

obj.addtolist = function(){
    var value = numberInput.value;
    var number= + value; //+ is similar to parseFloat
    if(!isNaN(number) && value){
        numbers.push(number);
        numberList.innerHTML+='<li>'+number+'</li>';
    }
    else {
        var p= document.createElement('p');
        p.append(document.createTextNode('Invalid Input:"'+value+'"'));
        consoleDiv.append(p);
    }
}

obj.sum = function(){
    var result=0;
    for(var i=0; i<numbers.length; i++)
        result+=numbers[i];
    return result;
}
obj.printsum = function(){
    consoleDiv.innerHTML+='<p> sum is :'+obj.sum()+'</p>';
}

obj.average=function(){
    if(numbers.length<1)
        consoleDiv.innerHTML+='<p> Array is Empty </p>';
    else{
        var result=obj.sum()/numbers.length;
        consoleDiv.innerHTML+='<p> Average is :'+result+'</p>';
    }
}

obj.findMin=function(){
    if(numbers.length<1)
        consoleDiv.innerHTML+='<p> Array is Empty </p>';
    else{
        numbers.sort();
        consoleDiv.innerHTML+='<p> Min is :'+numbers[0]+'</p>';
    }
}

obj.reset=function(){
    obj.clear();   
    numbers=[]; 
}

obj.clear=function(){
    numberList.innerHTML='';
    consoleDiv.innerHTML='';
    numberInput.value='';
}

obj.refresh = function(){
    numberList.innerHTML='';
    //comment
}


