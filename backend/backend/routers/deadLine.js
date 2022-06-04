const router = require('express').Router();
let deadline_model = require('../models/deadline');
const timestamp = require('time-stamp');


router.route('/addDeadLine').post((req,res) => {
   
        const title  = req.body.title;
        const deadLineDateTime  = req.body.deadLineDateTime;
        const submissionType  = req.body.submissionType;
        const description  = req.body.description;
        const FileName  = req.body.FileName;
        const status = "Active";

        const saveDeadLine = new deadline_model({title, deadLineDateTime, description, FileName, status,submissionType});
        
        saveDeadLine.save()
        .then(() => {            
            res.status(200).send({status :"Deadline Saving Success"});    
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send({status: "Error with Updating Data",error: err.message});
        }); 

});


router.route("/oneDeadLine/:id").get((req,res) => {
    deadline_model.find({_id : req.params.id}).then((MarkingSchema) => {
        res.json(MarkingSchema);
    }).catch((err) => {
        console.log(err);
    });
});  

router.route("/AllDeadLine").get((req,res) => {
    deadline_model.find().then((DeadLine) => {
        res.json(DeadLine);
    }).catch((err) => {
        console.log(err);
    });
});   

router.route("/OnlyPresentationDeadLine").get((req,res) => {
    deadline_model.find({submissionType:'Presentation'}).then((DeadLine) => {
        res.json(DeadLine);
    }).catch((err) => {
        console.log(err);
    });
});   


router.route('/updateDeadLine').put((req, res)=>{
    const id = req.body.id;   
    const status = req.body.status;

    const updateDeadLine={status}
    deadline_model.findByIdAndUpdate(id,updateMarkingSchema).then(() => {        
        res.status(200).send({status :"Updating success"});
    }).catch((err) => {
        console.log(err);
        res.status(400).send({status: "Error with Updating Data",error: err.message});
    });     
});

router.route("/deleteDeadLine/:ID").delete(async (req, res) => {
    var ID = req.params.ID; 
    deadline_model.findByIdAndDelete(ID)
    .then(() => {
        res.status(200).send({status :"DeadLine Deleted"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with Deleting Data",error: err.message});
    });
});

module.exports = router;