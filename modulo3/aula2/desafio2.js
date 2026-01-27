const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello Server');
});

users = []

app.post('/cadastro',(req,res)=>
{
    const {email,senha} = req.body;
    if (!email || !email.includes('@')){
        return res.status(400).json ({erro: 'Email inválido. Email necessita ter @'})
    }
    if (!senha || !(senha.length < 6) ){
        return res.status(400).json ({erro: 'Senha invalida. Senha deve ter mais de 6 caracteres.'})
    }
    users.push({"email":email,"senha":senha})
    return res.status(200).json({
        mensagem: "Cadastro Realizado com sucesso",
        user: {email}
    })
    return 0;
}
)

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});