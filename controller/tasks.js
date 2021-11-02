// const express = require('express')
const Task = require('../database/models/task')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/customError')


const getAllTasks = asyncWrapper(async(req, res) => {
  const tasks = await Task.find()
  res.status(200).send(tasks)
})


const addTask =  asyncWrapper(async(req, res) => {
   const task = await Task.create(req.body)
    res.status(200).json({task})
})
 


const getTask = asyncWrapper(async(req, res) => {
  const task = await Task.findOne({_id : req.params.id})
  if (!task) {
  return next(createCustomError(`No task with id : ${taskID}`, 404))
  }

  res.status(200).json({ task })  
}) 

const deleteTask = asyncWrapper(async(req, res) => {
  const task = await Task.findOneAndDelete({_id :  req.params.id})
  if (!task) {
  return next(createCustomError(`No task with id : ${taskID}`, 404))
  }

  res.status(200).json({ task })    
})

const updateTask = asyncWrapper(async(req, res) => {
 const task = await Task.findOneAndUpdate({_id: req.params.id}, req.body, {
      new: true,
      runValidators: true
    })
  if (!task) {
  return next(createCustomError(`No task with id : ${taskID}`, 404))
  }

  res.status(200).json({ task })  
})



module.exports = {
  getAllTasks,
  addTask,
  getTask,
  deleteTask,
  updateTask
}