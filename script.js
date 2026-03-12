const questionText = document.getElementById("question")
const answersDiv = document.getElementById("answers")
const scoreText = document.getElementById("score")
const timeText = document.getElementById("time")

let score = 0
let time = 15
let timer
let currentQuestion

const questions = [

{
q:"What is metacognition?",
a:[
"Thinking about how you think and learn",
"Reading faster",
"Memorizing quickly",
"Studying only once"
],
c:0
},

{
q:"What does critical thinking involve?",
a:[
"Analyzing information carefully",
"Memorizing facts",
"Avoiding questions",
"Guessing answers"
],
c:0
},

{
q:"Why is reflection important?",
a:[
"It helps improve learning strategies",
"It removes the need to study",
"It replaces practice",
"It guarantees perfect grades"
],
c:0
},

{
q:"What is a growth mindset?",
a:[
"Believing abilities improve with effort",
"Thinking intelligence never changes",
"Avoiding challenges",
"Memorizing only"
],
c:0
},

{
q:"Why is practice important?",
a:[
"It strengthens knowledge",
"It eliminates mistakes forever",
"It replaces thinking",
"It removes effort"
],
c:0
}

]

function startGame(){

score = 0
scoreText.innerText = score
nextQuestion()

}

function nextQuestion(){

time = 15
timeText.innerText = time

clearInterval(timer)

timer = setInterval(function(){

time--
timeText.innerText = time

if(time <= 0){

nextQuestion()

}

},1000)

currentQuestion = questions[Math.floor(Math.random()*questions.length)]

questionText.innerText = currentQuestion.q

answersDiv.innerHTML = ""

currentQuestion.a.forEach(function(answer,index){

let btn = document.createElement("button")

btn.innerText = answer

btn.onclick = function(){

if(index === currentQuestion.c){

score++
scoreText.innerText = score

}

nextQuestion()

}

answersDiv.appendChild(btn)

})

}
