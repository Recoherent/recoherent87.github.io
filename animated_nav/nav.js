//animated navbar thing, for the projects
var canvas = document.getElementById("nav_box");
var ctx = canvas.getContext("2d");
var cwidth = canvas.width;
var cheight = canvas.height;

var rect_x = 150;
var rect_y = 150;
var rect_size = 200;
var rect_buffer = 50;
var rect_fullsize = rect_size + rect_buffer;

var square1 = [rect_x, rect_y, rect_size, "one"];
var square2 = [rect_x + rect_fullsize, rect_y, rect_size, "two"];
var square3 = [rect_x + (rect_fullsize * 2), rect_y, rect_size, "three"];
var square4 = [rect_x + (rect_fullsize * 3), rect_y, rect_size, "four"];
var selected = 2;

var lightsquare = function(array){
	console.log(array);
	nx = (array[0] - (array[2] / 2));
	ny = (array[1] - (array[2] / 2));
	ctx.fillStyle = "#000000";
	ctx.strokeRect (nx, ny, array[2], array[2]);
	ctx.font = "15px serif"
	ctx.fillText (array[3], array[0], array[1])
};

var darksquare = function(array){
	console.log(array);
	var smallsize = array[2] - 25;
	nx = (array[0] - (smallsize / 2));
	ny = (array[1] - (smallsize / 2));
	ctx.fillStyle = "#dddddd";
	ctx.fillRect (nx, ny, smallsize, smallsize);
	ctx.fillStyle = "#000000";
	ctx.strokeRect (nx, ny, smallsize, smallsize);
	ctx.font = "15px serif"
	ctx.fillText (array[3], array[0], array[1])
};
var refresh = function(){
	ctx.fillStyle = "#ffffff";
	ctx.fillRect (0, 0, cwidth, cheight);
	//refreshing screen
};
var squareline = function(direction){
	if (direction == "left") leftif: {
		selected = selected + 1;
		if (selected > 4) {
			selected = 4;
			break leftif;
		};
		square1[0] = square1[0] - rect_fullsize;
		square2[0] = square2[0] - rect_fullsize;
		square3[0] = square3[0] - rect_fullsize;
		square4[0] = square4[0] - rect_fullsize;
	}
	else if (direction == "right") rightif: {
		selected = selected - 1;
		if (selected < 1) {
			selected = 1;
			break rightif;
		};
		square1[0] = square1[0] + rect_fullsize;
		square2[0] = square2[0] + rect_fullsize;
		square3[0] = square3[0] + rect_fullsize;
		square4[0] = square4[0] + rect_fullsize;
	};
	refresh();
	switch (selected) {
		case 1:
			lightsquare(square1);
			darksquare(square2);
			darksquare(square3);
			darksquare(square4);
			break;
		case 2:
			darksquare(square1);
			lightsquare(square2);
			darksquare(square3);
			darksquare(square4);
			break;
		case 3:
			darksquare(square1);
			darksquare(square2);
			lightsquare(square3);
			darksquare(square4);
			break;
		case 4:
			darksquare(square1);
			darksquare(square2);
			darksquare(square3);
			lightsquare(square4);
			break;
		default:
			darksquare(square1);
			darksquare(square2);
			darksquare(square3);
			darksquare(square4);
			break;
	};
};

squareline("left");

document.addEventListener('keydown', function(event) {
	if (event.keyCode == 65){
		//alert("left");
		squareline("left");
	};
	//left
	if (event.keyCode == 68){
		//alert("right");
		squareline("right");
	};//right
});