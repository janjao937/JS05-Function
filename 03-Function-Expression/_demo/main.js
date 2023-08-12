
//1.Declaration Function
function name()
{

}

//2.Anonymous Function IIFE function ที่ไม่มีชื่อ 

(function (x,y)
{
    console.log(x+y);
})(10,5);

//2A.  Anonymous แบบ return
let a = (function (x)
{
 return x*2;   
})(10);

//3. function expression การใส่ expression function ลงไปในตัวแปร
const expression = function(x,y){return x+y;};

//Arrow function

//1.ไม่ต้องใส่ return 
let b = x=>x+2;
let J = (x,y)=> x*y;

//2.ต้องมี return ถ้ามี { }
let z = (x)=>{
    x+=2
    x/=2
    return x;
}; 

