let database = [];

const newTask = (description, status) =>{
    const task = document.createElement('li');
    task.classList.add('task-item');
    task.innerHTML = `
        <input type="checkbox" ${status}>
        <div>${description}</div>`;
    document.getElementById('tasks-list').appendChild(task);
}

const clean = () =>{
    const taskslist = document.getElementById('tasks-list');
    while(taskslist.firstChild){
        taskslist.removeChild(taskslist.lastChild);
    }
}

const reload = () =>{
    clean();
    database.forEach(task => newTask(task.description, task.status));
}

const addTask = (event) =>{
    event.preventDefault();
    const description = document.getElementById('input').value;
    database.push({'description': description, 'status': ''});
    reload();
    document.getElementById('input').value = '';
    document.getElementsByName('tasks-form').reset();
}

document.getElementById('submission').addEventListener('click', addTask);