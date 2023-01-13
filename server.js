//////////////////
////IMPORT dependencies
///////////////////////

const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const PORT = process.env.PORT || 4000 

//IMPORT JSON files
const projects = require("./projects.json")
const about = require("./about.json")

//create app obj
const app = express()

//setup middleware
app.use(cors())

//home route for testing
app.get("/", (req, res)=>{
    res.send("Hello world!")
})

//Route for retrieving projects
app.get("/projects", (req, res)=>{
    res.json(projects)
})

//Route for retrieving about info
app.get("/about", (req, res)=>{
    res.json(about)
})


//listener
app.listen(PORT, ()=> console.log(`Listening on PORT ${PORT}`))