function openPopupForm() {
    overlay.classList.add("active")
}



function closeFormPopup () {
    overlay.classList.remove("active")
} 
function searchTasks() {
    fetch("http://localhost:3000/tasks")
    .then(res => res.json())
    .then(res => {
        inserirTarefas(res);
    })
    .catch(err => console.log(`Error fetching tasks: ${err}`));
}

function inserirTarefas(listadetarefas) {
    const taskList = document.getElementById("task-section-main");
    taskList.innerHTML = "";
    listadetarefas.map(task => {
        taskList.innerHTML += `
            <div class="task-div">
                <h4 class="task-title">${task.title}</h4>
                <p class="task-description">${task.description}</p>
                <div class="task-actions">
                    <i class="bx bx-trash" onclick="deleteTask('${task.id}')"></i>
                </div>
            </div>
        `;
    });
}
function newTask(){
    event.preventDefault()
    let task = {
        title: form_titulo_input.value,
        description: form_desc_input.value
    }
    fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(task)
    })
    .then(res=> res.json())
    .then(res=> console.log(res))
    closeFormPopup()
    searchTasks()
}
function deleteTask(id){
    fetch(`http://localhost:3000/tasks/${id}`,{
        method: "DELETE",

    })
    .then( res=> res.json())
    .then( res=>{
        searchTasks()
        console.log(`Tarefa ${id} deletada com sucesso`)
    })
}
searchTasks();