
type FormData = {
  title: string,
  description: string,
  assignUser: string
}

const showFormBtn = document.getElementById('show-form-btn') as HTMLButtonElement;
const form = document.querySelector('.task-form') as HTMLFormElement;

const div = document.querySelector('#task') as HTMLDivElement;

showFormBtn.addEventListener('click', () => {
  if(form.style.display === "none") {
    form.style.display = "block";
    showFormBtn.style.display = "none";
  }
});

(window as any).deleteTask = (index: number) => {
  const tasks: FormData[] = JSON.parse(localStorage.getItem('formData') || '[]');
  tasks.splice(index, 1);
  localStorage.setItem('formData', JSON.stringify(tasks));
  displayData();
};

function displayData() {
  const stroreData: FormData[] = JSON.parse(localStorage.getItem('formData') || '[]');
  if(stroreData.length === 0) {
    div.innerHTML = `<p> No data is found </p>`;
    return;
  }
  div.innerHTML = stroreData.map((item, index) => 
    `
       <p><b>Title: </b> ${item.title}</p>
       <p>Description: ${item.description}</p>
       <p>Assigned User: ${item.assignUser}</p>
       <button onclick="deleteTask(${index})">Delete</button>
       <hr>
    `
  ) 
  .join("");  
}
displayData();

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  const title = (document.querySelector('#title') as HTMLInputElement).value;
  const description = (document.querySelector('#description') as HTMLInputElement).value;
  const assignUser = (document.querySelector('#assigned-user') as HTMLInputElement).value;
  
  const data: FormData = {
    title: title,
    description: description,
    assignUser: assignUser
  }

  const getTask = JSON.parse(localStorage.getItem('formData') || '[]');
  getTask.push(data);

  localStorage.setItem("formData", JSON.stringify(getTask));
  displayData();
  form.style.display = "none";
  showFormBtn.style.display = "block";
  
});





