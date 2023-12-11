var timeLeft = 60;
//timer
document.getElementById("start").addEventListener("click",function(){
    document.getElementById("start-area").style.display = "none"
    document.getElementById("quiz-area").style.display = "block"
    displayQuestion()
    countdown();
})
//Questions
var question = [
    {
        question:"JavaScript uses what kind of interface to access the DOM structure?",
        choices:["HTML", "API", "NoSQL", "Node"],
        answer:"API"
    },
    {
        question:"What is hoisting in Javascript?",
        choices:["Declaration moves to the top.", "Declaration moves to the bottom.", "Automatically creates a console.log.", "Elevates the importance of the function."],
        answer:"Declaration moves to the top."
    },
    {
        question:"How does prompt differ from alert?",
        choices:["Only alert uses parentheses.", "The alert will return a value, prompt does not.", "Only prompt uses parentheses.", "The prompt will return a value, alert does not."],
        answer:"The prompt will return a value, alert does not."
    },
    {
        question:"What does it mean that variables are case-sensitive?",
        choices:["That all variables must use uppercase letters", "That all variables must use lowercase letters", "That the computer does not think that the variables name and Name are the same thing.", "That the computer thinks that the variables name and Name are the same thing."],
        answer:"That the computer does not think that the variables name and Name are the same thing."
    }
]
//text display
var questionIndex = 0
function displayQuestion(){
    if(questionIndex < question.length){
    document.getElementById("question").innerText = question[questionIndex].question
    document.getElementById("answer-1").innerText = question[questionIndex].choices[0]
    document.getElementById("answer-2").innerText = question[questionIndex].choices[1]
    document.getElementById("answer-3").innerText = question[questionIndex].choices[2]
    document.getElementById("answer-4").innerText = question[questionIndex].choices[3]
    }else{
        endGame()
        console.log("hit")
    }

}
var playerScore = 0
//Listeners
document.getElementById("quiz-area").addEventListener("click", function(event){
if(event.target.nodeName === "BUTTON"){
    console.log(event)
    var userChoice = event.target.innerText
    var correctChoice = question[questionIndex].answer
    if(userChoice === correctChoice){
        console.log("correct")
        playerScore = playerScore+1
    } else{
        timeLeft = timeLeft-10
        console.log("incorrect")
    }
   if((questionIndex +1) <= question.length){
    questionIndex++
    displayQuestion()
   }else{
    console.log("end quiz")
    console.log("playerScore", playerScore)
    // end quiz

   }
    }  
    
   
})
//next function
function nextQuestion(event){
    if(this.textContent +++ questions[questionCounter].correctAnswer){
        questionCounter++;
        showResult('correct');
    }
}
function showResult(result) {
    var resultInterval;
    if(result === 'correct') {
        document.querySelector('resultRight').textContent = "Right!";
    } else {
        document.querySelector('resultWrong').textContent = "Wrong!";
    }
}

var timerEl = document.getElementById('countdown');


function countdown(){

var timerInterval = setInterval(function () {
    
    if (timeLeft > 1){
        timerEl.textContent = timeLeft + ' time left';
        timeLeft--;
    }else{
        clearInterval(timerInterval);
        timerEl.textContent = "";
        // start screen
        document.getElementById("quiz-area").innerHTML = `<h1>${timeLeft}</h1>`
        console.log("done")
            if(secondsLeft < 0) {
      // Times up
      clearInterval(timerInterval);
    }
    }
    

console.log(countdown)
  }, 1000);
}
//Game Over
function endGame(){
    timerEl.textContent = "";
    secondsLeft = 0
    alert(`your score is ${playerScore}`)
}