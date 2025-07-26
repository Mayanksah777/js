/* until now we have only rsed other people's asyncronous funtion How can we create an asynchronous function of our
own*/
//cleaner way is called to write your own async function is promises
//promise use no callbacks and no arguments
const fs=require('fs');
function KiratsReadFile()//own syncronus func
{
    return new Promise(function(resolve)
    {
        console.log("inside function");
        fs.readFile("hey.txt","utf-8",function(err,data)
    {
        console.log("before resolve");
        resolve(data);
    });
    })
}
function onDone(data)
{
    console.log(data)
}
var a=KiratsReadFile();
a.then(onDone);