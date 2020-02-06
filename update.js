'use strict';

module.exports.update = (sql, res) =>{
    global.conn.request()
        .query(sql)
        .then(result => res.json({message: "Cliente atualizado com sucesso!"}))
        .catch(err => res.json(err));
};
