// Elementlarni boshida e'lon qilish
let addBtn = document.getElementById('add-btn');
let newInput = document.getElementById('new-todo');
let list = document.getElementById('list');
let clearBtn = document.getElementById('clear-btn');
let taskCount = document.getElementById('task-count');

addBtn.addEventListener('click', function() {
    let todoText = newInput.value;
    if (todoText === '') return;

    let li = document.createElement('li');
    li.textContent = todoText;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
        li.remove();
        updateTaskCount();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);

    newInput.value = '';
    updateTaskCount();
});

clearBtn.addEventListener('click', function() {
    list.innerHTML = '';
    updateTaskCount();
});

function updateTaskCount() {
    let count = list.children.length;
    taskCount.textContent = `You have ${count} pending tasks`;
}
