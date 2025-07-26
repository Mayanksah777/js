//can you call one function inside another function
//answer is yes to solve repetation
function square(n)
{
    return n*n;

}
function cube(n)
{
    return n*n*n;

}
function sumofsquare(a,b)
{
    const val1=square(a);
    const val2=square(b);
    return val1+val2;
}
function sumofcube(a,b)
{
    const val1=cube(a);
    const val2=cube(b);
    return val1+val2;
}
console.log(sumofsquare(1,2));
console.log(sumofcube(1,2));