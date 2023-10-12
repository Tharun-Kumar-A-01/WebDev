const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});


function draw(e) {
    if (!isDrawing) return;
	context.strokeStyle = document.getElementById("color").value;
    context.lineWidth = document.getElementById("size").value;
    context.lineCap = "round";

    context.beginPath();
    context.moveTo(lastX, lastY);
	context.lineTo(e.offsetX, e.offsetY);
	context.stroke();

	[lastX, lastY] = [e.offsetX, e.offsetY];
}

function clearCanvas() {
	context.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
