var mysql = require("mysql");
var express = require("express");

    routes = require('./routes'),
    path = require('path'),
	fileUpload = require('express-fileupload'),
	bodyParser=require("body-parser");

const app = express();

var cors = require('cors');
const { json } = require("express");
        app.use(cors())


app.use(express.json())
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"instagram-clone"
});
con.connect(function(error){
if(error) throw error;
// console.log("connect");
con.query("select * from password_log",function(error,result){
if(error) throw error;
console.warn("all result",result);

});
});

app.post("/login",(req,res) =>{
    const email = req.body.email;
    const password = req.body.password;

    con.query(
        "SELECT * FROM password_log WHERE email = ? AND password = ?",
        [email,password],
        (err,result) => {
            if(err){
                // console.log(err);
                res.send({err:err});
            }
                if(result.length > 0){
                    res.send(result);
                }else{
                    res.send({massage: "Wrong Email and Password"});
                }
            
        }
    )
})

app.post("/img_upload",(req,res) =>{
    const email = req.body.email;
    const password = req.body.password;

    con.query(
        // "INSERT INTO `users_image`(`image`) VALUES ('" img_name  ')",
        [email,password],
        (err,result) => {
            if(err){
                // console.log(err);
                res.send({err:err});
            }
                if(result.length > 0){
                    res.send(result);
                }else{
                    res.send({massage: "Wrong Email and Password"});
                }
            
        }
    )
})



app.listen(3001, () => {
    console.warn("server running")
})