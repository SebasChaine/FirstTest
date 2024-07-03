document.getElementById('add-task').addEventListener('click', function() {
    // Escucha el evento de clic en el botón 'Add' y ejecuta la función anónima

    // Obtiene el texto ingresado en el campo de nueva tarea
    const taskText = document.getElementById('new-task').value;

    // Si el campo está vacío, no hace nada
    if (taskText === '') return;

    // Crea un nuevo elemento <li> para la nueva tarea
    const li = document.createElement('li');

    // Crea un checkbox para marcar la tarea como completada
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        li.classList.toggle('completed', checkbox.checked);
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
        li.remove(); // Elimina el elemento <li> al que pertenece este botón
    });

    // Añade el botón de eliminar como hijo del elemento <li>
    li.appendChild(deleteButton);

    // Añade el elemento <li> creado a la lista de tareas (ul) en el HTML
    document.getElementById('task-list').appendChild(li);

    // Limpia el campo de entrada de nueva tarea después de agregarla
    document.getElementById('new-task').value = '';
});
