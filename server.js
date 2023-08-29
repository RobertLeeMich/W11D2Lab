const express = require('express')

const app = express()

app.get("/", function (req, res) { 
    res.send("<h1 style='color:red' >Hello Express!</h1>")
})

app.get ("/greeting/:name", function(req, res){
    res.send("<h1>Hello,</h1>" + req.params.name)
})




app.get("/home", function(req, res){
    // res.send("<h1>Home Page</h1>") //prints text
    // res.redirect("/") //redirects to /
    // res.json({ //sends us to a page with json on it when we go to /home
    //     name: "katie",
    //     isCool: true
    // })


})

app.get("/item/:id", (req, res) => {
    // res.send("This route's id parameter" + req.params.id)
})

app.listen(3000, function() {
    console.log("Listening on port 3000")
})