// const express = require('express')
const Task = require('../database/models/task')


const getAllTasks = async(req, res) => {
  const tasks = await Task.find()
  res.status(200).send(tasks)
}
const addTask = async(req, res) => {
 const task = await Task.create(req.body)
 res.status(200).json(task)
}
const getTask = (req, res) => {

}
const deleteTask = (req, res) => {
  
const task =Task.findOneAndDelete({_id : req.params.id})
res.status(200).send(req.params.id)
}
const updateTask = (req, res) => {

}



module.exports = {
  getAllTasks,
  addTask,
  getTask,
  deleteTask,
  updateTask
}