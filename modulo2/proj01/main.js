function openPopupForm() {
    overlay.classList.add("active")
}



function closeFormPopup () {
    overlay.classList.remove("active")
} 
function fetchTasks() {
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
        console.log(task)
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
    fetchTasks()
}
function deleteTask(id){
    fetch(`http://localhost:3000/tasks/${id}`,{
        method: "DELETE",

    })
    .then( res=> res.json())
    .then( res=>{
        fetchTasks()
        console.log(`Tarefa ${id} deletada com sucesso`)
    })
}
function searchTask(){
    let taskList = document.querySelectorAll("div.task-div");
    console.log (taskList)
    if (search_bar_header.value.length > 0 ){
        taskList.forEach( task => {
            if (!task.children[0].innerText.includes(search_bar_header.value)){
                task.style.display = "none";
            }
            else {
                task.style.display = "initial";
            }
        })
    }
    else {
        taskList.forEach ( task=> {
            task.style.display = "flex"
        })
    }
}
fetchTasks();