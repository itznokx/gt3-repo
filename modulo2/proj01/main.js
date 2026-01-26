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