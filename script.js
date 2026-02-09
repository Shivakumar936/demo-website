function changeText() {
    document.getElementById("message").innerText =
        "JavaScript is working successfully!";
}

function updateTime() {
    const now = new Date();
    document.getElementById("time").innerText =
        "Current time: " + now.toLocaleTimeString();
}

setInterval(updateTime, 1000);
updateTime();
