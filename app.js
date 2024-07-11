import express from 'express'
import bodyParser from 'body-parser'
import ejsLayouts from 'express-ejs-layouts'
import path from 'path'
import dotenv from 'dotenv'
import session from 'express-session'
import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import { connectUsingMongoose } from './config/mongodb.js'
import router from "./routes/routes.js"
import authrouter from "./routes/authRoutes.js"

//CONFIG env
dotenv.config()
const app = express()

//SESSION
app.use(session({ secret: 'SecretKey', resave: false, saveUninitialized: true, cookie: { secure: false } }));


//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			callbackURL: "https://node-authentication-gpu4.onrender.com/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			// console.log('Profile Data')
			// console.log(profile)
			callback(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});

// Set Templates
app.set("view engine", "ejs");  // Define template engine 
app.use(ejsLayouts);            // Use base template
app.set("views", path.join(path.resolve(), "views")); // Define template directory

//connect DB
connectUsingMongoose()

//ROUTES
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.use('/user', router)
app.use('/auth', authrouter)

//LISTEN
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
});
