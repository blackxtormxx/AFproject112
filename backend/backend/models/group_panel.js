const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const panelRegSchema = new Schema({
    groupId: {
        type: String,
        required: true,
        unique: true,
    },

    memberOne: {
        type: String,
        required: true,
        unique: true,
    },

    memberTwo: {
        type: String,
        required: true,
        unique: true,
    },

    memberThree: {
        type: String,
        required: true,
        unique: true,
    },

    
    Specialize : {
        type: String,
        required: true,
    },

    status: {
        type: String,
        required: true,
    },
  
});
const panel_Schema = mongoose.model('panel', panelRegSchema);
module.exports = panel_Schema;