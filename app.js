const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt-nodejs');
　
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
　
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    secret: 'ambc@!vsmkv#!&*!#EDNAnsv#!$()_*#@',
    resave: false,
    saveUninitialized: true
}));

const users = [
  {
      user_id: 'ballbot',
      user_nickname: 'BallBot',
      user_pwd: 'ballbot3451'
  }
]
const findUser = (user_id, user_pwd) => {
  return users.find( v => (v.user_id === user_id && v.user_pwd === user_pwd) );
}
const findUserIndex = (user_id, user_pwd) => {
  return users.findIndex( v => (v.user_id === user_id && v.user_pwd === user_pwd) );
}
　
app.listen(3000);

app.get('/', (req, res) => {
  const sess = req.session;
  res.render('index', {
      nickname: sess.user_uid+1 ? users[sess.user_uid]['user_nickname'] : ''
  });
});