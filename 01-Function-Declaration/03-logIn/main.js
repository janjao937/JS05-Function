let user = prompt("Enter UserName");
let password = prompt("Enter Password");

Login(user,password);

function Login(user,password)
{
    if(user === "admin" && password === "P@ssw0rd")
    {
        alert("Success");
    }
    else
    {
        alert("Unsuccess");
    }
}

