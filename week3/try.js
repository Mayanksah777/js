//when you know certain codebase can throw error 
// you use 

function getlen(name) {
    return name.length;
    
}

try {
    const name=getlen();
    console.log(name)
} catch (error) {
    console.log(error.message);
}
console.log("hi there")