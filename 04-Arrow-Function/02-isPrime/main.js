const isPrime = (n)=>{
    for(let i = 2;i<=n;n++)
    {
        if(n%i!==0)
        {
            return true;
        }
        
    }
    return false;
    
}

console.log(isPrime(5));