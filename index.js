module.exports = (async function () {
    const express = require("express");

    const app = express();
    const port = process.env.PORT || 3333;

    const bodyParser = require('body-parser');

    var banco = [];

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(express.json());

    app.get("/", function (req, res) {
        res.send("Vou aprender a programar!");
    });

    app.post("/formulario", function (req, res) {
        let dadosFormulario = req.body;

        //Verifica se existe outra pessoa com o mesmo CPF
        let qtd = banco.filter(function(candidato){
            return candidato.CPF == dadosFormulario.CPF;
        }).length;

        if(qtd > 0){
            res.json({
                mensagem: "CPF Já existe. Oxe...",
                banco
            });
        } else {
            banco.push(dadosFormulario);
            res.json({
                mensagem: "Cadastrado com sucesso!",
                banco
            });
        }

    });

    app.get("/formulario", function(req, res){
        res.json({banco});
    });

    app.listen(port, function () {
        console.log("Vou aprender a programar!");
    });

})();