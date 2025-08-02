
const jwt = require("jsonwebtoken")

//decode , verify , generate 

const value = {
    name : "Mayank sah",
    accountNumber : "123456789"
}

//sign and not generate 

const token =  jwt.sign(value, "secret");
console.log(token);


//this token has been generated using this secret and hence this token can only be verified using this secret 
// this is your chequebook 
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWF5YW5rIHNhaCIsImFjY291bnROdW1iZXIiOiIxMjM0NTY3ODkiLCJpYXQiOjE3NTQxMzYwNTJ9.0mpOrKCV5K1L2l4cIejuAtdW0A5v1JB8W7Y6Sw7E8b0