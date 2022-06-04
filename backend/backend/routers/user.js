const router = require('express').Router();
let user_model = require('../models/user');
const bcrypt = require('bcryptjs');


router.route('/login').post((req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;

    user_model.findOne({$or: [{username:username}]})
    .then(systemreg =>{
        if(systemreg){
                bcrypt.compare(password, systemreg.password, function(err, result){
                    if(err){
                        res.json({
                            error:err
                        })
                    }

                    if(result){
                        user_model.find({username:username})
                        .then(UserSearch => res.json({
                            message:UserSearch[0].userType,
                        }))
                        .catch(err => res.status(400). res.json({
                            message:false,
                        }))    
                    }else{
                        console.log(err);
                         res.json({
                            message: false
                        })    
                    }
                })

        }else{
            res.json({
                message: false
            })
        }
    })
});

module.exports = router;