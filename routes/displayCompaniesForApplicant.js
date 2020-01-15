const con = require('../database.js');

exports.showCompanies = (req, res) => {
    con.query(`select 	company_id,
    if (Fullstack_Application = 1, "applied", "not applied") as Fullstack,
    if (BackEnd_Application = 1, "applied", "not applied") as Backend,
    if (FrontEnd_Application = 1, "applied", "not applied") as Frontend
    from application where applicant_id = ?`, req.params.applicant_id, (err, tuple) => {
        if (err) throw err;
        console.log(tuple);
        res.send(tuple);
    })
}
