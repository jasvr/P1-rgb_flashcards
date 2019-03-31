function check(){

var question1 = document.rgbtest.question1.value;
var question2 = document.rgbtest.question2.value;
var question3 = document.rgbtest.question3.value;

var correct = 0;

if (question1 == "(255,0,0)"){
  correct++;
}
if (question2 == "(0,128,0)"){
  correct++;
}
if (question3 == "blue"){
  correct++;
}
//Final Score Message -adj to 10 question
var messages = ["Great job!", "Not bad :)", "Just need some more practice :)"];
var range;

if (correct <= 3 ){
  range =2;
}

if (correct > 0 && correct <= 10){
  range = 1;
}

if (correct >= 10) {
  range = 0;
}

  document.getElementById("after_submit").style.visibility ="visible";
  document.getElementById("message").innerHTML = messages[range];
  document.getElementById("final_score").innerHTML = "You got " + correct + " correct.";
}

