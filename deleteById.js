'use strict';

module.exports.delete = (sql, res) => {
    global.conn.request()
        .query(sql)
        .then(result => res.json({message: "Cliente excluído com sucesso..."}))
        .catch(err => res.json(err));
}