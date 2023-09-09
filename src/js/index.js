//-----------------Questions-------------------------------
  let questionsData = [
    {
              desc: "What is the role of a front-end developer in a web development team?",
              answers: [
                ["A)"," Writing server-side code"],
                ["B)"," Managing databases"],
                ["C)"," Designing user interfaces"],
              ],
              trueAnswer: "C",
            },
    {
      desc: "What does the CSS property 'z-index' control?",
      answers: [
        ["A)", "Font size"],
        ["B)", "Element's position in the z-axis"],
        ["C)", "Border thickness"],
      ],
      trueAnswer: "B",
    },
    {
      desc: "Which JavaScript method is used to add an element to the end of an array?",
      answers: [
        ["A)", "push()"],
        ["B)", "append()"],
        ["C)", "addToEnd()"],
      ],
      trueAnswer: "A",
    },
    {
      desc: "What is the 'box-sizing' CSS property used for?",
      answers: [
        ["A)", "Changing the text color"],
        ["B)", "Adjusting the box model calculation"],
        ["C)", "Setting the background image"],
      ],
      trueAnswer: "B",
    },
    {
      desc: "What does HTML stand for?",
      answers: [
        ["A)"," Hyper Transfer Markup Language"],
        ["B)","Hyperlink and Text Markup Language"],
        ["C)","Hyper Text Markup Language"],
      ],
      trueAnswer: "C",
    },
    {
      desc: "What is the purpose of 'localStorage' in JavaScript?",
      answers: [
        ["A)", "To store data temporarily on the server"],
        ["B)", "To store data in the browser for future use"],
        ["C)", "To store data in a remote database"],
      ],
      trueAnswer: "B",
    },
    {
      desc: "Which CSS pseudo-class is used to select elements when they are in focus?",
      answers: [
        ["A)", ":hover"],
        ["B)", ":active"],
        ["C)", ":focus"],
      ],
      trueAnswer: "C",
    },
    {
      desc: "What does the 'async' attribute in a script tag do?",
      answers: [
        ["A)", "Loads the script in parallel with HTML parsing"],
        ["B)", "Blocks rendering of the page until the script is loaded"],
        ["C)", "Loads the script synchronously"],
      ],
      trueAnswer: "A",
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
      desc: "Which CSS property is used to add shadow to text?",
      answers: [
        ["A)", "text-shadow"],
        ["B)", "box-shadow"],
        ["C)", "shadow-text"],
      ],
      trueAnswer: "A",
    },
  ];
 
//--------Function to display questions on the UI side--------------------------------

let  currentQuestionIndex=0;
let yourScore=0;

function renderAnswers(){


  let questions = questionsData[currentQuestionIndex];




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

// console.log(selectedIndex);
    let questions = questionsData[currentQuestionIndex];
    let selectedAnswer = questions.answers[selectedIndex][0][0];

    if (selectedAnswer === questions.trueAnswer) {
        yourScore++;
        // console.log("Right answer!");
document.querySelector(`#card${selectedIndex}`).classList.remove("bg-dark-subtle");
document.querySelector(`#card${selectedIndex} div `).classList.remove("bg-secondary")
document.querySelector(`#card${selectedIndex}`).classList.add("bg-success");

    } else {
        // console.log("Wrong answer");
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

