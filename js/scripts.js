//USER INTERFACE
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var input = parseInt($("#input").val());
      if (input <1){
        alert("Enter a number greater than 0.");
      } else {
      var output = booper(input).join(", ");
      }
      $("#output").text(output);
  });

  $("#refresh").click(function(){
    $("formOne").trigger("reset");
  });

});

//BACK END
function booper(input){
  var returnArray = [];

    for (var i=0; i<=input; i++) {
      returnArray.push(i);
      console.log(returnArray)
    };

      for (var i=0; i<returnArray.length; i++) {
        if (returnArray[i].toString().includes(3)){
        returnArray[i] = "I'm sorry Dave. I'm afraid I cant do that.";

        } else if (returnArray[i].toString().includes(2)){
          returnArray[i] = "Boop!"

        } else if (returnArray[i].toString().includes(1)){
          returnArray[i] = "Beep!"
        }
    }
    return returnArray;
  };
