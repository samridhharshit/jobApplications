const con = require('../database.js');

exports.showApplicants = (req, res) => {
    con.query(`select 	applicant.applicant_id,
    applicant.name,
    if (application.Fullstack_Application = 1, "applied", "not applied") as Fullstack,
    if (application.BackEnd_Application = 1, "applied", "not applied") as Backend,
    if (application.FrontEnd_Application = 1, "applied", "not applied") as Frontend
    from applicant inner join application on applicant.applicant_id = application.applicant_id and application.company_id = ?`, req.params.companyId, (err, tuple) => {
        if (err) throw err;
        console.log(tuple);
        res.send(tuple);
    })
}
