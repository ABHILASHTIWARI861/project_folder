const express = require('express');
const app = express();
const body_parser = require('body-parser');

app.use(body_parser.urlencoded({extended: true}));

app.get('/abc', function(req,res){
res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/bmicalculator', function(req,res){
const height = parseFloat(req.body.height_of_man);
const weight = parseFloat(req.body.weight_of_man);
const bmi = weight / (height * height);
let ans="";
if(bmi < 18.5){
ans = "You are under weight";
}
else if(bmi < 18.5 && bmi > 24.9){
ans = "You are normal weight";
}
else{
ans = "You are overweight";
}
res.send("Your BMI is " + bmi.toFixed(1) + " and <br></br> "  + ans);
})
app.listen(3000, function(){
    console.log("Server is running on port 3000");
})