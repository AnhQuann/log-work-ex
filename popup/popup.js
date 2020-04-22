// checkLogworkTime() && alert("Relax and Logwork Please! ^^");
const remindLogWork = setInterval(function () {
  if (checkLogworkTime()) {
    alert(alertify)
    clearInterval(remindLogWork);
  }
}, 1000)

function getTimeNow() {
  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes();
  return time;
}

function checkLogworkTime() {
  const currentTime = getTimeNow();
  return (currentTime === "11:29");
}