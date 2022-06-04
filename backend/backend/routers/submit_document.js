

const router = require('express').Router();
let submit_doc_model = require('../models/submit_documents');
const timestamp = require('time-stamp');


router.route('/addMarksSchema').post((req,res) => {

        const groupNumber  = req.body.groupNumber;
        const supervisor  = req.body.supervisor;
        const coSupervisor  = req.body.coSupervisor;
        const submissionID  = req.body.submissionID;
        const file  = req.body.file;
        const status = "Submitted";
        const submitDateType  = timestamp('YYYY/MM/DD HH:mm:ss');

        const saveDoc = new submit_doc_model({groupNumber , supervisor , coSupervisor , file , submissionID , status , submitDateType});
        
        saveDoc.save()
        .then(() => {            
            res.status(200).send({status :"Document Submitting Success"});    
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send({status: "Error with Updating Data",error: err.message});
        }); 
});

module.exports = router;


