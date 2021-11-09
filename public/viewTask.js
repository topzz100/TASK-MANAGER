// const task = require("../database/models/task");

const taskItems = document.querySelector('.task-items');
const click = document.querySelector('.click')
const taskList = document.querySelector('.task-list')


const getAllTask = async() => {
  try{

     const result = await fetch('http://localhost:5500/api/v1/tasks')
  const tasks = await result.json()
  return tasks
// console.log(tasks)
//  const allTask = tasks.map(task => {
//     const {title, completed} = task
//     return `
//        <li>
//           <span>${title}</span> 
//           <span class ed-del>
//             <a href=""><i class="fas fa-edit"></i></a>
//             <a href=""><i class="far fa-trash-alt"></i></i></a>

//           </span>
//         </li>
//     `
//   }).join("")
//   taskList.innerHTML = allTask
//   console.log(tasks)

  }catch(error){
    return `<h2> there is an error somewhere</h2>`
  }
} 

 const showAll = async() => {
   try{
     const tasks = await getAllTask()
    
   const allTask = tasks.map(task => {
    
     return `
       <li>
          <span>${task.title}</span> 
           <span class ed-del>
             <a href="./editTask.html"><i class="fas fa-edit"></i></a>
             <a href=""><i class="far fa-trash-alt"></i></i></a>

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
 



