
const form = document.querySelector('.task-form') as HTMLFormElement;

const title = document.querySelector('#title') as HTMLInputElement;

const description = document.querySelector('#description') as HTMLInputElement;

const assignedUser = document.querySelector('#assigned-user') as HTMLInputElement;

const div = document.querySelector('#task');
const ul = document.createElement('ul');
let att = document.createAttribute("class");
att.value = "display";
ul.setAttributeNode(att);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  
    let TaskData = {
        title: title.value,
        description: description.value,
        assignedUser: assignedUser.value
    }

    ul.innerHTML = `
       <li><b>Title</b>: ${TaskData.title}</li>
       <li>Description: ${TaskData.description}</li>
       <li>Assigned User: ${TaskData.assignedUser}</li>
    `
    div?.appendChild(ul);
    console.log(TaskData);
    
});



