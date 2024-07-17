let express=require("express");
let app=express();
let port=3000;
app.get("/total-distance",(req,res)=>{
  let distance1=parseFloat(req.query.distance1);
  let distance2=parseFloat(req.query.distance2);
  let result=distance1+distance2;
  res.send(result.toString());
});
app.get("/total-time",(req,res)=>{
  let time1=parseFloat(req.query.time1);
  let time2=parseFloat(req.query.time2);
  let time3=parseFloat(req.query.time3);
  let result=time1+time2+time3;
  res.send(result.toString());
  
});
app.get("/average-speed",(req,res)=>{
  let totalDistance=req.query.totalDistance;
  let totalTime=req.query.totalTime;
  let result=totalDistance/totalTime;
  res.send(result.toString());
});
app.get("/eta",(req,res)=>{
  let distance=req.query.distance;
  let speed=req.query.speed;
  let result=distance/speed;
  res.send(result.toString());
});
app.get("/total-calories",(req,res)=>{
  let duration1=parseFloat(req.query.duration1);
  let duration2=parseFloat(req.query.duration2);
  let caloriesPerMinute=parseFloat(req.query.caloriesPerMinute);
  let result=(duration1+duration2)*caloriesPerMinute;
  res.send(result.toString());
});
app.get("/interest-earned",(req,res)=>{
  let principal=parseFloat(req.query.principal);
  let rate=parseFloat(req.query.rate);
  let time=parseFloat(req.query.time);
  let result=(principal*rate*time)/100;
  res.send(result.toString());
});

app.listen(port,()=>{
  console.log("The server is running on https://localhost"+port);
});