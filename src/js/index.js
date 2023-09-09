//-----------------Questions-------------------------------

let questionsData= [
    {
      desc: "What does HTML stand for?",
      answers: [
        ["A)"," Hyper Transfer Markup Language"],
        ["B)"," Hyper Text Markup Language"],
        ["C)"," Hyperlink and Text Markup Language"],
      ],
      trueAnswer: "B",
    },
    {
      desc: "Which programming language is primarily used for front-end web development?",
      answers: [
        ["A)"," Python"],
        ["B)"," JavaScript"],
        ["C)"," Java"],
      ],
      trueAnswer: "B",
    },
    {
      desc: "What is the purpose of CSS in web development?",
      answers: [
        ["A)"," To create dynamic web pages"],
        ["B)"," To define the structure of a web page"],
        ["C)"," To style the appearance of a web page"],
      ],
      trueAnswer: "C",
    },
    {
      desc: "Which tool is commonly used for version control in front-end development?",
      answers: [
        ["A)"," Photoshop"],
        ["B)"," Git"],
        ["C)"," Visual Studio Code"],
      ],
      trueAnswer: "B",
    },
    {
      desc: "What is the role of a front-end developer in a web development team?",
      answers: [
        ["A)"," Writing server-side code"],
        ["B)"," Designing user interfaces"],
        ["C)"," Managing databases"],
      ],
      trueAnswer: "B",
    },
  ];
 
//--------Function to display questions on the UI side--------------------------------

let  currentQuestionIndex=0;
let yourScore=0;

function renderAnswers(){


  let questions = questionsData[currentQuestionIndex];

console.log(questions);



  mainDiv.innerHTML= ` <div class="w-100  bg-primary-subtle rounded-3 mb-5  " id="progressBar"><div class="bg-success rounded-3" style="width: calc(${((currentQuestionIndex)/questionsData.length)*100}%); height: 20px;"></div></div><div class="questionsDiv  bg-dark border-2 text-center mb-5 rounded-3 p-5 text-light" >
<p id="questionNumber" class="fs-sm-1 fs-xs-3 mb-4">Question ${ currentQuestionIndex+1}</p>
<p id="question h2" class="h3">${questions.desc}</p>

</div>

<div class="answersDiv row-1  d-flex w-100  p-2 justify-content-sm-between justify-content-center gap-2 gap-sm-0  mt-5 text-light fs-4">
${questions.answers.map((el,index)=>`
<div class="  col-sm-3 col-4 myAnswerCards  bg-dark-subtle rounded-3 overflow-hidden" id="card${index}" onclick="checkAnswer(${index})">
    <div class=" bg-secondary fs-4 p-2">${el[0]}</div>
    <p class="fs-5  p-1 text-dark fw-medium">${el[1]}</p>
</div>
`).join("")}
</div>

`
}

//-------------Function for checking the answers-------------------------------

function checkAnswer(selectedIndex) {

console.log(selectedIndex);
    let questions = questionsData[currentQuestionIndex];
    let selectedAnswer = questions.answers[selectedIndex][0][0];

    if (selectedAnswer === questions.trueAnswer) {
        yourScore++;
        console.log("Right answer!");
document.querySelector(`#card${selectedIndex}`).classList.remove("bg-dark-subtle");
document.querySelector(`#card${selectedIndex} div `).classList.remove("bg-secondary")
document.querySelector(`#card${selectedIndex}`).classList.add("bg-success");

    } else {
        console.log("Wrong answer");
        document.querySelector(`#card${selectedIndex}`).classList.remove("bg-dark-subtle");
        document.querySelector(`#card${selectedIndex} div`).classList.remove("bg-secondary");
        document.querySelector(`#card${selectedIndex}`).classList.add("bg-danger");
      
    }


    setTimeout(() => {
        currentQuestionIndex++;

        if (currentQuestionIndex < questionsData.length) {
            renderAnswers();
        }
        else{
            mainDiv.classList.add("d-none");
            endDiv.classList.remove("d-none");
            score.innerHTML=`${yourScore}/${questionsData.length}`
        }
    }, 500); 
 
}
//-----Was called here to show the first question on the screen--------
renderAnswers()



//----- Functions for Start Restart and Exit buttons--------------------
startBtn.addEventListener('click', function(){
    beginningDiv.classList.add("d-none")
    mainDiv.classList.remove("d-none")
    renderAnswers()

})
restart.addEventListener('click', function(){
    yourScore=0;
    mainDiv.classList.remove("d-none");
    endDiv.classList.add("d-none");
    currentQuestionIndex=0;

    renderAnswers()

});

exitBtn.forEach(el=> el.addEventListener('click', function(){
    window.close();
}))
//--------------The End--------------------------------------------------

