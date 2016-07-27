var min = 1
var max = 7
var rand = Math.floor(Math.random() * (max - min +1)) + min
switch (rand) {
  case 1:
    document.getElementById("splash").innerHTML = "Not useful at all";
    break;
  case 2:
    document.getElementById("splash").innerHTML = "Barely functional";
    break;
  case 3:
    document.getElementById("splash").innerHTML = "Has a peculiar aesthetic";
    break;
  case 4:
    document.getElementById("splash").innerHTML = "Mildly enjoyable";
    break;
  case 5:
    document.getElementById("splash").innerHTML = "I hope you enjoy gray!";
    break;
  case 6:
    document.getElementById("splash").innerHTML = "Distinctly monochrome";
    break;
  case 7:
    document.getElementById("splash").innerHTML = "Regularly updated!";
    break;
  default:
    document.getElementById("splash").innerHTML = "Not useful at all";
    break;
};
