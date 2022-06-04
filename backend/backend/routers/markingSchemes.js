

const router = require('express').Router();
let markingSchemes_model = require('../models/markingSchemes');
const timestamp = require('time-stamp');


router.route('/addMarkingSchema').post((req,res) => {
   
        const title  = req.body.title;
        const markingSchema  = req.body.description;
        const status = "Active";

        const saveMarkingSchema = new markingSchemes_model({title, markingSchema, status});
        
        saveMarkingSchema.save()
        .then(() => {            
            res.status(200).send({status :"Adding Success"});    
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send({status: "Error with Updating Data",error: err.message});
        }); 

});




router.route("/AllMarkingSchema").get((req,res) => {
    markingSchemes_model.find().then((MarkingSchema) => {
        res.json(MarkingSchema);
    }).catch((err) => {
        console.log(err);
    });
});   

router.route("/oneMarkingSchema/:id").get((req,res) => {
    markingSchemes_model.find({_id : req.params.id}).then((MarkingSchema) => {
        res.json(MarkingSchema);
    }).catch((err) => {
        console.log(err);
    });
}); 

router.route('/updateMarkingSchema').put((req, res)=>{
    const id = req.body.id;   
    const status = req.body.status;

    const updateMarkingSchema={status}
    markingSchemes_model.findByIdAndUpdate(id,updateMarkingSchema).then(() => {        
        res.status(200).send({status :"Updating success"});
    }).catch((err) => {
        console.log(err);
        res.status(400).send({status: "Error with Updating Data",error: err.message});
    });     
});

router.route("/deleteMarkingSchema/:ID").delete(async (req, res) => {
    var ID = req.params.ID; 
    markingSchemes_model.findByIdAndDelete(ID)
    .then(() => {
        res.status(200).send({status :"Marking Schema Id Deleted"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with Deleting Data",error: err.message});
    });
});
module.exports = router;