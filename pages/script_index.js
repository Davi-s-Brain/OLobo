function addTask() {
  var nameInput = document.getElementById("taskName");
  var descriptionInput = document.getElementById("taskDescription");
  var weightInput = document.getElementById("taskWeight");
  var timeInput = document.getElementById("taskTime");

  var name = nameInput.value.trim();
  var description = descriptionInput.value.trim();
  var weight = weightInput.value.trim();
  var time = timeInput.value.trim();

  if (name === "") {
    alert("Digite o nome da tarefa.");
    return;
  }

  var task = {
    name: name,
    description: description,
    weight: weight,
    time: time,
  };

  var taskItem = createTaskItem(task);
  document.getElementById("taskList").appendChild(taskItem);

  nameInput.value = "";
  descriptionInput.value = "";
  weightInput.value = "";
  timeInput.value = "";
}

function createTaskItem(task) {
  var li = document.createElement("li");

  var taskInfo = document.createElement("div");
  taskInfo.innerHTML =
    "<h3>" +
    task.name +
    "</h3>" +
    "<p>" +
    task.description +
    "</p>" +
    "<p>Peso: " +
    task.weight +
    "</p>" +
    "<p>Tempo: " +
    task.time +
    "</p>";

  var deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("Excluir"));
  deleteButton.onclick = function () {
    li.parentNode.removeChild(li);
  };

  li.appendChild(taskInfo);
  li.appendChild(deleteButton);

  return li;
}

var timerDisplay = document.querySelector(".timer");
var minutesInput = document.getElementById("minutes-input");
var startBtn = document.getElementById("start-btn");
var resetBtn = document.getElementById("reset-btn");
var countdown;

function startTimer() {
  var minutes = parseFloat(minutesInput.value.replace(",", "."));
  if (isNaN(minutes) || minutes <= 0) {
    alert("Por favor, insira um valor válido para o tempo!");
    return;
  }

  clearInterval(countdown);

  var totalSeconds = Math.round(minutes * 60);
  var startTime = Date.now();
  var endTime = startTime + totalSeconds * 1000;

  updateTimerDisplay(totalSeconds);

  countdown = setInterval(function () {
    var remainingTime = Math.round((endTime - Date.now()) / 1000);
    if (remainingTime < 0) {
      clearInterval(countdown);
      alert("O tempo acabou!");
      updateTimerDisplay(0);
      playAudio();
      return;
    }
    updateTimerDisplay(remainingTime);
  }, 1000);
}

function updateTimerDisplay(seconds) {
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  seconds = seconds % 60;

  var displayText =
    ("0" + hours).slice(-2) +
    ":" +
    ("0" + minutes).slice(-2) +
    ":" +
    ("0" + seconds).slice(-2);
  timerDisplay.textContent = displayText;
}

function resetTimer() {
  clearInterval(countdown);
  minutesInput.value = "1";
  timerDisplay.textContent = "00:00:00";
}

function playAudio() {
  var audio = document.getElementById("audio");
  audio.play();
}

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);
