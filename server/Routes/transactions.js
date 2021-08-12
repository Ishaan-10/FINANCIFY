const express = require('express');
const { isLoggedIn } = require('../middlewares');
const router = express.Router();
const User = require('../Models/User')
const Wallet = require('../Models/Wallet')

// read
// Need to update the total amount spend as well
router.get('/', async (req, res) => {

    try {
        const { _id } = req.user;
        const userData = await User.findById(_id).populate('wallet')
        res.status(200).json(userData.wallet.transactions)
    }
    catch (e) {
        res.status(400).json({ "error": e.message })
    }

})

// add
router.post('/', async (req, res) => {

    const { name, category, amount, date, paymentMode } = req.body;
    const newTransaction = { name, category, amount, date, paymentMode };
    const { _id } = req.user;
    const userData = await User.findById(_id).populate('wallet')
    const userWallet = await Wallet.findById(userData.wallet._id);
    userWallet.transactions.push(newTransaction)
    userWallet.amountSpent += parseInt(amount)
    await userWallet.save()
    res.send(await User.findById(_id).populate('wallet'))

})

// delete
router.delete('/', async (req, res) => {

    try {

        const { transaction_id } = req.body;
        const { _id } = req.user;
        const userData = await User.findById(_id).populate('wallet')
        const userWallet = await Wallet.findById(userData.wallet._id);
        const newWalletdata = await Wallet.findByIdAndUpdate(userData.wallet._id, { $pull: { transactions: { _id: transaction_id } } });
        res.status(200).json({ "message": "successfully deleted" })
    } catch (e) {
        res.status(400).json({ "error": e.message })
    }
})

// modify
router.put('/', async (req, res) => {

    const { name, category, amount, date, paymentMode, transaction_id, wallet_id } = req.body;
    const userWallet = await Wallet.findById(wallet_id);


})

module.exports = router;