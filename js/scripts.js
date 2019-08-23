$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

var string = $("#input").val();
var output = converter(string);
// var string2 = document.getElementById($("#input"));
// var split = string.split('');
function converter(){
    for (var i=0; i<string; i++) {
        if (string.includes("3")){
          console.log("I'm sorry Dave. I'm afraid I cant do that.")
        } else if (string.includes("2")){
          console.log("Boop!")
        } else if (string.includes("1")){
          console.log("Beep!")
        } else {
          return alert("array")//array containing each number leading up to inputted number.
        };
      };
    };
    return output;
  });
});



// var stringWithThree = string.includes("3")
// var stringWithTwo = string.includes("2")
// var stringWithOne = string.includes("1")
//maybe can also just have i< 1000000000 or something.
