//USER INTERFACE USER INTERFACE USER INTERFACE USER INTERFACE
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#input").val());

    if (input <1){
      alert("Enter a number greater than 0.")
    } else {
      output = booper(input);
    }
    $("#output").text(booper());

//BACKEND BACKEND BACKEND BACKEND BACKEND BACKEND BACKEND
function booper(input){
  var returnArray = [];
  var input = $("#input").val();

    for (var i=0; i<=returnArray.length; i++) {
      returnArray.push(input);
      console.log("here")
      if (returnArray.includes("3")){
          returnArray[i] = "I'm sorry Dave. I'm afraid I cant do that.";
          console.log("I'm sorry");
        } else if (returnArray.includes("2")){
          returnArray[i] = "Boop!"
          console.log("Boop!")

        } else if (returnArray.includes("1")){
          returnarray[i].push = ("Beep!")
        }
        };
        return returnArray;
      };
    });
  });
