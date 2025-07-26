function sum(n)
{
    let ans=0;
    for(let i=0;i<=n;i++)
        {
          ans+=i;
        }
        return ans;

}
function findsumtill100()
{
    console.log( sum(100));
}
setTimeout(findsumtill100,2000);// yeh apna task alg se kar rha hai here thread is free

console.log("hello world")//yeh print ho jaye ga upar se phele