function deletetask(taskItem) {

    const btn = document.createElement('button');
    btn.textContent = "Delete";

    btn.addEventListener('click', function () {
        taskItem.remove(); 
    });

    taskItem.appendChild(btn);

}


function entertask() {
    const taskInput = document.getElementById('searchbtn');
    const taskText = taskInput.value.trim();

    if (taskText === "") return; 

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    deletetask(taskItem);

    const taskList = document.querySelector('.tasklist');
    taskList.appendChild(taskItem);

    taskInput.value = "";
}
