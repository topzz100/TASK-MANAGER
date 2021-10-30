const express = require('express')
const { getAllTasks, addTask, getTask, deleteTask, updateTask } = require('../controller/tasks')
const router = express.Router()
// const Task = require('../database/models/task')


// router.get('/', (req, res) => {
//   res.status(200).send('this is it')
// })
router.get('/', getAllTasks).post('/', addTask)
router.get('/:id', getTask).delete('/:id', deleteTask).patch('/:id', updateTask)
module.exports = router