let express=require( 'express' );
let app=express();
let port=4000;
app.get("/custom-commit",(req,res)=>{
  let type=req.query.type;
  let message=req.query.message;
  let result=type+":"+message;
  res.send(result);

});
app.get("/certificate",(req,res)=>{
  let firstname=req.query.firstName;
  let lastname=req.query.lastName;
  let coursename=req.query.courseName;
  let result="This certification is awarded to "+firstname+" "+lastname+" for completing the course "+coursename;
  res.send(result);
});
app.get("/autoreply",(req,res)=>{
  let startmonth=req.query.startMonth;
  let endmonth=req.query.endMonth;
  let result="Dear customer, thank you for reaching out to me. Unfortunately, I'm out of office from "+startmonth+" till "+endmonth+".Your enquiry will be resolved by another colleague.";
  res.send(result);
});
app.get("/secureurl",(req,res)=>{
  let domain=req.query.domain;
  let result="htpps://"+domain;
  res.send(result);
});
app.get("/sendotp",(req,res)=>{
  let otpCode=req.query.otpCode;
  let result="Your OTP for account verification is "+otpCode+". Do not share this with anyone";
  res.send(result);
});
app.get("/welcome",(req,res)=>{
  let firstName=req.query.firstName;
  let email=req.query.email;
  let result="Hey "+firstName+". We're excited to have you here, we'll send future notifications to your registered mail ("+email+")";
  res.send(result);
});
app.get("/github-profile",(req,res)=>{
  let username=req.query.userName;
  let result=" https://github.com/"+username;
  res.send(result);
});
app.get("/text-to-csv",(req,res)=>{
  let id=req.query.id;
  let email=req.query.email; 
  let rollNumber=req.query.rollNumber;
  let result=id+","+email+","+rollNumber;
  res.send(result);
})

app.listen(port,()=>{
  console.log("The server is running on https://localhost"+port);
});