
printPrime(100);

function printPrime(range)
{
    let isPrime = true;
    for(let i = 2;i<=range;i++)
    {
        isPrime = true;
        for(let j = 2;j<= Math.sqrt(i);j++)
        {
            if(i%j === 0)
            {
                //Not Prime
                isPrime = 0;
            }
        }

        if(isPrime) console.log(i);
    }


}