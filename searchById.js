'use strict';

module.exports.findById = (sql, res) => {
    global.conn.request()
        .query(sql)
        .then(result => res.json(result.recordset))
        .catch(err => res.json(err));
};