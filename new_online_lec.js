//yeh online lec dom se liya h code

window.onload = function(){
    let newTask = document.getElementById('inputBox')
    let addTask = document.getElementById('addtask')
    let todolist = document.getElementById('todoList')

    addTask.onclick = function(){
        let li = document.createElement('li')
        li.innerText = newTask.value
        let xBtn = document.createElement('button')
        xBtn.innerText = 'x'
        xBtn.onclick = function(){
            event.target.parentElement.remove()
        }
        li.appendChild(xBtn)
        todolist.appendChild(li)
    }
}