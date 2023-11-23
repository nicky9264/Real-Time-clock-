
let hour = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let currentTime = new Date();
  hour.innerHTML = currentTime.getHours();
  min.innerHTML = currentTime.getMinutes();
  sec.innerHTML = currentTime.getSeconds();
}, 1000);
