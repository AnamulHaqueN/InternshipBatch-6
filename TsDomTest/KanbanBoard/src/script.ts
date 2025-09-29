
const form = document.querySelector('.task-form') as HTMLFormElement;

const title = document.querySelector('#title') as HTMLInputElement;

const description = document.querySelector('#description') as HTMLInputElement;

const assignedUser = document.querySelector('#assigned-user') as HTMLInputElement;

const div = document.querySelector('#task');

let taskArr = [];

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
    const ul = document.createElement('ul');
    let att = document.createAttribute("class");
    att.value = "display";
    ul.setAttributeNode(att);
    let TaskData = {
        title: title.value,
        description: description.value,
        assignedUser: assignedUser.value
    }
    
    taskArr.push(TaskData);
    localStorage.setItem('taskArr', JSON.stringify(taskArr));
    alert('Form data saved to localStorage!');
    
    const getTask = localStorage.getItem("taskArr");

    ul.innerHTML = `
       <li><b>Title</b>: ${TaskData.title}</li>
       <li>Description: ${TaskData.description}</li>
       <li>Assigned User: ${TaskData.assignedUser}</li>
       <button id="start-task">start task</button>
    `
    div?.appendChild(ul);
    //console.log(TaskData);
    
});
const getTask = localStorage.getItem("taskArr");
console.log(getTask);





