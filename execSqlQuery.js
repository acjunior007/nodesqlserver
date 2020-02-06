
module.exports.execSqlQuery = function(sqlQuery, res){
    global.conn.request()
        .query(sqlQuery)
        .then(result => res.json(result.recordset))
        .catch(err => res.json(err));
};