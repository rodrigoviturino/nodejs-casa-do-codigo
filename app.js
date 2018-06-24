const express = require('express');
let app = express();


// DEFINIR variaveis para dentro do express
app.set('view engine', 'ejs');

// configurando a ROTA '/produtos' e QUANDO...
app.get('/produtos', function(req, res){
    console.log("listandoo..");
    
    res.render("produtos/lista"); // pasta/arquivo
});


/////////// Listen: chamando o servidor e QUANDO estiver PRONTO vai ter tal ação
app.listen(3000, function(){
    console.log('servidor está rodando');
    
});