import passport from 'passport';
import express from 'express';
import {googleSignInController} from '../controllers/authController.js';

const authrouter = express.Router()
const googleSignIn = new googleSignInController()

authrouter.get("/google", passport.authenticate('google', { scope: 
	[ 'email', 'profile' ] 
}));

authrouter.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: process.env.CLIENT_URL,
		failureRedirect: "/login/failed",
	})
);

authrouter.get("/login/success", googleSignIn.signInSuccess);

authrouter.get("/login/failed", googleSignIn.signInFailed);

export default authrouter
