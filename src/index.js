document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  const createTask = document.getElementById('create-task-form')
  createTask.addEventListener('submit', (event) => {
    event.preventDefault();
    const newTask = document.getElementById('new-task-description')
    console.log(newTask)
    const userInput = newTask.value
    const task = document.getElementById('tasks')
    const li = document.createElement('li')
   li.innerHTML = userInput;
   li.addEventListener('click', () => li.remove())
    task.appendChild(li)
    
  })
  
});

//capture users info 
//click button 
//create an li 
//put users info in li
//put li inside task ul


//document.addEventListener('click', 'addTask')
