const express = require("express");
const app = express();
const mongoose = require('mongoose');
let port = 8080;
const ejsMate = require("ejs-mate");
const path = require("path");

let MONG_URL = 'mongodb://127.0.0.1:27017/AdaptSecurity'

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, 'public')));


main() .then(()=>{
    console.log("connect to DB")
})
.catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MONG_URL);
}

app.listen(port, () => {
    console.log(`app is listing ${port}`);
})

app.get("/", (req , res ) =>{
    res.redirect("/listing");
});

app.get("/listing", (req, res) => {
    res.render("listing/index.ejs")
});

