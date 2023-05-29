const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// View Engine
app.set('view engine','ejs');

//Static
app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({extends: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("index");
})


app.listen(8080, () => {
    console.log("O servidor está rodando!")
})