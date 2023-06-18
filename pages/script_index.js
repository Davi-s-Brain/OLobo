function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;
    if (task !== "") {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(task));
      document.getElementById("taskList").appendChild(li);
      input.value = "";
      addDeleteButton(li);
    }
  }

  function addDeleteButton(taskItem) {
    let deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Excluir"));
    deleteButton.onclick = function() {
      taskItem.parentNode.removeChild(taskItem);
    };
    taskItem.appendChild(deleteButton);
  }