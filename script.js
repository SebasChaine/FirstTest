document.getElementById('add-task').addEventListener('click', function() {
    // Obtiene el texto ingresado en el campo de nueva tarea
    const taskText = document.getElementById('new-task').value;
    const taskType = document.getElementById('task-type').value;

    // Muestra el mensaje de retroalimentación si el campo está vacío
    const feedback = document.getElementById('feedback');
    if (taskText === '') {
        feedback.style.display = 'block';
        return;
    } else {
        feedback.style.display = 'none';
    }

    // Crea un nuevo elemento <li> para la nueva tarea
    const li = document.createElement('li');
    li.classList.add(taskType);

    // Crea un checkbox para marcar la tarea como completada
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        li.classList.toggle('completed', checkbox.checked);
        updateTaskCount();
    });

    // Añade el checkbox como hijo del elemento <li>
    li.appendChild(checkbox);

    // Añade el texto de la tarea al elemento <li>
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    // Crea un botón de eliminar para cada tarea
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        li.remove();
        updateTaskCount();
    });

    // Añade el botón de eliminar como hijo del elemento <li>
    li.appendChild(deleteButton);

    // Añade el elemento <li> creado a la lista de tareas (ul) en el HTML
    document.getElementById('task-list').appendChild(li);

    // Limpia el campo de entrada de nueva tarea después de agregarla
    document.getElementById('new-task').value = '';

    // Actualiza el contador de tareas
    updateTaskCount();
});

function updateTaskCount() {
    const taskList = document.getElementById('task-list');
    const totalTasks = taskList.children.length;
    const pendingTasks = Array.from(taskList.children).filter(li => !li.classList.contains('completed')).length;

    document.getElementById('task-count').textContent = totalTasks;
    document.getElementById('pending-task-count').textContent = pendingTasks;
}
