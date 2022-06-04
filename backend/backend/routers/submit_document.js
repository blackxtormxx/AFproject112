

const router = require('express').Router();
let submit_doc_model = require('../models/submit_documents');
const timestamp = require('time-stamp');


router.route('/addFiles').post((req,res) => {

        const groupNumber  = req.body.groupNumber;
      
        const submissionID  = req.body.submissionID;
        const file  = req.body.file;
        const status = "Submitted";
        const submitDateType  = timestamp('YYYY/MM/DD HH:mm:ss');

        const saveDoc = new submit_doc_model({groupNumber  , file , submissionID , status , submitDateType});
        
        saveDoc.save()
        .then(() => {            
            res.status(200).send({status :"Document Submitting Success"});    
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send({status: "Error with Updating Data",error: err.message});
        }); 
});

router.route('/addMarksForSubmmitedDocs').put((req, res)=>{
    const id = req.body.id;   
    const status = "Marks Added";
    const marks = req.body.marks; 
    const passStatus = req.body.passStatus; 
    const remark = req.body.remark;     
   
    const addMarks={status, marks, passStatus, remark}
    submit_doc_model.findByIdAndUpdate(id,addMarks).then(() => {        
        res.status(200).send({status :"Updating success"});
    }).catch((err) => {
        console.log(err);
        res.status(400).send({status: "Error with Updating Data",error: err.message});
    });     
});

router.route("/viewFile/:id").get((req,res) => {

    const groupNumber  = req.params.id;
    submit_doc_model.find({groupNumber : groupNumber}).then((documents) => {
        res.json(documents);
    }).catch((err) => {
        console.log(err);
    });
});  

module.exports = router;


