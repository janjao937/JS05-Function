
function findMax(...args)
{
    let max;
    //Check Para
    for(const arg of args)
    {
        if(arg===null||isNaN(arg)||arg === "")
        {
            console.log("NaN");
            return;
        }
    }


    for(let i = 0;i< args.length;i++)
    {
        if(args[i] < args[i+1])
        {
            max = args[i+1];
        }
    }

    console.log(max);
}

findMax(15,9,100,50);
findMax();