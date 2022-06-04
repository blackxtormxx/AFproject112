const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },
    
    tel: {
        type: String,
        required: true,
    },

        
    fax: {
        type: String,
        required: true,
    },

            
    eductions: {
        type: String,
        required: true,
    },

    userType: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        required: true,
    },

    Specialize: {
        type: String,
        required: true,
    },

    timeStamp: {
        type: String,
        required: true,
    },

  
});
const staff_regSchema = mongoose.model('staff', staffSchema);
module.exports = staff_regSchema;