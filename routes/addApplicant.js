const con = require('../database.js');

exports.Add = (req, res) => {
    console.log(req.body);
    // res.send(req.body);

    const ApplicantDetails = {
        applicant_id: req.body.applicant_id,
        name: req.body.applicant_name
    }

    // creating the applicant
    con.query(`insert into applicant set ?`, ApplicantDetails, (err, result) => {
        if (err) throw err;
        console.log(result);

        con.query(`select * from applicant join company on applicant.applicant_id = ? and company.company_id = ?`, [ApplicantDetails.applicant_id, req.body.company_id], async (err, tuple) => {
            if (err) throw err;
            console.log(tuple)
            const profileData = req.body.profileAppliedFor

            const ApplicationDetails = {
                company_id: tuple[0].company_id,
                applicant_id: tuple[0].applicant_id,
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

            // console.log(ApplicationDetails);

            // inserting into application
            con.query(`insert  into application set ? `, ApplicationDetails, (err, result) => {
                if (err) throw err;
                console.log(result);
                res.send(result)
            })

        })

    })
}
