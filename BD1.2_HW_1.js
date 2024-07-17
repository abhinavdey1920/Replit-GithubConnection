let express=require("express");
let app=express();
let port=3000;
app.get("/total-marks",(req,res)=>{
  let marks1=parseFloat(req.query.marks1);
  let marks2=parseFloat(req.query.marks2);
  let result=marks1+marks2;
  res.send(result.toString());
});
app.get("/total-weight",(req,res)=>{
  let weight1=parseFloat(req.query.weight1);
  let weight2=parseFloat(req.query.weight2);
  let weight3=parseFloat(req.query.weight3);
  let result=weight1+weight2+weight3;
  res.send(result.toString());
});
app.get("/monthly-salary",(req,res)=>{
  let annualSalary=parseFloat(req.query.annualSalary);
  let monthlySalary=annualSalary/12;
  res.send(monthlySalary.toString());
});
app.get("/total-pages",(req,res)=>{
  let days=parseFloat(req.query.days);
  let pagesPerDay=parseFloat(req.query.pagesPerDay);
  let result=days*pagesPerDay;
  res.send(result.toString());
});
app.get("/currency-conversion",(req,res)=>{
  let amount=parseFloat(req.query.amount);
  let exchangeRate=parseFloat(req.query.exchangeRate);
  let result=amount*exchangeRate;
  res.send(result.toString());
});
app.get("/average-sales",(req,res)=>{
  let sales1=parseFloat(req.query.sales1);
  let sales2=parseFloat(req.query.sales2);
  let sales3=parseFloat(req.query.sales3);
  let result=(sales1+sales2+sales3)/3;
  res.send(result.toString());
});


app.listen(port,()=>{
  console.log("The server is running on https://localhost"+port);
});