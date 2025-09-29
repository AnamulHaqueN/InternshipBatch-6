const form = document.querySelector('.task-form');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const assignedUser = document.querySelector('#assigned-user');
const div = document.querySelector('#task');
const ul = document.createElement('ul');
let att = document.createAttribute("class");
att.value = "display";
ul.setAttributeNode(att);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let TaskData = {
        title: title.value,
        description: description.value,
        assignedUser: assignedUser.value
    };
    ul.innerHTML = `
       <li><b>Title</b>: ${TaskData.title}</li>
       <li>Description: ${TaskData.description}</li>
       <li>Assigned User: ${TaskData.assignedUser}</li>
    `;
    div === null || div === void 0 ? void 0 : div.appendChild(ul);
    console.log(TaskData);
});
export {};
//# sourceMappingURL=script.js.map