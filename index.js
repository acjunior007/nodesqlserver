const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const sql = require('mssql');

const exec = require('./execSqlQuery');
const find = require('./searchById');
const del = require('./deleteById');
const insert = require('./insert');
const update = require('./update');

const connStr = "Server=NBQSP-FC687O;Database=node;User Id=sa;Password=fcamara@123;";
sql.connect(connStr)
    .then(conn => global.conn = conn)
    .catch(err => console.log("Erro! " + err));

// configurando o body parser para pegar o POST 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// definindo as rotas
const router = express.Router();
// index
router.get('/', (req, res) =>{
    res.json({message: 'Funcionando!'});
});
// listar clientes
router.get('/clientes', (req, res) => {
    exec.execSqlQuery('select * from clientes', res);
});
// lista um cliente por id
router.get('/clientes/:id', (req, res) => {
    find.findById(`select * from clientes (nolock) where id = ${req.params.id}`, res);
});
// deletar um cliente por id
router.delete('/clientes/:id', (req, res) => {
    del.delete(`delete from clientes where id = ${req.params.id}`, res);
});
// inserir um cliente
router.post('/clientes', (req, res) => {
    const id = parseInt(req.body.id);
    const nome = req.body.nome.substring(0, 250);
    const cpf = req.body.cpf.substring(0, 11);
    insert.insert(`insert into clientes (id, nome, cpf) values(${id}, '${nome}', '${cpf}');`, res);
});

router.put('/clientes/:id', (req, res) => {
    //res.json(req.body);
    const id = parseInt(req.params.id);
    const nome = req.body.nome.substring(0, 250);
    const cpf = req.body.cpf.substring(0, 11);
    update.update(`update clientes set nome = '${nome}', cpf = '${cpf}' where id = ${id}`, res);
});


app.use('/', router);
app.listen(port, () => console.log(`Example app listening on port: ${port}!`));