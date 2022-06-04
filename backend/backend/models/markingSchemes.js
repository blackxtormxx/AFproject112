const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const markingSchemesReg = new Schema({
    title: {
        type: String,
        required: true,
    },

    markingSchema: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        required: true,
    },

  
});
const marking_SchemesReg = mongoose.model('markingSchemes', markingSchemesReg);
module.exports = marking_SchemesReg;