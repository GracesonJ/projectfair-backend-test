//import dotenv
require('dotenv').config()

//import connection
require('./connection')

//import appmiddleware 
// const appMiddleware = require('./middleware/appMiddleware')

// import express
const express = require('express')


// import cors
const cors = require('cors')

// import router
const router = require('./router')

// create server
const pfserver = express()

// server using cors
pfserver.use(cors())

// parse the data -> middleware to parse the data
pfserver.use(express.json())

// exporting upload folder
pfserver.use('/upload', express.static('./uploads'))

//use middleware
// pfserver.use(appMiddleware)

// use
pfserver.use(router)

// port
const PORT = 4000 || process.env.PORT

// listen
pfserver.listen(PORT,()=>{
    console.log(`PFServer is running successfully in port number ${PORT}`);
    
})




// // get
pfserver.get('/',(req, res)=>{
    res.send(`get request received`)
})

// // send
// pfserver.post('/',(req, res)=>{
//     res.send(`post request received`)
// })

// // put
// pfserver.put('/',(req, res)=>{
//     res.send(`Put request received`)
// })

// // put
// pfserver.delete('/',(req, res)=>{
//     res.send(`Delete request received`)
// })