const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("Bem vndo ao meu portifólio");
})


app.listen(8080, () => {
    console.log("O servidor está rodando!")
})