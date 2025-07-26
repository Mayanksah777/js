// console.log("test");
//func->  A block of code that perform a task
function square(number)
{
    return number*number;
}

const result=square(10);
console.log(result);
//anonymus ... funstion expression
const name=function(params)
{
    //statement
}
//An arrow function
const name2=(params)=>
{
    //statements
}
function sayhi(name)
{
    console.log(`HI, ${name}!`);
}
sayhi('Mayank');

function add(a,b)
{
    return "RETURNED";
    return a+b;
}
const sum=add(5,'aaaa');
console.log(sum);

//Arrow func most modern 
const square2=(number)=>{
    return number*number;
}
//diff way to write
const square3=(number)=>number+number;

const result2=square3(40);
console.log(result2);
