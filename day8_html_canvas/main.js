const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth; //Get the window's height and width
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth =80;


let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e) {
	if (!isDrawing) return; //如果false的話停止function運行
	console.log(e);
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	ctx.beginPath();
	//start from
	ctx.moveTo(lastX, lastY);
	//go to
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
	[lastX, lastY] = [e.offsetX, e.offsetY];
	hue++;
  if (hue >= 360) {
    hue = 0;}
}
canvas.addEventListener('mousedown', (e) => {
	isDrawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY]; 
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

// if (!isDrawing) return; // stop the fn from running when they are not moused down
//   console.log(e);
//   ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
//   ctx.beginPath();
//   // start from
//   ctx.moveTo(lastX, lastY);
//   // go to
//   ctx.lineTo(e.offsetX, e.offsetY);
//   ctx.stroke();
