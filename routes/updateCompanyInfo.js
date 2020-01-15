const con = require('../database.js');

exports.update = async (req, res) => {
    console.log(req.body);
    const profileData = req.body.profile

    const jobData = {}

    await Object.keys(profileData).forEach((key) => {
        if (key === "fullstack") {
            jobData.Fullstack = profileData[key]
        }
        else if (key === "backend") {
            jobData.BackEnd = profileData[key]
        }
        else if (key === "frontend") {
            jobData.FrontEnd = profileData[key]
        }
    })

    // console.log(jobData);

    con.query(`update job set ? where company_id = ${req.body.id}`, jobData, (err,result) => {
        if(err) throw err;
        console.log(result);
    })
}
