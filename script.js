function check(){

var question1 = document.rgbtest.question1.value;
var question2 = document.rgbtest.question2.value;
var question3 = document.rgbtest.question3.value;

var correct = 0;

if (question1 == "yesm"){
  correct++;
}
if (question2 == "yesn"){
  correct++;
}
if (question3 == "yeso"){
  correct++;
}

  document.getElementById("after_submit").style.visibility ="visible";
  document.getElementById("final_score").innerHTML = "You got " + correct + " correct.";
}

