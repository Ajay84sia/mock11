const mongoose = require('mongoose');

const emiSchema = mongoose.Schema({
    LoanAmount: { type: Number, required: true },
    InterestRate: { type: Number, required: true },
    Tenure: { type: Number, required: true },
}, {
    versionKey: false,
})

const EmiModel = mongoose.model('emi', emiSchema)

module.exports = {
    EmiModel
}