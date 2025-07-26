setTimeout(function()
{

    console.log("hi there");
    setTimeout(function()
    {
        console.log("inside second one ");
    },2000 );
},1000)  //bad nesting 

//it could be done by promises by await which removes bad nesting