const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let coord = { x: 0, y: 0 };
document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);
window.addEventListener("resize", resize);
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}
resize();
function start(event) {
  document.addEventListener("mousemove", draw);
  reposition(event);
}
function reposition(event) {
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}
function stop() {
  document.removeEventListener("mousemove", draw);
}
let w = 0;
document.getElementById("width").addEventListener("input", (evt) => {
  w = evt.target.value;
  ctx.lineWidth = w;
});
let c = "#000";
document.getElementById("color").addEventListener("input", (evt) => {
  c = evt.target.value;
  ctx.lineWidth = c;
});
function draw(event) {
  ctx.beginPath();
  ctx.lineWidth = w;
  ctx.lineCap = "round";
  ctx.strokeStyle = c;
  ctx.moveTo(coord.x, coord.y);
  reposition(event);
  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
}
