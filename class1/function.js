function findsum(a,b,cal)//do things with the input and return an output
{
 
    let result= a+b;
    cal(result);
}

function display(data)
{
    console.log("Result of the sum is : "+data);
}






const val2=findsum(1,3,display);//function can be pass as arguments
