
//arrow 
const sum=(a,b)=>{ 
    return a+b;
}

const ans=sum(1,5);
console.log(ans);
//convert an array into new array with every elemnt 
//multiply by 2
const input=[1,2,3,4];
const newarr=[];
for(let i=0;i<input.length;i++)
{
   newarr.push(input[i]*2);

}
console.log(newarr);
// whenever you are said to transform array use map

function transform(i)
{
   return  i*3;
}

const ans2=input.map(transform);
console.log(ans2);
//or
const ans3=input.map(function(i){
    return i*4;
})
console.log(ans3);

//now i want to filter out an array on the basis of any condition
//use filter 

const newans=ans3.filter( (n)=>{
        if(n%2==0) return true;
        else return false;
    }
)
console.log(newans);