
isPrime(15);



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