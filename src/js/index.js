const exitBtn=document.querySelector("#exit");
const startBtn=document.querySelector("#start");
const mainDiv=document.querySelector("#mainDiv");
const beginningDiv=document.querySelector(".beginning");
const answersDiv=document.querySelector(".answersDiv")
const progressBar=document.querySelector("#progressBar");
let questionsData = [
    {
        desc: "What color is the sky?",
        answers: [["A)", "Blue"], ["B)", "Yellow"], ["C)", "Green"]],
        trueAnswer: "A"
    },
    {
        desc: "What do you call people who are 18+ ?",
        answers: [["A)", "Baby"], ["B)", "Adult"], ["C)", "Person"]],
        trueAnswer: "B"
    },
    {
        desc: "What color is the tree?",
        answers: [["A)", "Red"], ["B)", "Brown"], ["C)", "Green"]],
        trueAnswer: "C"
    },
    {
        desc: "What do you call someone who has a wife?",
        answers: [["A)", "Wife"], ["B)", "Husband"], ["C)", "Married"]],
        trueAnswer: "C"
    },
    {
        desc: "Which is the most US level in English?",
        answers: [["A)", "B1"], ["B)", "C2"], ["C)", "A2"]],
        trueAnswer: "B"
    }
];

 


let  currentQuestionIndex=0;

function renderAnswers(){


  let questions = questionsData[currentQuestionIndex];

console.log(questions);



  mainDiv.innerHTML= ` <div class="w-100  bg-primary-subtle rounded-3 mb-5  " id="progressBar"><div class="bg-success rounded-3" style="width: calc(${((currentQuestionIndex)/questionsData.length)*100}%); height: 20px;"></div></div><div class="questionsDiv  bg-dark border-2 text-center mb-5 rounded-3 p-5 text-light" >
<p id="questionNumber" class="h1 mb-4">Question ${ currentQuestionIndex+1}</p>
<p id="question h2" class="h3">${questions.desc}</p>

</div>

<div class="answersDiv d-flex w-100 gap-2 justify-content-between mt-5 text-light fs-4">
${questions.answers.map((el,index)=>`
<div class="w-25  bg-dark-subtle rounded-3 overflow-hidden" id="cardd${index}" onclick="checkAnswer(${index})">
    <div class=" bg-secondary fs-3 p-2">${el[0]}</div>
    <p class="fs-4 p-2 text-dark fw-medium">${el[1]}</p>
</div>
`).join("")}
</div>

`
}



function checkAnswer(selectedIndex) {

console.log(selectedIndex);
    let questions = questionsData[currentQuestionIndex];
    let selectedAnswer = questions.answers[selectedIndex][0][0];

    if (selectedAnswer === questions.trueAnswer) {
        console.log("Doğru cevap!");
document.querySelector(`#cardd${selectedIndex}`).classList.remove("bg-dark-subtle");
document.querySelector(`#cardd${selectedIndex} div `).classList.remove("bg-secondary")
document.querySelector(`#cardd${selectedIndex}`).classList.add("bg-success");

    } else {
        console.log("Yanlış cevap.");
        document.querySelector(`#cardd${selectedIndex}`).classList.remove("bg-dark-subtle");
        document.querySelector(`#cardd${selectedIndex} div`).classList.remove("bg-secondary");
        document.querySelector(`#cardd${selectedIndex}`).classList.add("bg-danger");
      
    }


    setTimeout(() => {
        currentQuestionIndex++;

        if (currentQuestionIndex < questionsData.length) {
            renderAnswers();
        }
        else{
            
        }
    }, 700); 
 
}
// setInterval(checkAnswer,700)


renderAnswers()


// let currentQuestionIndex = 0;

// function renderAnswers() {
//     let questions = questionsData[currentQuestionIndex];
//     console.log(questions);

//     mainDiv.innerHTML = `
//         <div class="questionsDiv  bg-dark border-2 text-center mb-5 rounded-3 p-5 text-light">
//             <p id="questionNumber" class="h1 mb-4">Question ${currentQuestionIndex + 1}</p>
//             <p id="question h2" class="h3">${questions.desc}</p>
//         </div>
//         <div class="answersDiv d-flex w-100 gap-2 justify-content-between mt-5 text-light fs-4">
//             ${questions.answers.map((el, index) => `
//                 <div class="w-25  bg-dark-subtle rounded-3 overflow-hidden" id="card${index}" onclick="checkAnswer(${index})">
//                     <div class=" bg-secondary fs-3 p-2">${el[0]}</div>
//                     <p class="fs-4 p-2 text-dark fw-medium">${el[1]}</p>
//                 </div>
//             `).join("")}
//         </div>
//     `;
// }

// function checkAnswer(selectedIndex) {
//     let questions = questionsData[currentQuestionIndex];
//     let selectedAnswer = questions.answers[selectedIndex][0][0];

//     if (selectedAnswer === questions.trueAnswer) {
//         console.log("Doğru cevap!");
//         document.querySelector(`#card${selectedIndex}`).classList.remove("bg-dark-subtle");
//         document.querySelector(`#card${selectedIndex} div`).classList.remove("bg-secondary");
//         document.querySelector(`#card${selectedIndex}`).classList.add("bg-success");
//     } else {
//         console.log("Yanlış cevap.");
//         document.querySelector(`#card${selectedIndex}`).classList.remove("bg-dark-subtle");
//         document.querySelector(`#card${selectedIndex} div`).classList.remove("bg-secondary");
//         document.querySelector(`#card${selectedIndex}`).classList.add("bg-danger");
//     }

//     currentQuestionIndex++;
//     if (currentQuestionIndex < questionsData.length) {
//         renderAnswers();
//     }
// }

// renderAnswers();



startBtn.addEventListener('click', function(){
    beginningDiv.classList.add("d-none")
    mainDiv.classList.remove("d-none")
    renderAnswers()

})


























exitBtn.addEventListener("click",function(){
    window.close();
})
