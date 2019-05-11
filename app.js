const express = require('express')
const app = express()
const jwt = require('jwt-simple');

var SECRIT = "STRING"
var jwt_data = jwt.encode("Hello", SECRIT)
console.log("JWT 토큰 : " + jwt_data, "해석 : " + jwt.decode(jwt_data, SECRIT))