let express=require('express');
let app=express();
let port=3000;
app.get("/check-whole-number",(req,res)=>{
  let number=parseFloat(req.query.number);
  let result="";
  if(number>=0){
    result="whole number";
  }else{
    result="not a whole number";
  }
  res.send(result);

});
app.get("/check-equal",(req,res)=>{
  let num1=parseInt(req.query.num1);
  let num2=parseInt(req.query.num2);
  let result="";
  if(num1==num2){
    result="Numbers are equal";
  }else{
    result="Numbers are not equal";
  }
  res.send(result);

});
app.get("/check-active",(req,res)=>{
  let isActive=req.query.isActive;
  let result="";
  if(isActive=="true"){
    result= "User is active";
    
  }else{
    result="User is not active";
  }
  res.send(result);

});
app.get("/check-discount",(req,res)=>{
  let cost=parseInt(req.query.cost);
  let result="";
  if(cost>1000){
    result="User is eligible for discount";
    
  }else{
    result= "User is not eligible for discount";
  }
  res.send(result);

});
app.get("/check-fresher",(req,res)=>{
  let workExperience=parseInt(req.query.workExperience);
  let result="";
  if(workExperience>0){
    result="Person is expereinced";
    
  }else if(workExperience<0){
    result="Person is not not working";
  }else{
    result="Person is fresher";
  }
  res.send(result);

});

app.get("/check-result",(req,res)=>{
  let result1=parseInt(req.query.result1);
  let result="";
  if(result1>80){
    result="The grade is A";
  }else if(result1>=50){
    result="The grade is B";
  }else{
    result="The grade is fail";
  }
  res.send(result);

});
app.get("/check-attendace",(req,res)=>{
  let attendance=parseInt(req.query.attendance);
  let result="";
  if(attendance<50){
    result="Attendance is low";
  }else if(attendance<=90){
    result="Attendance is moderate";
  }else{
    result="Attendance is high";
  }
  res.send(result);

});
app.get("/check-rating",(req,res)=>{
  let stars=parseInt(req.query.stars);
  let result="";
  if(stars<3){
    result="Restaurant rating is low";
    
  }else if(stars<=4){
    result="Restaurant rating is moderate";
    
  }else{
    result="Restaurant rating is high";
  }
  res.send(result);

});

app.listen(port,()=>{
  console.log("The server is running on https://localhost"+port);
});