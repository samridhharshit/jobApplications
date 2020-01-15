const con = require('../database.js');

exports.newForm = async (req, res) => {
    const profileData = req.body.profileAppliedFor

    ApplicationDetails = {
        company_id: req.body.company_id,
        applicant_id: req.body.applicant_id,
    }

    await Object.keys(profileData).forEach((key) => {
        if (key === "fullstack" && profileData[key] === true) {
            // console.log('fs')
            ApplicationDetails.FullStack_Application = true
        } else if (key === "backend" && profileData[key] === true) {
            // console.log('bknd')
            ApplicationDetails.BackEnd_Application = true
        } else if (key === "frontend" && profileData[key] === true) {
            // console.log('frntnd')
            ApplicationDetails.FrontEnd_Application = true
        }
    })

    con.query(`insert into application set ? `, ApplicationDetails, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
}
