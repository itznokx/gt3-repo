function novaTarefa () {
    overlay.classList.add("active")
}

function closeFormPopup () {
    overlay.classList.remove("active")
    criarTarefa.classList.remove("active")
}
function submitPopupForm (){
    event.preventDefault()
    window.alert("Tarefa Criada")
    closeFormPopup()
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
    if (!taskList) return;

    taskList.innerHTML = "";

    if (listadetarefas && listadetarefas.length > 0) {
        listadetarefas.forEach(task => {
            taskList.innerHTML += `
                <div class="task-div">
                    <h4 class="task-title">${task.title}</h4>
                    <p class="task-description">${task.description}</p>
                    <div class="task-actions">
                        <i class="bx bx-trash"></i>
                    </div>
                </div>
            `;
        });
    }
}

searchTasks();