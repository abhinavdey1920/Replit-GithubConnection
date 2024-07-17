let express=require('express');
let app=express();
let port=3000;
app.get("/check-number",(req,res)=>{
  let number=parseFloat(req.query.number);
  let result="";
  if(number>0){
    result="positive";
  }else{
    result="neagative";
  }
  res.send(result);
  
});
app.get("/check-even-odd",(req,res)=>{
  let number=parseFloat(req.query.number);
  let result="";
  if(number%2==0){
    result="Number is even";
  }else{
    result="Number is odd";
  }
  res.send(result);

});
app.get("/isLoggedIn",(req,res)=>{
  let isLoggedIn=req.query.isLoggedIn;
  let result="";
  if(isLoggedIn=="true"){
    result="User is logged in";
  }else{
    result="User is not logged in";
  }
  res.send(result);

});
app.get("/check-discount",(req,res)=>{
  let age=parseInt(req.query.age);
  result="";
  if(age>65){
    result="User is eligible for discount";
  }else{
    result="User is not eligible for discount";
  }
  res.send(result);

});
app.get("/check-number-type",(req,res)=>{
  let number=parseFloat(req.query.number);
  let result="";
  if(number>0){
    result="Number is positive";
  }else if(number<0){
    result="Number is neagative";
  }else if(number==0){
    result="Number is zero";
  }
  res.send(result);

});
app.get("/check-temperature",(req,res)=>{
  let temperature=parseFloat(req.query.temperature);
  let result="";
  if(temperature<15){
    result="Temperature is cold";
  }else if(temperature<=25){
    result="Temperature is warm";
  }else{
    result= "Temperature is hot";
  }
  res.send(result);

});
app.get("/check-activity-level",(req,res)=>{
  let steps=parseInt(req.query.steps);
  let result="";
  if(steps<5000){
    result="Activity level is low";"
  }else if(steps<=10000){
    result="Activity level is moderate";
  }else{
    result="Activity level is high";
  }
  res.send(result);

});
app.get("/check-engagement",(req,res)=>{
  let likes=parseInt(req.query.likes);
  let result="";
  if(likes<100 ){
    result="Enagagement level is low"
  }else if(likes<=500){
    result="Engagement level is medium";
  }else{
    result="Engagement level is high";
  }
  res.send(result);

});

app.listen(port,()=>{
  console.log("The server is running on https://localhost"+port);
});