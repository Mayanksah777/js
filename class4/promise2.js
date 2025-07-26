let p= new Promise(function(resolve){

    resolve("hi bro ");//you get some ketchup after that you resolve your final value
}); 
p.then(function()//.then funtion is called whenever the async function resolves
{
    console.log(p); 
})
