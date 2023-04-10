const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deadLineRegSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    deadLineDateTime: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    FileName: {
        type: String,
    },

    submissionType: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        required: true,
    },

    
    
});
const deadLine_Schema = mongoose.model('deadLine', deadLineRegSchema);
module.exports = deadLine_Schema;



