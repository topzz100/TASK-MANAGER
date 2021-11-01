// const express = require('express')
const Task = require('../database/models/task')


const getAllTasks = async(req, res) => {
  const tasks = await Task.find()
  res.status(200).send(tasks)
}
const addTask = async(req, res) => {
  try{
    const task = await Task.create(req.body)
    res.status(200).json({task})
  }catch(err){
    console.log(err)
  }
 
}

const getTask = async(req, res) => {
  try{
    const task = await Task.findOne({_id : req.params.id})
    res.status(200).json(task)
  }catch(err){
    res.send(err)
  }
}

const deleteTask = async(req, res) => {  
  try{
    const task = await Task.findOneAndDelete({_id :  req.params.id})
    res.status(200).json({task})
  }catch(err){
    res.send(err)
  }

}

const updateTask = async(req, res) => {
   try{
    const task = await Task.findOneAndUpdate({_id: req.params.id}, req.body, {
      new: true,
      runValidators: true
    })
    res.status(200).json({task})
  }catch(err){
    console.log(err)
  }
}



module.exports = {
  getAllTasks,
  addTask,
  getTask,
  deleteTask,
  updateTask
}