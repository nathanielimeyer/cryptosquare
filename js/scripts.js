//Business Logic

var secrefy = function(string) {
  return string;
};

//User Interface
$(function() {
  $("form#userInput").submit(function(event){
    event.preventDefault();
    userString = ($("input#originalMessage").val());
    // debugger;
    output = secrefy(userString);
    $(".answer").show();
    $("#answers").text(output);
  });
});
