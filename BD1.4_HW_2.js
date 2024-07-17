let express=require('express');
let app=express();
let port=3000;
function generateProfileUrl(username){
  return "https://github.com/"+username;
}
app.get("/github-profile",(req,res)=>{
  let username=req.query.username;
  res.send(generateProfileUrl(username));
  });
function generateCertificate(firstName,lastName,certificateName){
  return "This certification is awarded to"+firstName+" "+lastName+" for completing the course"+certificateName;
}
app.get("/certificate",(req,res)=>{
  let firstName=req.query.firstName;
  let lastName=req.query.lastName;
  let courseName=req.query.courseName;
  res.send(generateCertificate(firstName,lastName,courseName));

});
function calculategrade(maths,science,english){
  let grade=parseFloat((maths+science+english)/300)*100;
  return grade.toString();
}
app.get("/grade",(req,res)=>{
  let maths=parseInt(req.query.maths);
  let science=parseInt(req.query.science);
  let english=parseInt(req.query.english);
  res.send(calculategrade(maths,science,english));

});
function splitBill(billAmount,numberOfFriends){
  return "Each friend owes Rs."+(billAmount/numberOfFriends)+" against the bill";
}
app.get("/split-bill",(req,res)=>{
  let billAmount=parseInt(req.query.billAmount);
  let numberOfFriends=parseInt(req.query.numberOfFriends);
  
  res.send(splitBill(billAmount,numberOfFriends));

});
function calculateSalary(totalHours,hourlyWage){
  monthlySalary=totalHours*hourlyWage;
  return "Your monthly salary is ₹"+monthlySalary;
}
app.get("/monthly-salary",(req,res)=>{
  let totalHours=parseInt(req.query.totalHours);
  hourlyWage=parseInt(req.query.hourlyWage)
  res.send(calculateSalary(totalHours,hourlyWage));

});
app.listen(port,()=>{
  console.log("The server is running on https://localhost"+port);
});