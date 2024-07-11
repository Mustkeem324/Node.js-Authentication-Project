import express from 'express'
import {UserGetController, UserPostController} from '../controllers/controller.js'

const router = express.Router()
const UserGetcontroller = new UserGetController()
const UserPostcontroller = new UserPostController()

router.get('/signup', UserGetcontroller.getSignUpPage);
router.get('/signin', UserGetcontroller.getSignInPage);
router.get('/homepage', UserGetcontroller.homePage);
router.get('/signout', UserGetcontroller.logoutUser);
router.get('/forgot-password', UserGetcontroller.getForgotPassword);
router.get('/change-password', UserGetcontroller.getChangePassword);




//POST REQUESTS
router.post('/signup', UserPostcontroller.createUser);
router.post('/signin', UserPostcontroller.signInUser);
router.post('/forgot-password', UserPostcontroller.forgotPassword);
router.post('/change-password', UserPostcontroller.changePassword);


export default router