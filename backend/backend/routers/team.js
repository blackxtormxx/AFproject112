

const router = require('express').Router();
let team_model = require('../models/team');
let user_model = require('../models/user');
const bcrypt = require('bcryptjs');
const timestamp = require('time-stamp');

router.route('/submit_topic').put((req,res) => {
    const id = req.body.username;   
    const researchTopic = req.body.researchTopic;
    const researchCategory = req.body.researchCategory;
    const researchSupervisor = req.body.researchSupervisor;
    const researchCoSupervisor = req.body.researchCoSupervisor;
    const description = req.body.description;
    const topicStatus = "Submitted";

    const submitTopic={researchTopic, researchCategory, researchSupervisor, researchCoSupervisor, topicStatus ,description}
    team_model.findOneAndUpdate({groupId:id},submitTopic).then(() => {        
        res.status(200).send({status :"Topic submitted."});
    }).catch((err) => {
        console.log(err);
        res.status(400).send({status: "Error with Updating Data",error: err.message});
    }); 
});

router.route('/topicReSubmit').put((req,res) => {
    const id = req.body.username;   
    const researchTopic = req.body.ReTopic;
    const description = req.body.Description;
    const topicStatus = "Re-Submitted";

    const submitTopic={researchTopic, topicStatus ,description}
    team_model.findOneAndUpdate({groupId:id},submitTopic).then(() => {        
        res.status(200).send({status :"Topic re-submitted."});
    }).catch((err) => {
        console.log(err);
        res.status(400).send({status: "Error with Updating Data",error: err.message});
    }); 
});

router.route('/updateTopic').put((req,res) => {
    const id = req.body.id;   
    const topicStatus = req.body.topicStatus;   

    const submitTopic={topicStatus}
    team_model.findByIdAndUpdate(id,submitTopic).then(() => {        
        res.status(200).send({status :"Topic "+topicStatus});
    }).catch((err) => {
        console.log(err);
        res.status(400).send({status: "Error with Updating Data",error: err.message});
    }); 
});

router.route('/submitEvolution').put((req,res) => {
    const id = req.body.id;   
    const evolution = req.body.description;   

    const updateTeam={evolution}
    team_model.findOneAndUpdate({groupId:id},updateTeam).then(() => {        
        res.status(200).send({status :"Evolution submitted"});
    }).catch((err) => {
        console.log(err);
        res.status(400).send({status: "Error with Updating Data",error: err.message});
    }); 
});
router.route('/updatePanel').put((req,res) => {
    const id = req.body.id;   
    const panelId = req.body.panelId;   

    const updatePanel={panelId}
    team_model.findOneAndUpdate({groupId:id},updatePanel).then(() => {        
        res.status(200).send({status :"Panel is "+panelId});
    }).catch((err) => {
        console.log(err);
        res.status(400).send({status: "Error with Updating Data",error: err.message});
    }); 
});

router.route('/team_registration').post((req,res) => {
    bcrypt.hash(req.body.groupPassword, 10,function(err,hashedPass){
        if(err){
            res.json({
                error:err
            })
        }

        const groupId  = req.body.groupId;
        const groupPassword  = hashedPass;
        const mem_one_name = req.body.mem_one_name;
        const mem_one_tel = req.body.mem_one_tel;
        const mem_one_email = req.body.mem_one_email;
        const mem_one_regNum = req.body.mem_one_reg;
        const mem_one_specialize = req.body.mem_one_specialize;
        const mem_two_name = req.body.mem_two_name;
        const mem_two_tel = req.body.mem_two_tel;
        const mem_two_email = req.body.mem_two_email;
        const mem_two_regNum = req.body.mem_two_regNum;
        const mem_two_specialize = req.body.mem_two_specialize;
        const mem_three_name = req.body.mem_three_name;
        const mem_three_tel = req.body.mem_three_tel;
        const mem_three_email = req.body.mem_three_email;
        const mem_three_regNum = req.body.mem_three_regNum;
        const mem_three_specialize = req.body.mem_three_specialize;
        const mem_four_name = req.body.mem_four_name;
        const mem_four_tel = req.body.mem_four_tel;
        const mem_four_email = req.body.mem_four_email;
        const mem_four_regNum = req.body.mem_four_regNum;
        const mem_four_specialize = req.body.mem_four_specialize;
        const status = "Active";
        const topicStatus = "Not Submit";
        const panelId = "Not Yet";
        

        const username = groupId;
        const password = hashedPass;
        const userType = "Team";

        const saveInTeamCollection = new team_model({ groupId, groupPassword, mem_one_name, mem_one_tel, mem_one_email, mem_one_regNum, mem_one_specialize, mem_two_name, mem_two_tel, mem_two_email, mem_two_regNum, mem_two_specialize, mem_three_name, mem_three_tel, mem_three_email, mem_three_regNum, mem_three_specialize, mem_four_name, mem_four_tel, mem_four_email, mem_four_regNum, mem_four_specialize,status,topicStatus,panelId});
        const saveInUserCollection = new user_model({ status, username, password, userType});
        
        saveInTeamCollection.save()
        .then(() => {       
            saveInUserCollection.save().then(() => {         
                res.status(200).send({status :"Team Registration Success"});    
            }).catch((err) => {
                console.log(err);
                res.status(400).send({status: "Error with Updating Data",error: err.message});
            }); 
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send({status: "Error with Updating Data",error: err.message});
        }); 
    }); 
});

router.route("/allTeam").get((req,res) => {
    team_model.find().then((staff) => {
        res.json(staff);
    }).catch((err) => {
        console.log(err);
    });
});  

router.route("/allTeamForYou/:username").get((req,res) => {
    team_model.find({$or: [{researchSupervisor:  req.params.username },{researchCoSupervisor:  req.params.username }]}).then((staff) => {
        res.json(staff);
    }).catch((err) => {
        console.log(err);
    });
});   

router.route("/OneTeam/:id").get((req,res) => {

    const groupId  = req.params.id;
    team_model.find({groupId : groupId}).then((team) => {
        res.json(team);
    }).catch((err) => {
        console.log(err);
    });
});    

router.route("/OneTeamFromPanelId/:id").get((req,res) => {

    const panelID  = req.params.id;
    team_model.find({panelId : panelID}).then((team) => {
        res.json(team);
    }).catch((err) => {
        console.log(err);
    });
});  

module.exports = router;