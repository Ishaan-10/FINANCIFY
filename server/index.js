const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const basicRoutes = require('./Routes/Basic');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const User = require('./Models/User');
const MongoStore = require('connect-mongo');
const authRoutes = require('./Routes/authRoutes');
const { urlencoded } = require('express');
const transactions = require('./Routes/transactions');
const goals = require('./Routes/goals');
const profile = require('./Routes/profile');
const overview = require('./Routes/overview');
const incomeSource = require('./Routes/incomeSources');
const recurring = require('./Routes/recurringPayments');
var cors = require('cors');
const { isLoggedIn } = require('./middlewares');
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true

}));
app.use(morgan('tiny'));
const db = mongoose.connection;
mongoose.connect(process.env.DATABASE_KEY, { useNewUrlParser: true, useUnifiedTopology: true });
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Database Connected")
});

const secret = process.env.secret || 'randomsecret';

const store = new MongoStore({
  mongoUrl: process.env.DATABASE_KEY, secret, touchAfter: 24 * 3600
})

store.on("error", function (e) {
  console.log("Session store error!", e);
})

const sessionConfig = {
  store,
  name: 'session',
  secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    /*secure:'true',*/
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}

app.use(urlencoded({ extended: true }))
app.use(express.json())
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.use(new LocalStrategy({
  usernameField: 'email'
}, User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// ALL ROUTES

app.use('/', basicRoutes);
app.use('/auth', authRoutes);
app.use('/transaction', isLoggedIn, transactions);
app.use('/goals', isLoggedIn, goals);
app.use('/income', isLoggedIn, incomeSource);
app.use('/recurring', isLoggedIn, recurring);
app.use('/overview', isLoggedIn, overview);
app.use('/profile', isLoggedIn, profile);


const PORT = process.env.PORT || 3001;
app.listen(PORT, (req, res) => {
  console.log(`Listening on port ${PORT}`);
})