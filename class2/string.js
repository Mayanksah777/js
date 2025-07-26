const str="mayank sah";
console.log(str,str.length); //length of string
console.log(str+" in which sah index is "+str.indexOf("sah"));//first index
const str2="mayank sah sah sah ";
console.log(str2+" in which sah last index its appear is  "+str2.lastIndexOf("sah"));//last index

console.log("i want to slice sah so final output is "+ str.slice(0,7));//slice the word in string 
let ans="rakesh kumar".slice(0,5)
console.log(ans)
console.log(str.substr(2,5));//from position 2 se lgatar 5 characters de ga

console.log(str.replace("sah","saw"));// ye replace krta hai string mei
