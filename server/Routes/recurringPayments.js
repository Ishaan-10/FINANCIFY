const express = require('express');
const router = express.Router();
const User = require('../Models/User')
const Wallet = require('../Models/Wallet')

router.get('/', async (req, res) => {

    try {
        const { _id } = req.user;
        const userData = await User.findById(_id).populate('wallet')
        res.json(userData.wallet.recurringPayments)
    }
    catch (e) {
        res.status(400).json({ "error": e.message })
    }


})

// add
router.post('/', async (req, res) => {

    const { name, amount, date, repeatDuration } = req.body;
    const newPayment = { name, amount, date, repeatDuration };
    const { _id } = req.user;
    const userData = await User.findById(_id).populate('wallet')
    const userWallet = await Wallet.findById(userData.wallet._id);
    userWallet.recurringPayments.push(newPayment);
    await userWallet.save()
    res.send(await User.findById(_id).populate('wallet'))

})

// delete
router.delete('/', async (req, res) => {

    try {

        const { rpayment_id } = req.body;
        const { _id } = req.user;
        const userData = await User.findById(_id).populate('wallet')
        const userWallet = await Wallet.findById(userData.wallet._id);
        const newWalletdata = await Wallet.findByIdAndUpdate(userData.wallet._id, { $pull: { recurringPayments: { _id: rpayment_id } } });
        res.status(200).json({ "message": "successfully deleted" })
    } catch (e) {
        res.status(400).json({ "error": e.message })
    }

})

// modify
router.put('/', async (req, res) => {

})


module.exports = router;