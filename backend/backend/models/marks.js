const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const marksAddingSchema = new Schema({
    groupID: {
        type: String,
        required: true,
    },

    staffID: {
        type: String,
        required: true,
    },

    submissionTitle : {
        type: String,
        required: true,
    },

    deadLineID: {
        type: String,
        required: true,
    },

    marks: {
        type: String,
        required: true,
    },

    
    passStatus: {
        type: String,
        required: true,
    },

    remark: {
        type: String,
        required: true,
    },

    dateTime: {
        type: String,
        required: true,
    },
  
});
const marks_regSchema = mongoose.model('marks', marksAddingSchema);
module.exports = marks_regSchema;