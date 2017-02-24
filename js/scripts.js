//Business Logic
var secrefy = function(string) {
  var cryptoSquare = [[]];
  var array = [];
  var numbers = 0;
  var squares = 0;
  var rows = 0;
  var columns = 0;
  var newString = "";
  array = userString.match(/[a-z]/g);
  numbers = array.length;
  squares = Math.sqrt(numbers);
  if (parseInt(squares) === squares){
    rows = squares;
    columns = squares;
  } else {
    rows = parseInt(squares) + 1;
    columns = parseInt(squares) + 1;
  }

  arrayIndex = 0;
  for (r = 0; r < rows; r++){
    cryptoSquare[r] = [];
    for (c = 0; c < columns; c++) {
      cryptoSquare[r][c] = array[arrayIndex];
      arrayIndex++;
    }
  }

  for (c = 0; c < columns; c++){
    for (r = 0; r < rows; r++){
      if (cryptoSquare[r][c] === undefined) {
        newString = newString.concat("");
      } else {
        newString = newString.concat(cryptoSquare[r][c]);
      }
    }
  }

  var yetAnotherArray = [];
  var yetAnotherArrayIndex = 0;
  for (i = 0; i < newString.length; i += 5) {
    yetAnotherArray[yetAnotherArrayIndex] = newString.slice(i, i+5);
    yetAnotherArrayIndex++;
  }

  return yetAnotherArray.join(" ");
};

//User Interface
$(function() {
  $("form#userInput").submit(function(event){
    event.preventDefault();
    userString = ($("input#originalMessage").val().toLowerCase());
    // debugger;
    output = secrefy(userString);
    $(".answer").show();
    $("#answers").text(output);
  });
});
