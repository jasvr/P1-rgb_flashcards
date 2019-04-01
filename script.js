function check() {

  var question1 = document.rgbtest.question1.value;
  var question2 = document.rgbtest.question2.value;
  var question3 = document.rgbtest.question3.value;

  var correct = 0;

  if (question1 == "(255,0,0)") {
    correct++;
  }
  if (question2 == "(0,128,0)") {
    correct++;
  }
  if (question3 == "blue") {
    correct++;
  }
  //Final Score Message -adj to 10 question
  var messages = ["Great job!", "Not bad :)", "Just need some more practice :)"];
  var range;

  if (correct <= 3) {
    range = 2;
  }

  if (correct > 0 && correct <= 10) {
    range = 1;
  }

  if (correct >= 10) {
    range = 0;
  }

  document.getElementById("after_submit").style.visibility = "visible";
  document.getElementById("message").innerHTML = messages[range];
  document.getElementById("final_score").innerHTML = "You got " + correct + " correct.";
}


questions = {
  question1: "What is red in RGB?",
  answers: {
    a: '(255,0,0)',
    b: '(255,55,0)',
    c: '(5,0,90)'
  }

}

function startGame() {
  var setFront = document.querySelector(".thefront_Red")
  var setBack = document.querySelector(".theback_Red")
  var setAnswer1 = document.querySelector("#answer_1_radio")
  var setAnswer2 = document.querySelector("#answer_2_radio")
  var setAnswer3 = document.querySelector("#answer_3_radio")
  var setAnswer1Label = document.querySelector("#answer_1_label")
  var setAnswer2Label = document.querySelector("#answer_2_label")
  var setAnswer3Label = document.querySelector("#answer_3_label")



  // var question1 = document.initial__test.value;
  // console.log(setAnswer1)
  setFront.innerHTML = questions.question1

  //set radio answer
  setAnswer1.value = questions.answers.a
  setAnswer2.value = questions.answers.b
  setAnswer3.value = questions.answers.c

//set label answer 
  setAnswer1Label.innerHTML = questions.answers.a 
  setAnswer2Label.innerHTML = questions.answers.b
  setAnswer3Label.innerHTML = questions.answers.c 

  // setBack.innerHTML = questions.answers[1]
  // setBack.innerHTML = questions.answers.c
  // document.getElementById("initial_test").style.visibility = "visible";


}
