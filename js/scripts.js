//Business Logic
var cryptoSquare = [[]];

var secrefy = function(string) {
  var array = userString.match(/[a-z]/g);
  var numbers = array.length;
  var squares = Math.sqrt(numbers);
  rows = parseInt(squares) + 1;
  columns = parseInt(squares) + 1;

  arrayIndex = 0;
  for (r = 0; r < rows; r++){
    cryptoSquare[r] = [];
    for (c = 0; c < columns; c++) {
      cryptoSquare[r][c] = array[arrayIndex];
      arrayIndex++;
      
    }
  }


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
