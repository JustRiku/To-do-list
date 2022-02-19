document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Por favor, introduce una tarea")
    }
    else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
                <i class="fas fa-trash-alt"></i>
            </button>
            </div>
        `;
        let current_task = document.querySelectorAll('.delete');
        for (let i = 0; i < current_task.length; i++) {
            current_task[i].onclick = function () {
                this.parentNode.remove();
            }
        }
        let tasks = document.querySelectorAll('.task');
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function () {
                this.classList.toggle('completed');
            }
        }
        document.querySelector("#newtask input").value = "";
    }
}
let tasks = document.querySelectorAll('.task');
for (let i = 0; i < tasks.length; i++) {
    tasks[i].onclick = function () {
        this.classList.toggle('completed');
    }
}
let current_task = document.querySelectorAll('.delete');
for (let i = 0; i < current_task.length; i++) {
    current_task[i].onclick = function () {
        this.parentNode.remove();
    }
}