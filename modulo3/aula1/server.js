const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello Server');
});

const alunos = [
    { id: 1, nome: "Ana Silva", media: 8.5 },
    { id: 2, nome: "Bruno Costa", media: 7.2 },
    { id: 3, nome: "Carla Souza", media: 9.0 },
    { id: 4, nome: "Diego Lima", media: 6.8 },
    { id: 5, nome: "Elena Martins", media: 9.5 }
];

app.get('/alunos/:id', (req,res) => {
	const id = parseInt ( req.params.id )
	if (id < 0 || id > alunos.length ){
		return res.status(404).json ({erro: 'Aluno não existe'})
	}
	res.json(alunos[id]);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
