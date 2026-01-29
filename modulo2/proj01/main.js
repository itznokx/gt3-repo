function novaTarefa () {
    overlay.classList.add("active")
}

function closeFormPopup () {
    overlay.classList.remove("active")
    criarTarefa.classList.remove("active")
}
function submitPopupForm (){
    window.alert("Tarefa Criada")
    closeFormPopup()
}
function searchTasks(){
    fetch("http://localhost:3000/tarefas")
    .then(res => res.json())
    .then(res => {

    })
}
function inserirTarefas(listadetarefas){
    if (listadetarefas.length > 0){
        const taskList = document.getElementById("task-section-main");
        listadetarefas.map (task=> {
            taskList.appendChild(`
                <div class="task-div">
                    <h4 class="task-title">${task.title}</h4>
                    <p class="task-description">${task.descricao}
                    </p>
                    <div class="task-actions">
                        <i class="bx bx-trash"></i>
                    </div>
                </div>
                `)
        })
    }
}