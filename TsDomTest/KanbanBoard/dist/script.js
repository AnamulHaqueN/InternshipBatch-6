// for login logout 
const logInOut = document.getElementById('logout');
logInOut.addEventListener('click', (e) => {
    e.preventDefault();
    let val = logInOut.getAttribute("value");
    if (val === "logOut") {
        window.location.href = "login.html";
    }
    if (val === "logIn") {
        localStorage.setItem("login", "");
        logInOut.innerHTML = "LogIn";
        logInOut.style.backgroundColor = "green";
        logInOut.setAttribute("value", "logOut");
    }
});
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
window.moveProgress = (index) => {
    const tasks = JSON.parse(localStorage.getItem('formData') || '[]');
    const getTask = JSON.parse(localStorage.getItem('formData2') || '[]');
    getTask.push(tasks[index]);
    localStorage.setItem('formData2', JSON.stringify(getTask));
    tasks.splice(index, 1);
    localStorage.setItem('formData', JSON.stringify(tasks));
    displayData();
    displayData2();
};
window.moveTesting = (index) => {
    const tasks = JSON.parse(localStorage.getItem('formData') || '[]');
    const getTask = JSON.parse(localStorage.getItem('formData3') || '[]');
    getTask.push(tasks[index]);
    localStorage.setItem('formData3', JSON.stringify(getTask));
    tasks.splice(index, 1);
    localStorage.setItem('formData', JSON.stringify(tasks));
    displayData();
    displayData3();
};
window.moveFinished = (index) => {
    const tasks = JSON.parse(localStorage.getItem('formData') || '[]');
    const getTask = JSON.parse(localStorage.getItem('formData4') || '[]');
    getTask.push(tasks[index]);
    localStorage.setItem('formData4', JSON.stringify(getTask));
    tasks.splice(index, 1);
    localStorage.setItem('formData', JSON.stringify(tasks));
    displayData();
    displayData4();
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
       <p>Create By: ${item.createdBy}</p>
       <button onclick="deleteTask(${index})">Delete</button>
       <br>
       <button onclick="moveProgress(${index})">MoveProgress</button>
       <button onclick="moveTesting(${index})">MoveTesting</button>
       <button onclick="moveFinished(${index})">MoveFinished</button>
       <hr><hr>
       <br>
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
        assignUser: assignUser,
        createdBy: JSON.parse(localStorage.getItem('login') || ''),
    };
    const getTask = JSON.parse(localStorage.getItem('formData') || '[]');
    getTask.push(data);
    localStorage.setItem("formData", JSON.stringify(getTask));
    displayData();
    form.style.display = "none";
    showFormBtn.style.display = "block";
});
// for div 2
const showFormBtn2 = document.getElementById('show-form-btn2');
const form2 = document.querySelector('#task-form2');
const div2 = document.querySelector('#task2');
showFormBtn2.addEventListener('click', () => {
    if (form2.style.display === "none") {
        form2.style.display = "block";
        showFormBtn2.style.display = "none";
    }
});
window.deleteTask2 = (index) => {
    const tasks2 = JSON.parse(localStorage.getItem('formData2') || '[]');
    tasks2.splice(index, 1);
    localStorage.setItem('formData2', JSON.stringify(tasks2));
    displayData2();
};
function displayData2() {
    const stroreData = JSON.parse(localStorage.getItem('formData2') || '[]');
    if (stroreData.length === 0) {
        div2.innerHTML = `<p> No data is found </p>`;
        return;
    }
    div2.innerHTML = stroreData.map((item, index) => `
       <p><b>Title: </b> ${item.title}</p>
       <p>Description: ${item.description}</p>
       <p>Assigned User: ${item.assignUser}</p>
       <p>Create By: ${item.createdBy}</p>
       <button onclick="deleteTask2(${index})">Delete</button>
       <hr><hr>
       <br>
    `)
        .join("");
}
displayData2();
form2.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title2').value;
    const description = document.querySelector('#description2').value;
    const assignUser = document.querySelector('#assigned-user2').value;
    const data = {
        title: title,
        description: description,
        assignUser: assignUser,
        createdBy: JSON.parse(localStorage.getItem('login') || ''),
    };
    const getTask = JSON.parse(localStorage.getItem('formData2') || '[]');
    getTask.push(data);
    localStorage.setItem("formData2", JSON.stringify(getTask));
    displayData2();
    form2.style.display = "none";
    showFormBtn2.style.display = "block";
});
// for div 3
const showFormBtn3 = document.getElementById('show-form-btn3');
const form3 = document.querySelector('#task-form3');
const div3 = document.querySelector('#task3');
showFormBtn3.addEventListener('click', () => {
    if (form3.style.display === "none") {
        form3.style.display = "block";
        showFormBtn3.style.display = "none";
    }
});
window.deleteTask3 = (index) => {
    const tasks = JSON.parse(localStorage.getItem('formData3') || '[]');
    tasks.splice(index, 1);
    localStorage.setItem('formData3', JSON.stringify(tasks));
    displayData3();
};
function displayData3() {
    const stroreData = JSON.parse(localStorage.getItem('formData3') || '[]');
    if (stroreData.length === 0) {
        div3.innerHTML = `<p> No data is found </p>`;
        return;
    }
    div3.innerHTML = stroreData.map((item, index) => `
       <p><b>Title: </b> ${item.title}</p>
       <p>Description: ${item.description}</p>
       <p>Assigned User: ${item.assignUser}</p>
       <p>Create By: ${item.createdBy}</p>
       <button onclick="deleteTask3(${index})">Delete</button>
       <hr><hr>
       <br>
    `)
        .join("");
}
displayData3();
form3.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title3').value;
    const description = document.querySelector('#description3').value;
    const assignUser = document.querySelector('#assigned-user3').value;
    const data = {
        title: title,
        description: description,
        assignUser: assignUser,
        createdBy: JSON.parse(localStorage.getItem('login') || ''),
    };
    const getTask = JSON.parse(localStorage.getItem('formData3') || '[]');
    getTask.push(data);
    localStorage.setItem("formData3", JSON.stringify(getTask));
    displayData3();
    form3.style.display = "none";
    showFormBtn3.style.display = "block";
});
// for div 4
const showFormBtn4 = document.getElementById('show-form-btn4');
const form4 = document.querySelector('#task-form4');
const div4 = document.querySelector('#task4');
showFormBtn4.addEventListener('click', () => {
    if (form4.style.display === "none") {
        form4.style.display = "block";
        showFormBtn4.style.display = "none";
    }
});
window.deleteTask4 = (index) => {
    const tasks = JSON.parse(localStorage.getItem('formData4') || '[]');
    tasks.splice(index, 1);
    localStorage.setItem('formData4', JSON.stringify(tasks));
    displayData4();
};
function displayData4() {
    const stroreData = JSON.parse(localStorage.getItem('formData4') || '[]');
    if (stroreData.length === 0) {
        div4.innerHTML = `<p> No data is found </p>`;
        return;
    }
    div4.innerHTML = stroreData.map((item, index) => `
       <p><b>Title: </b> ${item.title}</p>
       <p>Description: ${item.description}</p>
       <p>Assigned User: ${item.assignUser}</p>
       <p>Create By: ${item.createdBy}</p>
       <button onclick="deleteTask4(${index})">Delete</button>
       <hr><hr>
       <br>
    `)
        .join("");
}
displayData4();
form4.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title4').value;
    const description = document.querySelector('#description4').value;
    const assignUser = document.querySelector('#assigned-user4').value;
    const data = {
        title: title,
        description: description,
        assignUser: assignUser,
        createdBy: JSON.parse(localStorage.getItem('login') || ''),
    };
    const getTask = JSON.parse(localStorage.getItem('formData4') || '[]');
    getTask.push(data);
    localStorage.setItem("formData4", JSON.stringify(getTask));
    displayData4();
    form4.style.display = "none";
    showFormBtn4.style.display = "block";
});
export {};
//# sourceMappingURL=script.js.map