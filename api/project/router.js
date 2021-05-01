const express = require('express');
const Project = require('./model');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
      const projects = await Project.getAll();
      res.status(200).json(projects);
  } catch (error) {
      next(error)
  }
});

router.post('/', async (req, res, next) => {
  try {
      const newProject = await Project.insert(req.body);
      res.status(201).json(newProject);
  } catch (error) {
      next(error)
  }
})

router.use((error, req, res) => {
    res.status(500).json({
        message: error.message,
        stack: error.stack
    });
});

module.exports = router;
