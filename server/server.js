const express = require('express')
const app = express()

//npm run dev

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo"]})
})

app.listen(5000, () => { console.log("Server started on port 5000")})