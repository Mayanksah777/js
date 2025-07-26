const { setTimeout } = require("node:timers");

function myowntime(callback,duration)
{
    setTimeout(callback,duration);

}
myowntime(function()
{
    console.log("after set timeout")
},2000);
// normal non promise function

// function promisi(duration)//promise defining 
// {
//     const p= new Promise(function(resolve)
//     {
//       setTimeout(resolve,duration);
//     });
//     return p;
// }
// const ans=promisi(1000);
// ans.then(function()//calling 
// {
//     console.log("timeout is done");
// });

function promisify(duration)
{
  const p= new Promise(function(resolve){
    setTimeout(function()
  {
    resolve();
  },duration)
  });
  return p;
}
const ans=promisify(5000);
console.log(ans);
ans.then(function()
{
   console.log("timeout is done");
});