$(document).ready(function() {
  $(".word-form").submit(function(event) {
    event.preventDefault();
    var phraseInput = $("#phrase").val();

    var phraseArray = phraseInput.toLowerCase().split("");
    console.log(phraseArray);

    $(".word-form").trigger("reset");


    for (var i = 0; i <= phraseArray.length; i++) {
      if (phraseArray[i] === "a" || phraseArray[i] === "e" || phraseArray[i] === "i" || phraseArray[i] === "o" || phraseArray[i] === "u") {
        phraseArray[i] = "-";
      }
    }

    $(".newPhrase").text(phraseArray.join(""));
    $(".guess-form").submit(function(event) {
      event.preventDefault();
      var userGuess = $("#guess").val();

      if (userGuess === phraseInput) {
        alert("Correct!");
      } else {
        alert("Incorrect!");
      }

    });
  });



});
