function openFeature() {
  var allElems = document.querySelectorAll(".elems");
  var fullElemPage = document.querySelectorAll(".fullElem");
  var fullElemPageBackBtn = document.querySelectorAll(".fullElem .back");

  allElems.forEach(function (elms) {
    elms.addEventListener("click", function () {
      fullElemPage[elms.id].style.display = "block";
      location.hash = elms.id;
    });
  });

  fullElemPageBackBtn.forEach(function (back) {
    back.addEventListener("click", function () {
      fullElemPage[back.id].style.display = "none";
      location.hash = "";
    });
  });

  if (location.hash) {
    fullElemPage[location.hash.substring(1)].style.display = "block";
  }
}
openFeature();

function todoList() {
  var currTask = [];

  if (localStorage.getItem("currTask")) {
    currTask = JSON.parse(localStorage.getItem("currTask"));
  } else {
    console.log("Task list is empty");
  }

  function renderTask() {
    let allTask = document.querySelector(".alltask");
    let sum = "";
    currTask.forEach(function (elem, idx) {
      sum += `<div class="task">
                    <h5>${elem.task}<span class="${elem.imp}">imp</span></h5>
                    <button id="${idx}">Mark as Completed</button>
                </div>`;
    });
    allTask.innerHTML = sum;

    localStorage.setItem("currTask", JSON.stringify(currTask));
    document.querySelectorAll(".task button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        currTask.splice(btn.id, 1);
        renderTask();
      });
    });
  }
  renderTask();

  let form = document.querySelector(".addtask form");
  let taskInput = document.querySelector(".addtask form #task-input");
  let taskDetailInput = document.querySelector(".addtask form textarea");
  let taskCheckbox = document.querySelector(".addtask form #check");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    currTask.push({
      task: taskInput.value,
      details: taskDetailInput.value,
      imp: taskCheckbox.checked,
    });
    renderTask();
    taskInput.value = "";
    taskDetailInput.value = "";
    taskCheckbox.checked = false;
  });
}
todoList();

function dailyPlanner() {
  var dayPlanner = document.querySelector(".day-planner");
  var dayPlanData = JSON.parse(localStorage.getItem("dayPlanData")) || {};

  var hours = Array.from({ length: 18 }, function (ele, idx) {
    return `${6 + idx}:00 - ${7 + idx}:00`;
  });

  var wholeDaySum = "";
  hours.forEach(function (ele, idx) {
    var savedData = dayPlanData[idx] || "";
    wholeDaySum =
      wholeDaySum +
      `<div class="day-planner-time"><p>${ele}</p>
    <input id=${idx} type="text" placeholder="..." value=${savedData}></div>`;
  });

  dayPlanner.innerHTML = wholeDaySum;

  var dayPlannerInput = document.querySelectorAll(".day-planner input");
  dayPlannerInput.forEach(function (ele) {
    ele.addEventListener("input", function () {
      dayPlanData[ele.id] = ele.value;

      localStorage.setItem("dayPlanData", JSON.stringify(dayPlanData));
    });
  });
}
dailyPlanner();
