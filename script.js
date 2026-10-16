
const statusBox = document.getElementById("serviceStatus");
const message = document.getElementById("message");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

let isRunning = false;

startBtn.addEventListener("click", function () {
    if (isRunning) {
        message.textContent = "The cloud service is already running.";
        return;
    }

    isRunning = true;

    statusBox.textContent = "Service Status: Running";
    statusBox.classList.remove("stopped");
    statusBox.classList.add("running");

    message.textContent =
        "Cloud service started successfully!";

    startBtn.textContent = "Service Running";
});

stopBtn.addEventListener("click", function () {
    if (!isRunning) {
        message.textContent = "The cloud service is already stopped.";
        return;
    }

    isRunning = false;

    statusBox.textContent = "Service Status: Stopped";
    statusBox.classList.remove("running");
    statusBox.classList.add("stopped");

    message.textContent =
        "Cloud service stopped successfully!";

    startBtn.textContent = "Start Cloud Service";
});
