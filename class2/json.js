const user={
    name: "Mayank",
    age: 23,
    gender: "male"
}
console.log(user["name"]);
//if we want to send this data somewhere convert it to string
const users='{"name": "avi","age": "23", "gender": "male"}'
//console.log(users["name"]);
//to send different process
// we use JSON.parse
//JSON.stringfy
const user3=JSON.parse(users);//string to object
console.log(user3["name"]);

const user4={
    name: "Mayank",
    age: 23,
    gender: "male"
}
const finalstring=JSON.stringify(user4);
console.log(finalstring);
