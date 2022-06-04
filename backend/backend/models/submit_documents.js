const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSubmitDocuments = new Schema({
    groupNumber: {
        type: String,
        required: true,
    },

    

    file: {
        type: String,
        required: true,
    },
    
    submissionID: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        required: true,
    },

    submitDateType: {
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
});
const user_SubmitDocuments = mongoose.model('submit_documents', userSubmitDocuments);
module.exports = user_SubmitDocuments;