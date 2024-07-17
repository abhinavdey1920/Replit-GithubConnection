let express=require( 'express' );
let app=express();
let port=3000;
app.get("/whisper",(req,res)=>{
  let name=req.query.name;
  let result=name.toLowerCase();
  res.send(result);  
});
app.get("/full-product-name",(req,res)=>{
  let companyName=req.query.companyName;
  let productName=req.query.productName;
  let fullProductname=companyName+" "+productName;
  res.send(fullProductname);
});
app.get("/date",(req,res)=>{
  let month=req.query.month; 
  let year=req.query.year;
  let formattedDate=month+"/"+year;
  res.send(formattedDate);
});
app.get("/greet",(req,res)=>{
  let city=req.query.city;
  let greetings="You live in"+" "+city;
  res.send(greetings);
  
});
app.get("/capital",(req,res)=>{
  let capital= req.query.capital;
  let country=req.query.country;
  let countryCapital=capital+" is capital of "+country;
  res.send(countryCapital);
    
  
})
app.get("/email",(req,res)=>{
  let firstName=req.query.firstName;
  let lastName=req.query.lastName;
  let domain=req.query.domain;
  let email= firstName+lastName+"@"+domain;
  res.send(email);
});
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
});
app.get("/total-distance",(req,res)=>{
  let distance1=parseFloat(req.query.distance1);
  let distance2=parseFloat(req.query.distance2);
  let result=distance1+distance2;
  res.send(result.toString());
});
app.get("/discounted-price",(req,res)=>{
  let cartTotal=parseFloat(req.query.carTotal);
  let discount=parseFloat(req.query.discount);
  let result=(cartTotal-( cartTotal * ( discount / 100 ) ));
  res.send("Your bill amount is "+result.toString());
});



app.listen(port,()=>{
  console.log("The server is running on https://localhost"+port);
});