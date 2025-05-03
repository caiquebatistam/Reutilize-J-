const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.post("/enviar", (req, res) => {
    const { nome, titulo, descricao, contato } = req.body;
  
    console.log("Novo anúncio recebido:");
    console.log(`Nome: ${nome}`);
    console.log(`Item: ${titulo}`);
    console.log(`Descrição: ${descricao}`);
    console.log(`Contato: ${contato}`);
  
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Post Criado</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 0;
          }
          h1 {
            color: #4CAF50;
          }
          p {
            font-size: 18px;
          }
          a {
            display: inline-block;
            margin-top: 20px;
            text-decoration: none;
            color: #ffffff;
            background-color: #4CAF50;
            padding: 10px 20px;
            border-radius: 5px;
          }
          a:hover {
            background-color: #45a049;
          }
        </style>
      </head>
      <body>
        <h1>Post Criado com Sucesso, aguarde a aprovação do administrador da página!</h1>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Item:</strong> ${titulo}</p>
        <p><strong>Descrição:</strong> ${descricao}</p>
        <p><strong>Contato:</strong> ${contato}</p>
        <a href="/">Voltar para a página inicial</a>
      </body>
      </html>
    `;
  
    res.send(htmlContent);
  });


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
