const express = require('express');
const router = express.Router();
const Foods = require('../Models/Foods.js')


// GET
router.get('/', (req, res) => {
    Foods.find(
        {},
        (err, foundFood) => {
            res.json(foundFood)
        }
    )
})

// ADD
router.post('/', (req, res) => {
    Foods.create(
        req.body,
        (error, newFood) => {
            res.json(newFood)
        }
    )
})

// EDIT
router.put('/:id', (req, res) => {
    Foods.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, useFindAndModify: false},
        (error, editedFood) => {
            res.json(editedFood)
        }
    )
})

// DELETE
router.delete('/:id', (req, res) => {
    Foods.findByIdAndDelete(
        req.params.id,
        (error, deletedFood) => {
            res.json(deletedFood)
        }
    )
})


module.exports = router