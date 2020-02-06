'use strict';

module.exports.insert = (sql, res) =>{
    global.conn.request()
        .query(sql)
        .then(result => res.json({message: "Cliente cadastrado com sucesso!"}))
        .catch(err => res.json(err));
};