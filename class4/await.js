function mayank()
{
    let p=new Promise(function(resolve)
    
{
    //do some async logic here 
    setTimeout(function()
    {
        resolve("hi ")
    },3000)
});
return p;
}


async function main()
{
    //no callbacks, no .then syntax
    let value=await mayank();
    console.log("hello broskeys");
}
main();
console.log("after main");