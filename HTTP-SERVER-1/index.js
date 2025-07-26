const express=require("express");
const port =3000
const app=express();
// app.get  ('/boys', (req,res)=>{res.send('<b>hi here<b>')})
// app.listen(port)
app.use(express.json())//act as a translator to read the incoming data without this console.log(req.body)  return undefined
app.post('/',(req,res)=>{
    console.log(req.body)
    res.send({

        msg:"2+2=4"
    })
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})