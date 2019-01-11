var express = require("express")
var mongoose = require("mongoose")
var axios = require("axios")
var cheerio = require("cheerio")

// var db = require("./models")

var PORT = 3000

var app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))

mongoose.connect("mongodb://localhost/mongo-scrape", { useNewUrlParser: true })

// Routes
// Get some headlines
app.get("/scrape", function(req, res) {
    axios.get("https://www.nytimes.com/").then(function(response) {
  var $ = cheerio.load(response.data)
  var results = []

  $("div.css-1100km").each(function(i, element) {
   var title = $(element).text()
    //var title = $(element).children("#css-3w1yun")
    // var link = $(element).children().attr("href")
    results.push({
      title: title
    })
  })
  
  console.log(results)
  res.send(results)
});
})


// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!")
  })