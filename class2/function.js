function log1()
{
    console.log("Hello world");
}

function log2(int)
{
    console.log(int+"Hello world 2 from mayank ");
}
function log(fn)
{
  fn();
}
const Arr=[1,2,3];
Arr.forEach(log2);