const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello Server');
});

app.get('/parouimpar/:numero',(req,res) =>{
    const numero = parseInt (req.params.numero);
    const isPar = (numero%2==0) ? true : false;
    if (isPar){
        res.json(`Numero ${numero} é par.`)
    }
    else{
        res.json(`Numero ${numero} não é par`)
    }
    return 0
})
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});