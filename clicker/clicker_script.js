var canvas = document.getElementById("clicker_box");
var ctx = canvas.getContext("2d");
var csize = canvas.width;
//canvas variables

ctx.fillStyle = "#777777";
var yellowbox = false;
var barfill = csize;
var barsfilled = 0;
var clicks = 0;
//variables for the functions

//consider storing game state in object
/*var game = {
	??
}*/

//canvas.addEventListener("click", flash, false);
canvas.addEventListener("click", bar, false);
document.addEventListener("keydown", reset, false);
//event listeners to get clicking and keyboard input

/*function flash() {
	if (yellowbox == false) {
		ctx.fillStyle = "#777777";
		ctx.fillRect(0, 0, csize, csize);
		yellowbox = true;
	}
	else {
		ctx.fillStyle = "#FFFFFF";
		ctx.fillRect(0, 0, csize, csize);
		yellowbox = false;
	};
};*/
//makes the box go gray then white when clicked, on toggle

function bar() {
	clicks = clicks + 1;
	document.getElementById("tc").innerHTML = clicks + " times clicked.";
	//recording click amounts
	barfill = barfill - (15 + barsfilled);
	//height of bar
	if (barfill < 0) {
		barfill = csize;
		barsfilled = barsfilled + 1;
		document.getElementById("bfd").innerHTML = barsfilled + " bars filled.";
	};
	//what to do when bar is filled
	if (barsfilled > 199) {
		document.getElementById("2much").innerHTML = "Please stop.";
	}
	else if (barsfilled > 99) {
		document.getElementById("2much").innerHTML = "You're going to hurt yourself.";
	}
	else if (barsfilled > 49) {
		document.getElementById("2much").innerHTML = "Why are you still playing this?";
	}
	else if (barsfilled > 9) {
		document.getElementById("2much").innerHTML = "You've spent too much time on this.";
	};
	//mesages worrying about time consumption and health
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0, 0, csize, csize);
	ctx.fillStyle = "#777777";
	ctx.fillRect(0, barfill, csize, (csize - barfill));
	//resetting screen then drawing bar
};
//fills up a bar

function reset() {
	clicks = 0;
	barfill = 1;
	barsfilled = 0;
	document.getElementById("tc").innerHTML = clicks + " times clicked";
	document.getElementById("bfd").innerHTML = barsfilled + " bars filled";
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0, 0, csize, csize);
};
//resets stats and bar