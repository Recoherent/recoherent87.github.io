//animated navbar thing, for the projects
var canvas = document.getElementById("nav_box");
var ctx = canvas.getContext("2d");
var cwidth = canvas.width;
var cheight = canvas.height;

var rect_x = 50;
var rect_y = 150;
var rect_size = 200;

var darksquare = function(x, y, size, text){
	nx = (x - (size / 2));
	ny = (y - (size / 2));
	ctx.fillStyle = "#000000";
	ctx.strokeRect (nx, ny, size, size);
	ctx.font = "15px serif"
	ctx.fillText (text, x, y)
};
var refresh = function(){
	ctx.fillStyle = "#ffffff";
	ctx.fillRect (0, 0, cwidth, cheight);
	//refreshing screen
};
var squareline = function(direction){
	if (direction == "left") {
		rect_x = rect_x - 50;
		refresh();
		darksquare(rect_x, rect_y, rect_size, "one");
		darksquare(rect_x + 250, rect_y, rect_size, "two");
		darksquare(rect_x + 500, rect_y, rect_size, "three");
		darksquare(rect_x + 750, rect_y, rect_size, "four");
	}
	else if (direction == "right") {
		rect_x = rect_x + 50;
		refresh();
		darksquare(rect_x, rect_y, rect_size, "one");
		darksquare(rect_x + 250, rect_y, rect_size, "two");
		darksquare(rect_x + 500, rect_y, rect_size, "three");
		darksquare(rect_x + 750, rect_y, rect_size, "four");
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