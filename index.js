const express = require("express")
const app = express()
const port = 3000

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))

app.get("/", (req,res) => {
    console.log("in the get method!")
    res.render("index.ejs")
})

app.post("/name", (req,res) => {
    console.log(req)
    console.log("in the post method!")
    res.render("output.ejs", {
        UserName: req.body.UserName
    })
})

app.listen(port, () => {
    console.log("Example app")
})