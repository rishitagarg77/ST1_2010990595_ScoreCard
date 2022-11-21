// import FileSaver from 'file-saver';
// import { saveAs } from 'file-saver';
var FileSaver = require('file-saver');
const express = require("express");
const bodyParser = require("body-parser");
const { request } = require("https");
const { response } = require('express');

const app = express();
// app.use('/css',express.static(__dirname +'/register_css.css'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true})); 

// app.get("/", function(request,response){
//     response.send("Hello World");rou
// });


app.get("/", function(request,response){
    // console.log(__dirname);
    response.sendFile(__dirname + "/index.html");
});

app.post("/", function(request,response){
    var userID = request.body.sid;
    var userName = request.body.fname;
    var num1 = Number(request.body.sub1);
    var num2 = Number(request.body.sub2);
    var num3 = Number(request.body.sub3);
    var num4 = Number(request.body.sub4);
    var num5 = Number(request.body.sub5);
    var totalMarks = num1 + num2 + num3 + num4 + num5;
    var avgMarks = ((totalMarks)/5);
    // var blob = new Blob([userID,userName,totalMarks,avgMarks], {type: "text/plain;charset=utf-8"});
    // FileSaver.saveAs(blob, "student.txt");
    var grade;
    if(avgMarks>90){
        grade = 'A';
    }
    else if(avgMarks<33){
        grade = 'F';
    }
    else{
        grade='Average';
    }
    response.send("UserID: " + userID + "<br>UserName: " + userName + "<br>Total Marks Of Student Is: " + totalMarks  + "<br>Avg Marks Of Student Is: " + avgMarks + "<br>Grade : " + grade) ;
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});