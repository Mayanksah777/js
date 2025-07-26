const arr=[1,2,3];
arr.push(2);//insertion
console.log(arr);
arr.pop();//delete from back
console.log(arr);
arr.shift();//delete from front
console.log(arr);
arr.unshift(5,4);//insertion from front 
console.log(arr);

const arr1=[1,2,3];
const arr2=[4,5,6];
console.log(arr1.concat(arr2));//concate two arrays


function logg(str)
{
    console.log(str);
}
//callback
arr.forEach(logg);