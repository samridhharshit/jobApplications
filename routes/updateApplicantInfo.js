const con = require('../database.js');

exports.update = async (req, res) => {
    console.log(req.body);
    // res.send(req.body);

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

    console.log(ApplicationDetails);

    // updating the application
    con.query(`update application set ? where company_id = ${ApplicationDetails.company_id}`, ApplicationDetails, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
}
