console.log("ONDE EU ESTOU");

const express = require("express");
const app = express();
const pug= require("pug")

let listanoomes=["Wellington","José","Maria","Carlos","José","Maria","Jão"];

app.use(express.static('public')); //faz com que a aplicação web criada com o express possa acessar recursos estaticos na pasta public

app.set('view engine', 'pug');
app.get("/",(req,res)=>{
  res.render("home");
});

app.listen(3000,  
  () => {
  console.log('Servidor iniciado! Na porta 3000');
}
);