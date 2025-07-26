//array
// const array=["mayank","raman","harsh"];
// for(let i=0;i<array.length;i++)
//     {
//         console.log(array[i]);
//     }

// const age=[1,2,3,4,5]
// for(let i=0;i<age.length;i++)
//     {
//         if(age[i]%2==0) console.log(age[i]);
//     }

//2.objects
const user=[{Name:"MAYANK",sex:1},{Name:"RAGHUL",sex:0},{Name:"RONIY",sex:1}];//object
for(let i=0;i<user.length;i++)
    {
        if(user[i]["sex"]==1)
            {
                console.log(user[i]["Name"]);
            }
    }