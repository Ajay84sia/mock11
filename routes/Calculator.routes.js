const express = require("express");

const { EmiModel } = require("../model/Calculator.model")


const emiRouter = express.Router();


emiRouter.post("/emi", async (req, res) => {
    const { LoanAmount, InterestRate, Tenure } = req.body;
    try {
        const rate = ((InterestRate / 12) / 100)

        const emi = Math.round((LoanAmount * rate * (1 + rate) ** Tenure) / (((1 + rate) ** Tenure) - 1));

        const totalPayment = emi * Tenure

        const interestPayable = totalPayment - LoanAmount

        res.status(200).send({ "emi": emi, "interestPayable": interestPayable, "totalPayment": totalPayment })

    } catch (error) {
        res.status(400).send({ "err": error.message })
    }
})


module.exports = {
    emiRouter
}