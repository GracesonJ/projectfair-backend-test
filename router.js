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
router.get('/all-project', projectController.getAllProjectController)

// Get home Projects
router.get('/home-project', projectController.getHomeProjectController)

// get user PRoject
router.get('/user-project',jwtMiddleware,projectController.getUserProjectController)

module.exports = router