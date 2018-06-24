const express = require('express');
let app = express();

// configurando a ROTA '/produtos' e QUANDO...
app.get('/produtos', function(req, res){
    res.send("<html><body><h1>Listagem de produtos</h1></body></html>");
});

// Listen: chmando o servidor e QUANDO estiver PRONTO vai ter tal ação
app.listen(3000, function(){
    console.log('servidor está rodando');
    
});