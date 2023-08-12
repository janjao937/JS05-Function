
let add =(x,y) =>x+y;

//Anonymous function
(function sayYes(name){
    console.log(name+"|Say Yes");
})("Kit");
///

///Syntax = function expression
///explain = assing anonymous function to variable
let hi =(function sayHi(name){
    console.log("Hello"+name);

});
hi(":Bk");
///

console.log(add(5,8));

//reusable result เร็วแต่เสีย memory ในการเก็บ ค่า
let r = add(5,100);
r **= 25;
console.log(r);

//one time use ช้ากว่า แต่ไม่เสียmemory
console.log(add(8,12));
console.log(add(9,8));
console.log(add(8,112));

//Multiple return
function isEvent(n)
{
    if(n%2===0) return true;

    return false;
}

//expression
let isOdd = (n) => {
    //if(n%2!==0)return true;
    
    return !isEvent(n);
}

console.log(isOdd(17));

/*
Function:
-Declare *ประกาศ function
-params *input
-return *if no return in function it's will br return undifined
-call   *call function

Expression: //variable = expression
-single value:7
-combine expression  //5*2
-function result //add(7,2)
*/


/*
//function syntax

1.function name(){}

2.let name = function(){ }

3.let name =( ) => { return   }
    3.1 let name =(a,b) => a-b    
    3.2 let name = a => a*5

*/


