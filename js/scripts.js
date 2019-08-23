//USER INTERFACE
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#input").val());
    var returnArray = [];
    if (input <1){
      alert("Enter a number greater than 0.")
    } else {
      output = booper(input);
    }
    $("#output").text(returnArray);

//BACK END
function booper(input){
var returnArray = [];
var input = $("#input").val();
    for (var i=0; i<=input; i++) {
      returnArray.push(i);
      console.log(returnArray)

      if (returnArray.includes(3)){
          returnArray[i] += "I'm sorry Dave. I'm afraid I cant do that.";
          console.log("I'm sorry");
        } else if (returnArray.includes(2)){
          returnArray[i] += "Boop!"
          console.log("Boop!")
        } else if (returnArray.includes(1)){
          returnArray[i] += ("Beep!")
        }
    };
        return returnArray;
      };
    });
  });
