let express=require('express');
let app=express();
let port=3000;
app.get("/bmi",(req,res)=>{
  let height=parseFloat(req.query.height);
  let weight=parseFloat(req.query.weight);
  let bmi=(weight/(height*height));
  res.send(bmi.toString());
});
app.get("/checkout",(req,res)=>{
  let product=req.query.product;
  let units=parseFloat(req.query.units);
  let price=parseFloat(req.query.price);
  let totalUnits=units*price;
  let result="Your total for "+units+" "+ product+ " is "+totalUnits;
  res.send(result.toString());
});
app.get("/grade",(req,res)=>{
  let maths=parseInt(req.query.maths);
  let science=parseInt(req.query.science);
  let english=parseInt(req.query.english);
  let gradeInPercentage=((maths+science+english)/300)*100;
  res.send("Your grade in percentage is "+gradeInPercentage+" %");
});
app.get("/discounted-price",(req,res)=>{
  let cartTotal=parseFloat(req.query.cartTotal);
  let discount=parseFloat(req.query.discount);
  let result=(cartTotal-( cartTotal * ( discount / 100 ) ));
  res.send("Your bill amount is "+result.toString());
});
app.get("/split-bill",(req,res)=>{
  let billAmount=parseFloat(req.query.billAmount);
  let  numberOfFriends=parseFloat(req.query.numberOfFriends);
  let splitAmount = billAmount / numberOfFriends
  res.send("Each friend owes Rs."+splitAmount.toString()+" against the bill");
});
app.get("/celsius-to-fahrenheit",(req,res)=>{
  let celsius=parseFloat(req.query.temperature);
  let fahrenheit = celsius * 9/5 + 32
  res.send("Result: "+fahrenheit.toString()+" fahrenheit");
});
app.get("/monthly-salary",(req,res)=>{
  let hourlyWage=parseFloat(req.query.hourlyWage);
  let totalHours=parseFloat(req.query.totalHours);
  let monthlySalary = hourlyWage * totalHours;
  res.send("Your monthly salary is ₹"+monthlySalary.toString());
});




app.listen(port,()=>{
  console.log("The server is running on https://localhost"+port);
});