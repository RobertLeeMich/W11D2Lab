const express = require('express')

const app = express()

// app.get("/", function (req, res) { 
//     res.send("<h1 style='color:red' >Hello Express!</h1>")
// })

//GREETING ROUTE
app.get ("/greeting/:name", function(request, response){
    response.send(`<h1>Hello, ${request.params.name}</h1>`)
})

////////////////////////////////////////////////

app.get("/tip/:total/:tip", (total, tipPercentage) => {
    tipPercentage.send(`${parseInt(total.params.total) * (parseInt(total.params.tip) / 100)}`)
})


const quotes = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


app.get("/magic/:quote", (request, response) => {
    const randomElement = Math.floor(Math.random() * quotes.length)
    response.send(`<h1>${request.params.quote}</h1> <h1>${quotes[randomElement]}</h1>`)
})



app.listen(3000, function() {
    console.log("Listening on port 3000")
})

// app.get("/home", function(req, res){
//     // res.send("<h1>Home Page</h1>") //prints text
//     // res.redirect("/") //redirects to /
//     // res.json({ //sends us to a page with json on it when we go to /home
//     //     name: "katie",
//     //     isCool: true
//     // })
// })

// app.get("/item/:id", (req, res) => {
//     // res.send("This route's id parameter" + req.params.id)
// })

