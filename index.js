const express = require('express');
const app = express();

let port = 3000;

//Get, POST São basicamente ações que você realiza via protoloco http.

app.get('/',(req, res)=> {
  res.send("Olá seja bem-vindo!")
});

//get página Home 
app.get('/sobre',(req, res)=> {
    res.send("<h1>Você está agora numa página sobre.</h1><br/><p>Aqui é um parágrafo</p>")
  });

  //get página index
  app.get('/index.html',(req, res)=> {
    res.send("<h1>Bem vindo a loja eufloria.</h1><br/<p>Aqui é um parágrafo</p>")
  });

  //get página cadastro cliente
  app.get('/cliente.html',(req, res)=> {
    res.send("<h1>Bem vindo a loja eufloria.</h1><h2>Cadastro</h2><br/><p>Aqui é um formulário para cadastro.</p>")
  });

  //get página login
  app.get('/login.html',(req, res)=> {
    res.send("<h1>Bem vindo a loja eufloria.</h1><br/><br/><p>Formulário de login</p>")
  });

  //get página Produtos
  app.get('/Produtos.html',(req, res)=> {
    res.send("<h1>Bem vindo a loja eufloria.</h1><br/><p>Aqui é um tabela de produtos</p>")
  });

  //get .json com retorno status 200
  app.get('/json',(req, res)=> {
    res.status(200).json({usuario: "anderson", id: 123456})
  });
  
  //get expressão regular
app.get('/ab[0-9]cd',(req, res)=> {
    res.send("Essa é uma expressão regular!")
  });

 let params_module = require ('./params.js');
 app.use('/',params_module);

 app.post('/post/teste_post', (req, res)=> {
    res.send("Você acessou uma página via método POST.");
  });


  app.get('*',(req, res)=> {
    res.send("Link inválido: 404")
  });

app.listen(port, () => console.log(`Escutando na porta ${port}`));


