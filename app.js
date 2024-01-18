function addTask() {
    var newTaskInput = document.getElementById('newTask');
    var taskText = newTaskInput.value.trim();

    if (taskText !== '') {
        var todoList = document.getElementById('todoList');

        var newTask = document.createElement('div');
        newTask.className = 'todo-item';
        newTask.innerHTML = `
            <div class="done-circle"></div>
            <div class="todo-item-text">${taskText}</div>
        `;

        newTask.addEventListener('click', function () {
            this.classList.toggle('done');
            var doneCircle = this.querySelector('.done-circle');
            doneCircle.classList.toggle('done');
        });

        todoList.appendChild(newTask);

        newTaskInput.value = ''; 
    }
}

function addTaskOnEnter(event) {
    if (event.key === 'Enter') {
        addTask();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var doneCircles = document.querySelectorAll('.done-circle');

    doneCircles.forEach(function (circle) {
        circle.addEventListener('click', function () {
            this.classList.toggle('done');
            var todoItem = this.closest('.todo-item');
            todoItem.classList.toggle('done');
        });
    });
});