let express=require('express');
let app=express();
let port=3000;
function getWelcomeMessage(){
  return "We will now learn functions!";
}
app.get("/welcome",(req,res)=>{
res.send(getWelcomeMessage());
});
function getGreetingMessage(username){
  return "Hey"+username+"! "+"Are you ready to learn functions with us?";
}
app.get("/greet",(req,res)=>{
  let username=req.query.username;
  res.send(getGreetingMessage(username));
});
function checkYearsOfExp(yearsOfExp){
  if(yearsOfExp>0){
    return "You have some experience with functions. Great!";
  }else{
    return "No worries. You will start writing functions in no time!";
  }
}
app.get("/message",(req,res)=>{
  let yearsOfExp=parseInt(req.query.yearsOfExp);
  res.send(checkYearsOfExp(yearsOfExp));
});
function getTime(days,hours){
  return days*hours;
}
app.get("/hours",(req,res)=>{
  let days=parseInt(req.query.days);
  let hours=parseInt(req.query.hours);
  res.send(getTime(days,hours));
});
function getModuleCompletion(username,hasCompleted){
  if(hasCompleted){
    return username+" has completed the module";
  }else{
    return username+" has not completed the module";
  }
}
app.get("/module-completion-status",(req,res)=>{
  let username=req.query.username;
  let hasCompleted=req.query.hasCompleted=="True";
  res.send(getModuleCompletion(username,hasCompleted));
});
function getPersonalizedGreeting(city,name){
  return "Hey, "+name+"! "+"Whats famous about "+city+"?";node 
}
app.get("/ personalized-greeting",(req,res)=>{
  let city=req.query.city;
  let name=req.query.name;
  
  res.send(getPersonalizedGreeting(city,name));
});
function findAge(birthYear){
  return 2024-birthYear;
}
app.get("/find-age",(req,res)=>{
  let birthYear=parseInt(req.query.birthyear);
  
  
  res.send(findAge(birthYear).toString());
});
function findRequiredTime(days,hours){
  let time=days*hours;
  if(time>=30){
    return "The time being dedicated is sufficient for learning functions";
  }else{
    return "The time being dedicated is not sufficient for learning functions";
  }

}
app.get("/is-time-sufficient",(req,res)=>{
  let days=parseInt(req.query.days);
  let hours=parseInt(req.query.hours);
  res.send(findRequiredTime(days,hours));
});

app.listen(port,()=>{
  console.log("The server is running on https://localhost"+port);
});