const express=require('require');
const app=express();
const Port=3000;


app.use(express.json());

app.get('/',(req,res)=>{
    res.send("App running - Hitting the Get Api");
})
app.listen(Port,(err)=>{
    if(err){
        console.log(err);
    }
    else {
        console.log(`App running on port ${Port}`);
    }
});