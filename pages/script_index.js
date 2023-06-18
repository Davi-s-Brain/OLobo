function addTask() {
    var nameInput = document.getElementById("taskName");
    var descriptionInput = document.getElementById("taskDescription");
    var weightInput = document.getElementById("taskWeight");
    var timeInput = document.getElementById("taskTime");

    var name = nameInput.value.trim();
    var description = descriptionInput.value.trim();
    var weight = weightInput.value.trim();
    var time = timeInput.value.trim();

    if (name === '') {
      alert("Digite o nome da tarefa.");
      return;
    }

    var task = {
      name: name,
      description: description,
      weight: weight,
      time: time
    };

    var taskItem = createTaskItem(task);
    document.getElementById("taskList").appendChild(taskItem);

    nameInput.value = '';
    descriptionInput.value = '';
    weightInput.value = '';
    timeInput.value = '';
  }

  function createTaskItem(task) {
    var li = document.createElement("li");

    var taskInfo = document.createElement("div");
    taskInfo.innerHTML = "<h3>" + task.name + "</h3>" +
                         "<p>" + task.description + "</p>" +
                         "<p>Peso: " + task.weight + "</p>" +
                         "<p>Tempo: " + task.time + "</p>";

    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Excluir"));
    deleteButton.onclick = function() {
      li.parentNode.removeChild(li);
    };

    li.appendChild(taskInfo);
    li.appendChild(deleteButton);

    return li;
  }