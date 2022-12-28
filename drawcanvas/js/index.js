const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const chooseColorInput = document.getElementById('colorOfPencil');
const buttonEraser = document.getElementById('buttonEraser');
const buttonDrawingOn = document.getElementById('drawingOn');
const colorSvg = document.getElementById('color-svg');
const buttonDownload = document.getElementById('btn-dload');
let coord = { x: 0, y: 0 };
let colorPencil = 'black';
let mode = '';

function canvasFill() {
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, 500, 500);
}

canvasFill();


buttonDrawingOn.addEventListener('mousedown', function () {
	mode = 'drawing';
	canvas.style.cursor = "url('images/pencil.svg') 0 18, auto";
	buttonDrawingOn.classList.add('bg-gray-300');
	buttonEraser.classList.remove('bg-gray-300');
});

buttonEraser.addEventListener('mousedown', function () {
	mode = 'easer';
	canvas.style.cursor = "url('images/eraser.svg') 0 18, auto";
	buttonEraser.classList.add('bg-gray-300');
	buttonDrawingOn.classList.remove('bg-gray-300');
});


buttonDownload.addEventListener('click', DownloadCanvasAsImage);


canvas.addEventListener('mousedown', function (event) {
	if (mode == 'drawing') {
		start(event);
	} else if (mode == 'easer') {
		start(event);
	}
});

canvas.addEventListener('mouseup', () => {
	stop();
});


function start(event) {
	canvas.addEventListener('mousemove', draw);
	reposition(event);
}

function stop() {
	canvas.removeEventListener('mousemove', draw);
}


function reposition(event) {
	coord.x = event.clientX - canvas.offsetLeft;
	coord.y = event.clientY - canvas.offsetTop;
}

function draw(event) {
	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.lineCap = 'round';
	ctx.globalCompositeOperation = 'source-over';
	mode == 'easer' ? ctx.strokeStyle = 'white' : ctx.strokeStyle = colorPencil;
	ctx.moveTo(coord.x, coord.y);
	reposition(event);
	ctx.lineTo(coord.x, coord.y);
	ctx.stroke();
}


chooseColorInput.oninput = function () {
	colorPencil = chooseColorInput.value;
	colorSvg.style.color = chooseColorInput.value;
};

function DownloadCanvasAsImage() {
	let downloadLink = document.createElement('a');
	downloadLink.setAttribute('download', 'CanvasAsImage.png');
	let canvas = document.getElementById('canvas');
	let dataURL = canvas.toDataURL('image/png');
	let url = dataURL.replace(/^data:image\/png/, 'data:application/octet-stream');
	downloadLink.setAttribute('href', url);
	downloadLink.click();
}

