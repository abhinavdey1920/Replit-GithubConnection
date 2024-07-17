let express=require('express');
let app=express();
let port=3000;

app.get("/check-bmi",(req,res)=>{
  let height=parseFloat(req.query.height);
  let weight=parseFloat(req.query.weight);
  let bmi=(weight/(height*height));
  let result="";
  if(bmi<18.5){
    result="BMI category is underweight";
  }else if(bmi<24.9){
    result="BMI category is normal weight";
  }else if(bmi<29.9){
    result="BMI category is overweight";
  }else{
    result= "BMI category is obese";
  }
  res.send(result);

});
app.get("/check-performance",(req,res)=>{
  let grade=parseInt(req.query.grade);
  if(grade>=90){
    result= "Academic performance is excellent";
  }else if(grade>=75){
    result= "Academic performance is good";
  }else if(grade>=50){
    result="Academic performance is average";
  }else{
    result="Academic performance is poor";
  }
  res.send(result);

});
app.get("/check-age-group",(req,res)=>{
  let age=parseInt(req.query.age);
  let result="";
  if(age<=12){
    result= "Age group is child";
  }else if(age<=17){
    result="Age group is teenager";
  }else if(age<=64){
    result="Age group is adult";
  }else{
    result="Age group is senior";
  }
  res.send(result);

});
app.get("/check-creditScore",(req,res)=>{
  let creditScore=parseInt(req.query.creditScore);
  let result="";
  if(creditScore>=750){
    result="Loan eliability is high";
  }else if(creditScore<=700){
    result="Loan eligiability is medium";
  }else{
    result="Loan eligiability is low";
  }
  res.send(result);
});
app.get("/check-tax-bracket",(req,res)=>{
  let income=parseInt(req.query.income);
  let result="";
  if(income<=500000){
    result="You fall under the 10% tax bracket";
  }else if(income<=1000000){
    result="You fall under the 15% tax bracket";
  }else if(income<=1500000){
    result= "You fall under the 20% tax bracket";
  }else{
    result="You fall under the 30% tax bracket";
  }
  
  res.send(result);

});

app.listen(port,()=>{
  console.log("The server is running on https://localhost"+port);
});