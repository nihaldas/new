//FE(Function Expression)


var f1 = function(){
    console.log("Greetings from f1 function");
    //return "hello";
}

var f2 = function(){
    return "Hello MC BC "; 
}

function Display(){
    console.log("Hello from display");
}

function Wishes(){
    console.log("Hello from Wishes"); 
}

function oneplustwo(){
    console.log("Here is the addition of 1 plus 2")
    console.log(1+2) ; 
}

function square(x){
    console.log(x*x) ;
}


sumoftwo=function(x,y){
    return x+y ; 
}


//f1() ; 
//console.log(f2()) ; 

//Callback => A function passing as parameter to a function 

var f1 =  function(cb) {
    cb() ; 
}

var calc = function(x,pqr) {
    return pqr(x) ; 
}

var calc_sum = function(x,y,cv){
    return cv(x,y); 
}

max = function(a,b){
    return (a>b)?a:b ; 
}

f1(Display); 
f1(Wishes);
f1(oneplustwo);


calc(5,square);

console.log(calc_sum (4,5,sumoftwo) ) ; 
console.log(calc_sum (4,5,max) ) ;

/* instant implementation */

console.log(calc_sum (4,5,function(a,b){
    return (a>b)?a:b ; 
}) ) ;

console.log(calc_sum (4,5,function(x,y){
    return x+y ; 
}) ) ;


