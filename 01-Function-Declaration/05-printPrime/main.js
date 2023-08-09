
printPrime(100);

function printPrime(range)//print
{
    for(let i = 2 ; i<= range;i++)
    {
        checkPrime(i);
    }
}
function checkPrime(num)//check
{   
    let isPrime = true;
    for(let j = 2;j<= Math.sqrt(num);j++)
        {
            if(num%j === 0)
            {
                //Not Prime
                isPrime = false;
                break;
            }
        }
    if(isPrime) console.log(num);
}

// function printPrime(range)
// {
//     let isPrime = true;
//     for(let i = 2;i<=range;i++)
//     {
//         //isPrime = true;
//         for(let j = 2;j<= Math.sqrt(i);j++)
//         {
//             if(i%j === 0)
//             {
//                 //Not Prime
//                 isPrime = false;
//                 break;
//             }
//         }

        
//     }


// }

