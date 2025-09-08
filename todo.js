console.log("inicio");
function adicionarTarefa() {
    console.log("Adicionando tarefa...")
    let valorInput = document.querySelector("input").value
    console.log(valorInput)
    let li = document.createElement("li")
    li.innerHTML = valorInput + '</span onclick="deletarTarefa(this)"></span>'
    console.log(li)
    document.querySelector("ul").appendChild(li);   
    valorInput = ""
}    
function deletarTarefa(li) {
    console.log("deletando tarefa...")
    li.parentElement.remove()
}