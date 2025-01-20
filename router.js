// import express
const express = require('express')

// import userController
const userController = require('./controller/userController')

// import projectController
const projectController = require('./controller/projectController')

//import jwtMiddleware
const jwtMiddleware = require('./middleware/jwtMiddleware')

// import multer
const multerConfig =  require("./middleware/multerMiddleware")

// instance router
const router = new express.Router()

// REGISTER
router.post('/register', userController.register)

// LOGIN
router.post('/login', userController.login)

//add-project
router.post('/add-project', jwtMiddleware, multerConfig.single("projectImage"), projectController.addProjectController)

// Get All Project
router.get('/all-project',jwtMiddleware, projectController.getAllProjectController)

// Get home Projects
router.get('/home-project', projectController.getHomeProjectController)

// get user PRoject
router.get('/user-project',jwtMiddleware,projectController.getUserProjectController)

//remove user project
router.delete('/remove-userproject/:id',jwtMiddleware, projectController.removeUserProjectController)

// update user Project
router.put('/update-userProject/:id', jwtMiddleware, multerConfig.single("projectImage"),  projectController.editProjectController)

//update user profile
router.put('/update-userProfile', jwtMiddleware, multerConfig.single("profile"), userController.editProfileController)

module.exports = router