const express = require('express')
const app = express()
const jwt = require('jwt-simple')
const mongoose = require("mongoose")

app.use(express.urlencoded()); // Form Data
app.use(express.json()) // Body Parser(POST)

// Mongo DB
const db = mongoose.connection;
db.on('error', () => { // 몽고DB 에러 이벤트 핸들링
    console.log("Mongo DB Not Found")
});
db.once('open', () => { // 몽고DB 연결 이벤트 핸들링
    console.log("Mongo DB Connect")
});
mongoose.connect("mongodb://localhost/badachigi", {
    useNewUrlParser: true
}); // DB 연결 시도

// Mongo DB Schema
var Schema = mongoose.Schema;

var User = mongoose.model('User', new Schema({
    username: String, // 유저 이름
    password: String, // 패스워드
}));

app.get("/userlist",(req,res)=>{
    User.find().then(data=>{
        res.send(data)
    })
})
app.get("/adduser/:username",(req,res)=>{
    var username = req.params.username
    var newUser = new User({
        username : username,
        password : "1234"
    })
    newUser.save(err=>{
        res.send(username+" Create")
    })
})


app.listen(3000,()=>{
    console.log("3000 PORT OPEN")
})