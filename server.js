require('dotenv').config();
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var Auth = require('./routes/auth');
var Post = require('./routes/post');
var User = require('./routes/user');
var Bucket = require('./routes/bucket');
const path = require('path');
var app = express();
var PORT = process.env.PORT || 5000;
var connection = mongoose.connect(process.env.URL, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
});
connection.catch((err) => {
    console.log(err);
})
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json({
    limit: '30mb'
}));
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SECRET,
    maxAge: Date.now() + (1000000) 
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', Auth);
app.use('/posts', Post);
app.use('/user',User);
app.use('/bucket',Bucket);
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
}
app.listen(PORT, () => {
    console.log(`Your app is running on PORT ${PORT}`);
})