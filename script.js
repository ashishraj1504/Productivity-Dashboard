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

function motivationalQuote() {
  var motivationQuote = document.querySelector(".motivation-2 h1");
  var motivationAuthor = document.querySelector(".motivation-3 h2");
  async function fetchQuote() {
    let response = await fetch("https://dummyjson.com/quotes/random");
    let data = await response.json();

    motivationQuote.innerHTML = data.quote;
    motivationAuthor.innerHTML = data.author;
  }
  fetchQuote();
}
motivationalQuote();

function pomodoroTimer() {
  let timer = document.querySelector(".pomo-timer h1");
  var startBtn = document.querySelector(".pomo-timer .start");
  var pauseBtn = document.querySelector(".pomo-timer .pause");
  var resetBtn = document.querySelector(".pomo-timer .reset");
  let timerInterval = null;

  let totalSec = 1500;
  function updateTimer() {
    let min = Math.floor(totalSec / 60);
    let sec = totalSec % 60;

    timer.innerHTML = `${String(min).padStart("2", "0")}:${String(sec).padStart("2", "0")}`;
  }
  function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(function () {
      if (totalSec > 0) {
        totalSec--;
        updateTimer();
      } else {
        resetTimer();
      }
    }, 1000);
  }

  function pauseTimer() {
    clearInterval(timerInterval);
  }
  function resetTimer() {
    clearInterval(timerInterval);
    totalSec = 25 * 60;
    updateTimer();
  }
  startBtn.addEventListener("click", startTimer);
  pauseBtn.addEventListener("click", pauseTimer);
  resetBtn.addEventListener("click", resetTimer);
}
pomodoroTimer();

function dailyGoals() {
  var currGoal = [];

  if (localStorage.getItem("currGoal")) {
    currGoal = JSON.parse(localStorage.getItem("currGoal"));
  } else {
    console.log("Goal list is empty");
  }

  function renderGoal() {
    let allGoal = document.querySelector(".allgoal");
    let sum = "";
    currGoal.forEach(function (elem, idx) {
      sum += `<div class="goal">
                    <h5>${elem.goal}<span class="${elem.imp}">imp</span></h5>
                    <button id="${idx}">Mark as Completed</button>
                </div>`;
    });
    allGoal.innerHTML = sum;

    localStorage.setItem("currGoal", JSON.stringify(currGoal));
    document.querySelectorAll(".goal button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        currGoal.splice(btn.id, 1);
        renderGoal();
      });
    });
  }
  renderGoal();

  let form = document.querySelector(".addgoal form");
  let goalInput = document.querySelector(".addgoal form #goal-input");
  let goalDetailInput = document.querySelector(".addgoal form textarea");
  let goalCheckbox = document.querySelector(".addgoal form #check");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    currGoal.push({
      goal: goalInput.value,
      details: goalDetailInput.value,
      imp: goalCheckbox.checked,
    });
    renderGoal();
    goalInput.value = "";
    goalDetailInput.value = "";
    goalCheckbox.checked = false;
  });
}
dailyGoals();

function weatherFunctionality() {
  // I have removed API key for security purpose
  var apiKey = "API";
  var city = "Bhopal";

  var header1Time = document.querySelector(".header1 h1");
  var header1Date = document.querySelector(".header1 h2");
  var header2Temp = document.querySelector(".header2 h2");
  var header2Condition = document.querySelector(".header2 h4");
  var precipitation = document.querySelector(".header2 .precipitation");
  var humidity = document.querySelector(".header2 .humidity");
  var wind = document.querySelector(".header2 .wind");

  var data = null;

  async function weatherAPICall() {
    var response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
    );
    data = await response.json();
    console.log(data);

    header2Temp.innerHTML = `${data.main.temp - 273}°C`;
    header2Condition.innerHTML = `${data.weather[0].description}`;
    wind.innerHTML = `Wind: ${data.wind.speed} km/h`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    precipitation.innerHTML = `Temp Feels Like : ${data.main.feels_like}%`;
  }

  weatherAPICall();

  function timeDate() {
    const totalDaysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var date = new Date();
    var dayOfWeek = totalDaysOfWeek[date.getDay()];
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var tarik = date.getDate();
    var month = monthNames[date.getMonth()];
    var year = date.getFullYear();

    header1Date.innerHTML = `${tarik} ${month}, ${year}`;

    if (hours > 12) {
      header1Time.innerHTML = `${dayOfWeek}, ${String(hours - 12).padStart("2", "0")}:${String(minutes).padStart("2", "0")}:${String(seconds).padStart("2", "0")} PM`;
    } else {
      header1Time.innerHTML = `${dayOfWeek}, ${String(hours).padStart("2", "0")}:${String(minutes).padStart("2", "0")}:${String(seconds).padStart("2", "0")} AM`;
    }
  }

  setInterval(() => {
    timeDate();
  }, 1000);
}

weatherFunctionality();
