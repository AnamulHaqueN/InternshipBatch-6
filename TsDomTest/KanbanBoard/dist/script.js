const showFormBtn = document.getElementById('show-form-btn');
const form = document.querySelector('.task-form');
const div = document.querySelector('#task');
showFormBtn.addEventListener('click', () => {
    if (form.style.display === "none") {
        form.style.display = "block";
        showFormBtn.style.display = "none";
    }
});
window.deleteTask = (index) => {
    const tasks = JSON.parse(localStorage.getItem('formData') || '[]');
    tasks.splice(index, 1);
    localStorage.setItem('formData', JSON.stringify(tasks));
    displayData();
};
function displayData() {
    const stroreData = JSON.parse(localStorage.getItem('formData') || '[]');
    if (stroreData.length === 0) {
        div.innerHTML = `<p> No data is found </p>`;
        return;
    }
    div.innerHTML = stroreData.map((item, index) => `
       <p><b>Title: </b> ${item.title}</p>
       <p>Description: ${item.description}</p>
       <p>Assigned User: ${item.assignUser}</p>
       <button onclick="deleteTask(${index})">Delete</button>
       <hr>
    `)
        .join("");
}
displayData();
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const assignUser = document.querySelector('#assigned-user').value;
    const data = {
        title: title,
        description: description,
        assignUser: assignUser
    };
    const getTask = JSON.parse(localStorage.getItem('formData') || '[]');
    getTask.push(data);
    localStorage.setItem("formData", JSON.stringify(getTask));
    displayData();
    form.style.display = "none";
    showFormBtn.style.display = "block";
});
export {};
//# sourceMappingURL=script.js.map