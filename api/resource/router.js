const express = require('express');
const Resource = require('./model');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resource.getAll();
        res.status(200).json(resources)
    } catch (error) {
        next(error);
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newResource = await Resource.insert(req.body);
        res.status(201).json(newResource);
    } catch (error) {
        next(error);
    }
})

router.use((err, req, res) => {
    res.status(500).json({
        info: 'There is a problem',
        message: err.message,
        stack: err.stack
    });
});

module.exports = router;
