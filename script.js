function openFeature() {
  var allElems = document.querySelectorAll(".elems");
  var fullElemPage = document.querySelectorAll(".fullElem");
  var fullElemPageBackBtn = document.querySelectorAll(".fullElem .back");

  allElems.forEach(function (elms) {
    elms.addEventListener("click", function () {
      fullElemPage[elms.id].style.display = "block";
    });
  });

  fullElemPageBackBtn.forEach(function (back) {
    back.addEventListener("click", function () {
      fullElemPage[back.id].style.display = "none";
    });
  });
}
openFeature();

let currTask = [
  {
    task: "a a a",
    details: "b b b",
    imp: true,
  },
  {
    task: "c c c",
    details: "d d d",
    imp: true,
  },
  {
    task: "e e e",
    details: "f f f",
    imp: false,
  },
];

function renderTask() {
  var allTask = document.querySelector(".alltask");
  var sum = "";
  currTask.forEach(function (elem) {
    sum += `<div class="task">
                    <h5>${elem.task}<span class="${elem.imp}">imp</span></h5>
                    <button>Mark as Completed</button>
                </div>`;
  });

  allTask.innerHTML = sum;
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
  taskInput.value = "";
  taskDetailInput.value = "";
  taskCheckbox.checked = false;
  renderTask();
});
