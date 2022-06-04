

const router = require('express').Router();
let marksSchemes_model = require('../models/marks');
const timestamp = require('time-stamp');


router.route('/addMarksSchema').post((req,res) => {

        const groupID  = req.body.groupID;
        const staffID  = req.body.staffID;
        const submissionTitle  = req.body.submissionTitle;
        const deadLineID  = req.body.deadLineID;
        const marks  = req.body.marks;
        const remark  = req.body.remark;
        const passStatus  = req.body.passStatus;
        const dateTime  = timestamp('YYYY/MM/DD HH:mm:ss');

        const saveMarkingSchema = new marksSchemes_model({groupID, staffID, submissionTitle, deadLineID, marks, remark, dateTime,passStatus});
        
        saveMarkingSchema.save()
        .then(() => {            
            res.status(200).send({status :"Marks Adding Success"});    
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send({status: "Error with Updating Data",error: err.message});
        }); 

});

module.exports = router;


