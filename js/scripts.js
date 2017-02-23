//Business Logic

var secrefy = function(string) {
  var array = userString.match(/[a-z]/g);
  console.log(array);
  var numbers = array.length;
  console.log(numbers);
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
