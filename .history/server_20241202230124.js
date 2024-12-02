const express = require('express');
const app = express();

// Add these middleware before your routes
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); 

const PORT = process.env.SERVER_PORT || 3000

const server = app.listen( PORT, () => {
    
    console.log(`Connected: ${PORT}`)
})

process.on('SIGINT', () => {
    server.close( () => console.log(`Exit!`))
})