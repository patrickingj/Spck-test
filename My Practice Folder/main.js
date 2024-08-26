function updateClock() {
  const now = new Date();
  const hour = now.getHours().toString().padStart();
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2,0);
  document.getElementById('myClock').textContent = `${hour}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);