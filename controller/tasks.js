// const express = require('express')
const Task = require('../database/models/task')


const getAllTasks = async(req, res) => {
  const tasks = await Task.find()
  res.status(200).send(tasks)
}
const addTask = (req, res) => {
 const task = Task.create(req.body)
 res.status(200).send(task)
}
const getTask = (req, res) => {

}
const deleteTask = (req, res) => {

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