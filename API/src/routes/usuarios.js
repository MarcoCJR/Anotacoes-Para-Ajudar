var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/cadastrarU", function (req, res) {
    usuarioController.cadastrarU(req, res);
})

router.post("/cadastrarF", function (req, res) {
    usuarioController.cadastrarF(req, res);
})

router.post("/autualizarFKF", function (req, res) {
    usuarioController.autualizarFKF(req, res);
})

// COPIA ALGUM DOS POSTS ACIMA E COLA AQUI, SUBSTITUINDO O NOME PELO MESMO QUE VOCÊ COLOCOU NA PÁGINA DA SUA VOTAÇÃO
// VÁ PARA UsuarioController
router.post("/cadastrarV", function (req, res) {
    usuarioController.cadastrarV(req, res);
})

module.exports = router;