//Feedback

function soundOfBird()
{
    console.log("Jib ");
    console.log("Jibbb");
    for(let i = 0; i<= 5 ; i++)
    {
        console.log("Jib ๆๆๆๆๆๆ");

    }
}

arrowPack = (x) =>
{
    console.log(x);
}
function Banana(count)
{
    let i = 0;
    while(count<=i)
    {
        console.log("Bannana");
    }
}


function isPrime(x)
{
    let isPrime = true;
    for(let i = 2;i<= x;i++)
    {
        if(x%i ===0)
        {
            isPrime = false;
        }
    }

    if(isPrime) console.log("prime number");
    else console.log("not prime number")
}