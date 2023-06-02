const express = require("express");
const router = express.Router();

router.get("/projects", (req, res) => {
    res.send("ROTA DE PROJETOS")
});

router.get("/admin/projects/new", (req, res) => {
    res.send("ROTA PARA CRIAR NOVO POST DE PROJETO")
});

module.exports = router;