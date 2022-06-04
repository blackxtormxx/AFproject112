const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const system_group_reg_Schema = new Schema({
    groupId: {type: String,required: true,unique: true},
    groupPassword: {type: String,required: true},
    mem_one_name: {type: String,required: true},
    mem_one_tel: {type: String,required: true},
    mem_one_email: {type: String, required: true},
    mem_one_regNum: {type: String, required: true},
    mem_one_specialize: {type: String, required: true},

    mem_two_name: {type: String,required: true},
    mem_two_tel: {type: String,required: true},
    mem_two_email: {type: String, required: true},
    mem_two_regNum: {type: String, required: true},
    mem_two_specialize: {type: String, required: true},

    mem_three_name: {type: String,required: true},
    mem_three_tel: {type: String,required: true},
    mem_three_email: {type: String, required: true},
    mem_three_regNum: {type: String, required: true},
    mem_three_specialize: {type: String, required: true},

    mem_four_name: {type: String,required: true},
    mem_four_tel: {type: String,required: true},
    mem_four_email: {type: String, required: true},
    mem_four_regNum: {type: String, required: true},
    mem_four_specialize: {type: String, required: true},
    
    researchTopic: {type: String},
    researchCategory: {type: String},
    researchSupervisor: {type: String},
    researchCoSupervisor: {type: String},
    panelId: {type: String, required: true},
    
    description: {type: String},
    
    status: {type: String, required: true},
    topicStatus: {type: String},
    
    evolution: {type: String},
    
}, {
timestamps: true
});
const system_group_regSchema = mongoose.model('group_reg', system_group_reg_Schema);
module.exports = system_group_regSchema;