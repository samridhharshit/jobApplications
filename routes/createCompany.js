const con = require('../database.js');

exports.createNewCompany = async (req, res) => {
    console.log(req.body);
    const profileData = req.body.profile

    const companyData = {
        company_id: req.body.id,
        name: req.body.name
    }

    // Object.keys(profileData).forEach((key) => console.log(key + " : " +profileData[key]));

    // console.log(typeof(req.body.profile));
    con.query(`insert into company set ?`, companyData, (err, result) => {
        if (err) throw err;
        // console.log(result);

        con.query(`select * from company where company_id = ?`, companyData.company_id, async (err, tuple) => {
            if (err) throw err;
            // console.log(tuple);

            const jobData = {
                company_id: tuple[0].company_id
            };

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
            // console.log("jobData \n" + JSON.stringify(jobData))

            con.query(`insert into job set ?`, jobData, (err, result) => {
                if (err) throw err;
                // console.log(result);
            })
        })
    })
}
