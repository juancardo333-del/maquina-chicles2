const coinsContainer = document.getElementById("coins")
const gum = document.getElementById("gum")

const questionText = document.getElementById("question")
const answersDiv = document.getElementById("answers")
const result = document.getElementById("result")

let currentQuestion

const colors = [
"red",
"blue",
"green",
"yellow",
"purple",
"orange"
]

const questions = [

{
q:"What is metacognition?",
a:[
"Being aware of how you think and learn",
"Memorizing information quickly",
"Reading faster than others",
"Learning without practice"
],
c:0
},

{
q:"Which strategy best improves long-term memory?",
a:[
"Spaced repetition",
"Reading once",
"Studying only before exams",
"Highlighting everything"
],
c:0
},

{
q:"What is critical thinking mainly about?",
a:[
"Evaluating evidence before forming conclusions",
"Accepting information immediately",
"Memorizing facts",
"Avoiding difficult questions"
],
c:0
},

{
q:"Why are mistakes useful when learning?",
a:[
"They reveal gaps in understanding",
"They stop learning",
"They prove inability",
"They eliminate effort"
],
c:0
},

{
q:"What is reflection in learning?",
a:[
"Thinking about what worked and what didn’t",
"Memorizing faster",
"Reading quickly",
"Ignoring mistakes"
],
c:0
},

{
q:"Which strategy helps solve complex problems?",
a:[
"Breaking them into smaller parts",
"Ignoring hard parts",
"Guessing quickly",
"Memorizing answers"
],
c:0
},

{
q:"What does a growth mindset mean?",
a:[
"Believing abilities improve with effort",
"Thinking intelligence never changes",
"Avoiding challenges",
"Focusing only on results"
],
c:0
},

{
q:"Which activity deepens understanding?",
a:[
"Explaining the idea to someone else",
"Reading silently once",
"Copying notes",
"Memorizing definitions"
],
c:0
},

{
q:"Why is curiosity important for learning?",
a:[
"It motivates exploration and discovery",
"It replaces studying",
"It prevents mistakes",
"It speeds memorization"
],
c:0
},

{
q:"What does analyzing information involve?",
a:[
"Breaking ideas into parts to understand them",
"Memorizing facts",
"Ignoring details",
"Accepting everything"
],
c:0
},

{
q:"What study technique improves recall?",
a:[
"Testing yourself",
"Reading repeatedly",
"Studying once",
"Avoiding hard topics"
],
c:0
},

{
q:"Why is feedback useful?",
a:[
"It shows how to improve",
"It removes studying",
"It prevents mistakes forever",
"It guarantees success"
],
c:0
},

{
q:"What helps store knowledge better?",
a:[
"Connecting new ideas with previous knowledge",
"Reading faster",
"Memorizing isolated facts",
"Skipping practice"
],
c:0
},

{
q:"What does evaluating evidence mean?",
a:[
"Checking if information is reliable",
"Memorizing data",
"Ignoring other ideas",
"Accepting information immediately"
],
c:0
},

{
q:"Why is concentration important when studying?",
a:[
"It helps process information effectively",
"It removes review",
"It guarantees memory",
"It replaces practice"
],
c:0
},

{
q:"What is logical reasoning?",
a:[
"Using structured thinking to reach conclusions",
"Memorizing answers",
"Guessing quickly",
"Avoiding analysis"
],
c:0
},

{
q:"Why is practice important in learning?",
a:[
"It strengthens brain connections",
"It eliminates mistakes",
"It replaces understanding",
"It reduces thinking"
],
c:0
},

{
q:"What is the purpose of asking questions?",
a:[
"Clarifying ideas and improving understanding",
"Avoiding study",
"Memorizing faster",
"Reducing effort"
],
c:0
},

{
q:"Why is understanding better than memorizing?",
a:[
"It allows applying knowledge in new situations",
"It guarantees grades",
"It replaces thinking",
"It avoids practice"
],
c:0
},

{
q:"What develops better thinking skills?",
a:[
"Practicing analysis and reflection",
"Avoiding challenges",
"Guessing answers",
"Memorizing quickly"
],
c:0
}

]

/* crear monedas */

for(let i=0;i<10;i++){

let coin = document.createElement("img")
coin.src = "moneda.png"
coin.className = "coin"

coin.onclick = function(){

coin.style.visibility = "hidden"

let color = colors[Math.floor(Math.random()*colors.length)]

gum.className = "gum " + color
gum.style.display = "block"

/* animación bola */

gum.classList.remove("drop")
void gum.offsetWidth
gum.classList.add("drop")

}

coinsContainer.appendChild(coin)

}

/* click bola */

gum.onclick = function(){

gum.style.display = "none"

currentQuestion = questions[Math.floor(Math.random()*questions.length)]

questionText.innerText = currentQuestion.q

answersDiv.innerHTML = ""
result.innerText = ""

/* mezclar respuestas */

let answers = currentQuestion.a.map((text,index)=>({
text:text,
correct:index === currentQuestion.c
}))

answers.sort(()=>Math.random()-0.5)

/* crear botones */

answers.forEach(answer=>{

let btn = document.createElement("button")
btn.innerText = answer.text

btn.onclick = function(){

if(answer.correct){
result.innerText = "Correct!"
}else{
result.innerText = "Wrong!"
}

}

answersDiv.appendChild(btn)

})

}