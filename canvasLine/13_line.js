function doFirst(){
	var x = document.getElementById('canvas');
	var canvas = x.getContext("2d"); //沒寫var表示全域變數

	canvas.lineWidth = 15;
	canvas.strokeStyle = 'red';

	canvas.lineCap = 'butt';
	canvas.moveTo(50,50);
	canvas.lineTo(300,50);
	canvas.stroke();
	
	canvas.beginPath();
	canvas.lineCap = 'round';
	canvas.moveTo(50,80);
	canvas.lineTo(300,80);
	canvas.stroke();

	canvas.beginPath();
	canvas.lineCap = 'square';
	canvas.moveTo(50,110);
	canvas.lineTo(300,110);
	canvas.stroke();

	canvas.lineWidth = 25;
	canvas.strokeStyle = 'green';

	canvas.lineJoin = 'mitter';
	canvas.strokeRect(50,150,150,200);

	canvas.lineJoin = 'round';
	canvas.strokeRect(250,150,150,200);

	canvas.lineJoin = 'bevel';
	canvas.strokeRect(450,150,150,200);
	
	
}
window.addEventListener('load', doFirst, false);