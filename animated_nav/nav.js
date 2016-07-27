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

var square1 = [rect_x, rect_y, rect_size, "Clicker", 40, 20];
var square2 = [rect_x + rect_fullsize, rect_y, rect_size, "Movement", 60, 40];
var square3 = [rect_x + (rect_fullsize * 2), rect_y, rect_size, "Experimental", 80, 55];
var square4 = [rect_x + (rect_fullsize * 3), rect_y, rect_size, "Home", 30, 15];
var selected = 2;

var lightsquare = function(array){
	console.log(array);
	nx = (array[0] - (array[2] / 2));
	ny = (array[1] - (array[2] / 2));
	ctx.fillStyle = "#000000";
	ctx.strokeRect (nx, ny, array[2], array[2]);
	ctx.font = "30px serif"
	ctx.fillText (array[3], array[0] - array[4], array[1])
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
	ctx.font = "25px serif"
	ctx.fillText (array[3], array[0] - array[5] - 12.5, array[1])
};
var refresh = function(){
	ctx.fillStyle = "#ffffff";
	ctx.fillRect (0, 0, cwidth, cheight);
	//refreshing screen
};
var squareline = function(option){
	if (option == "left") leftif: {
		selected = selected - 1;
		if (selected < 1) {
			selected = 1;
			break leftif;
		};
		square1[0] = square1[0] + rect_fullsize;
		square2[0] = square2[0] + rect_fullsize;
		square3[0] = square3[0] + rect_fullsize;
		square4[0] = square4[0] + rect_fullsize;
	}
	else if (option == "right") rightif: {
		selected = selected + 1;
		if (selected > 4) {
			selected = 4;
			break rightif;
		};
		square1[0] = square1[0] - rect_fullsize;
		square2[0] = square2[0] - rect_fullsize;
		square3[0] = square3[0] - rect_fullsize;
		square4[0] = square4[0] - rect_fullsize;
	}
	else if (option == "select") selectif: {
		//alert(selected);
		switch (selected) {
			case 1:
				window.location.href = "http://recoherent87.github.io/clicker/index.html";
				break;
			case 2:
				window.location.href = "http://recoherent87.github.io/circle/index.html";
				break;
			case 3:
				window.location.href = "http://recoherent87.github.io/experimental/index.html";
				break;
			case 4:
				window.location.href = "http://recoherent87.github.io/";
				break;
			default:
				window.location.href = "http://recoherent87.github.io/";
				break;
		};
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

document.addEventListener('keypress', function(event) {
	if (event.keyCode == 65){
		//alert("left");
		squareline("left");
	};//left/a
	if (event.keyCode == 37){
		//alert("left");
		squareline("left");
	};//left/arrow
	if (event.keyCode == 68){
		//alert("right");
		squareline("right");
	};//right/d
	if (event.keyCode == 39){
		//alert("right");
		squareline("right");
	};//right/arrow
	if (event.keyCode == 32){
		//alert("select");
		squareline("select");
	};//select/space
	if (event.keyCode == 13){
		//alert("select");
		squareline("select");
	};//select/enter
});
