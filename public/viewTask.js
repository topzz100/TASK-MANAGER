// const task = require("../database/models/task");

const taskItems = document.querySelector('.task-items');
const click = document.querySelector('.click')
const taskList = document.querySelector('.task-list')
const taskForm = document.querySelector('.task-form')
const taskInput = document.querySelector('.task-input')
const taskEntered = document.querySelector(".task-entered")
const delItem = document.querySelector('.del-item')

//get task
const getAllTask = async() => {
  try{

     const result = await fetch('http://localhost:5500/api/v1/tasks')
  const tasks = await result.json()
  return tasks

  }catch(error){
    return `<h2> there is an error somewhere</h2>`
  }
} 

// show all task
 const showAll = async() => {
   try{
     const tasks = await getAllTask()
    
   const allTask = tasks.map(task => {
       const {title, _id: taskId} = task
     return `
       <li>
          <span>${title}</span> 
           <span class ed-del>
             <a href="./editTask.html"><i class="fas fa-edit"></i></a>
            <button type="button" class="del-item" data-id="${taskId}">
<i class="fas fa-trash"></i>
</button>

           </span>
         </li>
     `
   }).join("")
   taskList.innerHTML = allTask
   }catch(error){
     console.log(error)
   }
  
   
 }
 showAll()


//add task
taskForm.addEventListener('submit', async(e) => {
  e.preventDefault()
  const title = taskInput.value;
  try{
    
   await axios.post('http://localhost:5500/api/v1/tasks', {title})
  await showAll()
  const tasks = await getAllTask()
  const showTask = tasks.filter(task => {
   if( task.title === title){
     return task.title
   }else{
    return  `<span> could not add</span>`
   }
   
  })
  taskEntered.innerHTML = showTask
    taskInput.value = "";
  }catch(err){
    console.log(err)
  }
} )

const addTask = async(value) => {

  try{
    await axios.post('http://localhost:5500/api/v1/tasks', {value})
  }
  catch(err){
    console.log(err)
  }
}

//delete task

delItem.addEventListener('click', async(e) => {
  e.preventDefault()
  try{
    await axios.delete()
  }catch(err){

  }
  
} )

 



