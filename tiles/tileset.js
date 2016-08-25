/*
--TILES--
Work on:
Add functions


Issues:
Coloring doesn't work; the variable is correct but isn't used???


*/
var canvaselement = document.getElementById("tiles_box");
var canvas = canvaselement.getContext("2d");
var canvassize = canvaselement.width; //512 right now
//canvas variables

//all x and y for this will be on a 16x16 grid.
//this will make tiles easier.

canvas.lineWidth = 2;
//oddly enough, having a lineWidth of 1 is still 2px thick, just lighter.
//this may be due to a sort of anti-aliasing effect.

function squareTile(x, y, color) {
	var acolor;
	switch (color) {
		case ".": acolor = "000000"; break; //black
		case "R": acolor = "FF0000"; break; //red
		case "G": acolor = "00FF00"; break; //green
		case "B": acolor = "0000FF"; break; //blue
		default: acolor = "000000"; break; //defaults to black
	};
	console.log(acolor); //debuuuuuug
	canvas.strokeStyle = acolor; canvas.strokeRect((x*32)+1, (y*32)+1, 30, 30);
	//draws the outline
	canvas.fillStyle = "#FFFFFF"; canvas.fillRect((x*32)+1, (y*32)+1, 30, 30);
	//makes the outline 1px thick
};

function circleTile(x, y, color) {
	var acolor;
	switch (color) {
		case ".": acolor = "000000"; break; //black
		case "R": acolor = "FF0000"; break; //red
		case "G": acolor = "00FF00"; break; //green
		case "B": acolor = "0000FF"; break; //blue
		default: acolor = "000000"; break; //defaults to black
	};
	canvas.strokeStyle = acolor;
	canvas.beginPath(); canvas.arc((x*32)+16, (y*32)+16, 15, 0, 2*Math.PI); canvas.stroke();
	canvas.fillStyle = "#FFFFFF"; canvas.beginPath(); canvas.arc((x*32)+16, (y*32)+16, 15, 0, 2*Math.PI); canvas.fill();
	//makes the outline
};

function smallCircle(x, y, color) {
	var acolor;
	switch (color) {
		case ".": acolor = "000000"; break; //black
		case "R": acolor = "FF0000"; break; //red
		case "G": acolor = "00FF00"; break; //green
		case "B": acolor = "0000FF"; break; //blue
		default: acolor = "000000"; break; //defaults to black
	};
	canvas.strokeStyle = acolor;
	canvas.beginPath(); canvas.arc((x*32)+16, (y*32)+16, 10, 0, 2*Math.PI); canvas.stroke();
	canvas.fillStyle = "#FFFFFF"; canvas.beginPath(); canvas.arc((x*32)+16, (y*32)+16, 10, 0, 2*Math.PI); canvas.fill();
	//makes the outline
};

function blankTile(x, y) {
	canvas.fillStyle = "#FFFFFF"; canvas.fillRect((x*32), (y*32), 32, 32);
	//clears the tile
};

function displayArray(array) {
	var y = array[0]; //y coordinate
	var tile; //functions for getting the tile
	var color;
	var func;
	for (var i = 1; i < 17; i++) {
		tile = array[i].charAt(0); //getting tile info
		color = array[i].charAt(1);
		func = array[i].charAt(2);
		console.log(tile.concat(color, func)); //debug info!!!!
		switch (tile) {
			case ".": blankTile(i-1, y); break;
			case "S": squareTile(i-1, y, color); break;
			case "C": circleTile(i-1, y, color); break;
			case "c": smallCircle(i-1, y, color); break;
			default: blankTile(i-1, y); break;
		};
	};
};

//Explanation of the codes for tiles:
//The first entry is the y coordinate (0-15).
//Each array is 17 entries long, for the y and the tiles.
//There are three letters per entry; the first is tile type, second is color, third is function.
//Tile types: .: blank  S: square  C: circle  c: small circle
//Color types: .: black  B: blue  G: green  R: red
//Function types: .: wall
//This should go in the built-in wiki, because it's a cool feature.
var line1 =  [0,  "S..", "S..", "S..", "S..", "S..", "S..", "S..", "S..", "S..", "S..", "S..", "S..", "S..", "S..", "S..", "S.."];
var line2 =  [1,  "S..", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "S.."];
var line3 =  [2,  "S..", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "S.."];
var line4 =  [3,  "S..", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "S.."];
var line5 =  [4,  "S..", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "S.."];
var line6 =  [5,  "S..", "...", "SR.", "...", "SR.", "...", "S..", "S..", "S..", "...", "S..", "...", "...", "...", "...", "S.."];
var line7 =  [6,  "S..", "...", "SR.", "...", "SR.", "...", "...", "S..", "...", "...", "S..", "...", "...", "...", "...", "S.."];
var line8 =  [7,  "S..", "...", "SG.", "...", "SG.", "...", "...", "S..", "...", "...", "S..", "...", "...", "...", "...", "S.."];
var line9 =  [8,  "S..", "...", "SG.", "SG.", "SG.", "...", "...", "S..", "...", "...", "S..", "...", "...", "...", "...", "S.."];
var line10 = [9,  "S..", "...", "SB.", "...", "SB.", "...", "...", "S..", "...", "...", "...", "...", "...", "...", "...", "S.."];
var line11 = [10, "S..", "...", "SB.", "...", "SB.", "...", "S..", "S..", "S..", "...", "C..", "...", "c..", "...", "...", "S.."];
var line12 = [11, "S..", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "S.."];
var line13 = [12, "S..", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "S.."];
var line14 = [13, "S..", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "S.."];
var line15 = [14, "S..", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "...", "S.."];
var line16 = [15, "S..", "S..", "S..", "S..", "S..", "S..", "S..", "S..", "S..", "S..", "S..", "S..", "S..", "S..", "S..", "S.."];

displayArray(line1);
displayArray(line2);
displayArray(line3);
displayArray(line4);
displayArray(line5);
displayArray(line6);
displayArray(line7);
displayArray(line8);
displayArray(line9);
displayArray(line10);
displayArray(line11);
displayArray(line12);
displayArray(line13);
displayArray(line14);
displayArray(line15);
displayArray(line16);