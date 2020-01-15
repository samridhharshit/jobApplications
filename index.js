const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// importing local files
const con = require('./database');
const newCompany = require('./routes/createCompany');
const updateCompanyInfo = require('./routes/updateCompanyInfo');
const addApplicant = require('./routes/addApplicant.js');
const updateApplicantInfo = require('./routes/updateApplicantInfo')
const newApplication = require('./routes/submitNewApplication');
const displayCompaniesForApplicant = require('./routes/displayCompaniesForApplicant');
const displayApplicantForCompanies = require('./routes/displayApplicantForCompanies');

const port = 3000;

// checking for database connection establishment
con.connect(function (err) {
    if (!err) {
        console.log("Database is connected ...");
    } else {
        console.log("Error connecting database ...");
    }
});

// Api Routes

// saving company details
app.post('/companyForm', newCompany.createNewCompany)


// updating company info
app.put('/updateCompanyInfo', updateCompanyInfo.update);


// saving applicant details
app.post('/applicantForm', addApplicant.Add);


// updating applicant details for same company
app.put('/updateApplicantForm', updateApplicantInfo.update);


// submitting application for another company
app.post('/newApplication', newApplication.newForm);


// displaying all the companies to which an applicant has applied
app.get('/companiesList/:applicant_id', displayCompaniesForApplicant.showCompanies);


// displaying all applicants to a specific company
app.get('/applicantsList/:companyId', displayApplicantForCompanies.showApplicants);

app.listen(port, (req, res) => {
    console.log(`app listening to port ${port}`);
})
