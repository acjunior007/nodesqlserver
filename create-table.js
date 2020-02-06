"use strict";


// let config = {
//     user: "sa",
//     password: "fcamara@123",
//     server: "NBQSP-FC687O",
//     "database": "node"
// };



function createTable(conn){
    const table = new sql.Table('Clientes');
    table.create = true;
    // cria as colunas
    table.columns.add('Id', sql.Int, {nullable: false, primary: true});
    table.columns.add('Nome', sql.NVarChar(200), {nullable: false});
    table.columns.add('CPF', sql.NVarChar(11), {nullable: false});

    // adiciona as linhas
    table.rows.add('1', 'Antonio Junior', '12343434343');
    table.rows.add('2', 'Junior Santos', '69495835983');
    table.rows.add('3', 'Carlos Antonio', '09583402595');

    const request = new sql.Request()
        request.bulk(table)
            .then(result => console.log('Criou e inserir as linhas na tabela!'))
            .catch(err => console.log(`Erro! ' + ${err}`));
}    

