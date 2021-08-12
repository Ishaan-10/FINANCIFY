const express = require('express');
const router = express.Router();
const Goal = require('../Models/Goals')
const User = require('../Models/User')

router.get('/', async (req, res) => {
    try {
        const { _id } = req.user;
        const userData = await User.findById(_id).populate('goals');
        res.status(200).json(userData.goals);
    }
    catch (e) {
        res.status(400).json({ "error": e.message })
    }
})

// create
router.post('/', async (req, res) => {
    const { goal, targetAmount, currentAmount, endDate, completed } = req.body;
    const newGoal = new Goal({ goal, targetAmount, currentAmount, endDate, completed });
    const { _id } = req.user;
    const userData = await User.findById(_id);
    userData.goals.push(newGoal);
    await newGoal.save();
    await userData.save();
    console.log(userData);
    res.send(newGoal);

})

// delete
router.delete('/', async (req, res) => {

    try {
        const { _id } = req.user;
        const { goals_id } = req.body;
        await User.findByIdAndUpdate(_id, { $pull: { goals: goals_id } });
        await Goal.findByIdAndDelete(goals_id);
        res.status(200).json({ "message": "successfully deleted" })

    } catch (e) {
        res.status(400).json({ "error": e.message })
    }

})

// update
router.put('/', async (req, res) => {
    try {
        const { goals_id } = req.body;
        const { goal, targetAmount, currentAmount, endDate, completed } = req.body;
        const updateGoals = await Goal.findByIdAndUpdate(goals_id, { goal, targetAmount, currentAmount, endDate, completed });
        await updateGoals.save();

        res.status(200).json({ "message": "successfully updated" })

    } catch (e) {
        res.status(400).json({ "error": e.message })
    }

})
router.put('/addamount', async (req, res) => {
    try {
        const { goals_id,amountToBeAdded } = req.body;
        const updateGoals = await Goal.findById(goals_id);
        updateGoals.currentAmount+=amountToBeAdded;

        if(updateGoals.currentAmount>=updateGoals.targetAmount){
            updateGoals.currentAmount=updateGoals.targetAmount;
            updateGoals.completed=true;
        }
        await updateGoals.save();

        res.status(200).json({ "message": "successfully updated" })

    } catch (e) {
        res.status(400).json({ "error": e.message })
    }
})

router.put('/completed', async (req, res) => {
    try {
        const { goals_id} = req.body;
        const updateGoals = await Goal.findById(goals_id);
        updateGoals.completed=true;
        updateGoals.currentAmount=updateGoals.targetAmount;
        await updateGoals.save();
        res.status(200).json({ "message": "successfully updated" })

    } catch (e) {
        res.status(400).json({ "error": e.message })
    }
})


module.exports = router;