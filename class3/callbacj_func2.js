function square(n)
{
    return n*n;

}
function cube(n)
{
    return n*n*n;

}

function forall(a,b,callback)

{
    // console.log(a);
    console.log(callback);
    const val1=callback(a);
    const val2=callback(b);
    return val1+val2;
}
const ans=forall(1,2,cube);
const ans2=forall(1,2,function(n)
{
    return n*n*n*n;
})
console.log(ans);
console.log(ans2)

f
function onDone()
{
    console.log("hi there");
}
setTimeout(function()  {
    console.log("HI THERE !!!")
    
}, 2000);
console.log(onDone());