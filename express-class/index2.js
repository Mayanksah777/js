const express=require("express")
const app=express();
app.use(express.json());
const users=[{
    name:"John",
    Kidneys:[
        {
            healthy:false
        }
    ]
}];
//for get request ->query parameter to send input
app.get("/",function(req,res)
{
    const johnKidneys=users[0].Kidneys;
    const numberofKidneys=johnKidneys.length;
    let numberofhealthyKidneys=0;
    for(let i=0;i<johnKidneys.length;i++)
    {
        if(johnKidneys[i].healthy)
        {
        numberofhealthyKidneys=numberofhealthyKidneys+1;
        }
    }
    const numberofunhealthykidneys=numberofKidneys-numberofhealthyKidneys;

    res.json(
        {
            numberofKidneys,
            numberofhealthyKidneys,
            numberofunhealthykidneys

        }
    )
})
//for post request we send data to body
app.post("/",function(req,res)
{
    const ishealthy=req.body.ishealthy;
    users[0].Kidneys.push(
        {
            healthy:ishealthy
        }
    )
    res.json(
        {
            msg: "Done!"
        }
    )

})

app.put("/",function(req,res)
{
   for(let i=0;i<users[0].Kidneys.length;i++)
   {
    users[0].Kidneys[i].healthy=true;
   }
  res.json({});
})
app.delete("/",function(req,res)
{
    if(isthereatleastoneunhealthyKidney())
    {    
    const newKidneys=[];
    for(let i=0;i<users[0].Kidneys.length;i++)
    {
        if(users[0].Kidneys[i].healthy)
        {
            newKidneys.push({

                    healthy:true
                })
        }
    }
  users[0].Kidneys=newKidneys;
  res.json({msg:"done"})
}
else 
{
   res.status(411).json(
    {
     msg: "You have no bad kidneys"
    }
   )
}
})

function isthereatleastoneunhealthyKidney()
{
    let atleastoneunhealthyKidney=false;
    for(let i=0;i<users[0].Kidneys.length;i++)
    {
        if(!users[0].Kidneys[i].healthy)
        {
            atleastoneunhealthyKidney=true;
        }
    }
    return atleastoneunhealthyKidney;
}
 
app.listen(4000);