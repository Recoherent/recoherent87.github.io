var min = 1
var max = 8
var rand = Math.floor(Math.random() * (max - min +1)) + min
switch (rand) {
  case 1:
    document.getElementById("splash").innerHTML = "Potentially useful";
    break;
  case 2:
    document.getElementById("splash").innerHTML = "Barely functional";
    break;
  case 3:
    document.getElementById("splash").innerHTML = "WARNING: May spontaneously create universes and/or cats";
    break;
  case 4:
    document.getElementById("splash").innerHTML = "Mildly enjoyable";
    break;
  case 5:
    document.getElementById("splash").innerHTML = "Irregularly updated";
    break;
  case 6:
    document.getElementById("splash").innerHTML = "Distinctly monochrome";
    break;
  case 7:
    document.getElementById("splash").innerHTML = "Regularly updated";
    break;
  case 8:
    document.getElementById("splash").innerHTML = "WARNING: Side effects include nausea, vomitting, death";
    break;
  default:
    document.getElementById("splash").innerHTML = "Not useful at all";
    break;
};
