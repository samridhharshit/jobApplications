# Job Applications

## Synopsis
 
The application enables the user to create, add company and applicant as well as enable the user to update their details

The webapp runs on Node js backend and uses Rest API

Any company using the webapp can enter their details and profiles they are offering (Frontend , FullStack
 , Backend ). Companies can also update their profile according to their current needs in the future.
 
Applicants using the webapp can apply for these profiles offered by the companies and can also apply for multiple
 profiles and multiple companies according to their developing skills.

The webapp shows the number of applicants who have applied for profiles entered by the companies and the number of
 companies in which the applicant has applied 

## E-R diagram

![job_application](https://user-images.githubusercontent.com/39849261/72459689-4e635480-37f1-11ea-93ef-626117ff88e0.png)

## API Contracts

### POST /companyForm

Creates a new company mentioning the profiles offered by them.

- ***URL params***

    None

- ***Headers*** 

    Content-Type: application/json
 
- ***Data Params***
 
    ```
   {
        "id": int,
        "name": string,
        "profile": {
        	"fullstack": boolean,
        	"backend": boolean,
        	"frontend": boolean
        }
   }
   ```
 
- ***Content***: `{<company_object>}`
 
 ### PUT /updateCompanyInfo
 
 Updates company info as per their requirements
 
- ***URL params***
 
     None
 
- ***Headers*** 
 
     Content-Type: application/json
  
- ***Data Params***
  
  ```
  {
    	"id": int,
    	"name": string,
    	"profile": {
    		"fullstack": boolean,
    		"backend": boolean,
    		"frontend": boolean
     	}
  }
  ```
  
- ***Content***: `{<company_object>}`
 
 ### POST /applicantForm
 
 Creates new applicants
 
 - ***URL params***
  
      None
  
 - ***Headers*** 
  
      Content-Type: application/json
   
 - ***Data Params***
   
    ```
    {
     	"company_id": int,
     	"applicant_id": int,
     	"applicant_name": string,
     	"profileAppliedFor": {
     		"fullstack": boolean,
     		"backend": boolean,
     		"frontend": boolean
     	}
    }
   ```
   
 - ***Content***: `{<applicant_object>}`
   
  ### PUT /updateApplicantForm
   
   Updates application as per applicants desire
    
  - ***URL params***
     
       None
     
  - ***Headers*** 
     
       Content-Type: application/json
      
  - ***Data Params***
      
   ```
   {
       	"company_id": int,
       	"applicant_id": int,
       	"applicant_name": string,
       	"profileAppliedFor": {
       		"fullstack": boolean,
       		"backend": boolean,
       		"frontend": boolean
       	}
   }
  ```
      
   - ***Content***: `{<applicant_object>}`
   
  ### POST /newApplication
  
  Creates new application for different companies for the same user
  - ***URL params***
       
     None
       
  - ***Headers*** 
       
     Content-Type: application/json
        
  - ***Data Params***
        
   ```
   {
       "company_id": int,
       "applicant_id": int,
       "applicant_name": string,
       "profileAppliedFor": {
          	"fullstack": boolean,
          	"backend": boolean,
            "frontend": boolean
       }
   }
  ```
        
  - ***Content***: `{<applicant_object>}`

  ### GET /companiesList/:applicant_id
  
  Fetches details of the companies in which the applicant has applied
  
  - ***URL params***
         
    Required: applicant_id=[integer]
          
  - ***Content***: `{<application_object>}`
   
  ### GET /applicantsList/:companyId
  
  Fetches details of the applicants who have applied for profiles given for a company
  
  - ***URL params***
           
     Required: applicant_id=[integer]
            
  - ***Content***: `{<application_object>}`
  