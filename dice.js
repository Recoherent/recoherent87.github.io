/*
function plog(text) {
  var p = document.createElement("P");
  var t = document.createTextNode(text);
  p.appendChild(t);
  document.body.appendChild(p);
};
*/

function rolldice() {
  
  var sides, amount;
  var amountText, sidesText;

  amountText = "How many dice will you roll?";
  sidesText = "How many sides will the dice have?";

  function amount() {
    //plog("amount");
    amount = parseInt(prompt(amountText, 1), 10);
    //plog(amount);
    if (Number.isNaN(amount)) {
      amountText = "Improper value given. Try again.";
      amount();
    };
    //plog("to sides");
    sides();
  };
  
  function sides() {
    //plog("sides");
    sides = parseInt(prompt(sidesText, 6), 10);
    //plog(sides);
    if (Number.isNaN(sides)) {
      sidesText = "Improper value given. Try again.";
      sides();
    };
    //plog("to roll");
    roll();
  };
  
  function roll() {
    var number = 0;
    //plog("roll");
    //plog(number);
    //plog("begin for");
    for(var i = 0; i < amount; i++){
      number = number + Math.floor((Math.random() * sides) + 1);
      //plog(i);
      //plog(number);
    };
    //plog("done for");
    if (Number.isNaN(number)) {
      //plog(number);
      alert("An error occurred. Please try again.");
      rolldice();
    };
    //plog(number);
    if (confirm(number + ". Roll again?")) {
      roll();
    };
  };
  
  //console.log("ran dice");
  amount();
  
};
