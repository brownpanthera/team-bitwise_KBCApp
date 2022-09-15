const span = document.querySelector("span");

function clock() {
  let sec = 0;
  setInterval(() => {
    span.innerText = "00: " + sec;

    if (sec < 5) {
      sec++;
    } else if (sec == 5) {
      span.innerText = "";
    }
  }, 1000);
}

clock();

let quiz = {
  quizData: function(){
    fetch("https://the-trivia-api.com/api/questions?limit=10&region=IN&difficulty=easy")
    .then((res) => res.json())
    .then((data) => this.diplayQuestions(data));

  },

  diplayQuestions: function(data){
    const { question } = data[0];
    const { correctAnswer } = data[0];
    const { incorrectAnswers } = data[0];


    let opt1 = incorrectAnswers[0];
    let opt2 = incorrectAnswers[1];
    let opt3 = incorrectAnswers[2];
    let opt4 = correctAnswer;


    let options = [opt1,opt2,opt3,opt4];
    let randomOptions = [];

    
    for (let i = 0; i < 4; i++) {
        let index = Math.floor(Math.random() * options.length);
        randomOptions.push(options[index]);
         options.splice(index, 1);
    }

    let ques = document.querySelector(".question");
    let o1 = document.querySelector(".op1");
    let o2 = document.querySelector(".op2");
    let o3 = document.querySelector(".op3");
    let o4 = document.querySelector(".op4");

    ques.innerText = "Q:" + " " + question;
    o1.innerText = randomOptions[0];
    o2.innerText =  randomOptions[1];
    o3.innerText =  randomOptions[2];
    o4.innerText =  randomOptions[3];

    o1.addEventListener('click', function(){
        if(o1.innerText == correctAnswer){
           o1.style.backgroundColor  = "green";
           o1.style.color = "white";  
        }
        else{
            o1.style.backgroundColor  = "red";
            o1.style.color = "white";
        }
        // quiz.quizData();
    //  o1.style.backgroundColor  = "white";
    //  o1.style.color = "black";  
    })

    o2.addEventListener('click', function(){
        if(o2.innerText == correctAnswer){
            o2.style.backgroundColor  = "green";
            o2.style.color = "white";
         }
         else{
             o2.style.backgroundColor  = "red";
             o2.style.color = "white";
         }
        //  quiz.quizData();
    })
    
    o3.addEventListener('click', function(){
        if(o3.innerText == correctAnswer){
            o3.style.backgroundColor  = "green";
            o3.style.color = "white";
         }
         else{
             o3.style.backgroundColor  = "red";
             o3.style.color = "white";
         }
        //  quiz.quizData();
    })

    o4.addEventListener('click', function(){
        if(o4.innerText == correctAnswer){
            o4.style.backgroundColor  = "green";
            o4.style.color = "white";
         }
         else{
             o4.style.backgroundColor  = "red";
             o4.style.color = "white";
         }
        //  quiz.quizData();
    })

  },
  

 

};


// quiz.
let op1 = document.querySelector(".op1");
let op2 = document.querySelector(".op2");
let op3 = document.querySelector(".op3");
let op4 = document.querySelector(".op4");



let interval = setInterval(() => {
  quiz.quizData();
  
op1.style.backgroundColor = "white";
op1.style.color = "black";

op2.style.backgroundColor = "white";
op2.style.color = "black";

op3.style.backgroundColor = "white";
op3.style.color = "black";

op4.style.backgroundColor = "white";
op4.style.color = "black";
clock();
}, 5000);

setTimeout(() => {
    clearInterval(interval);
    // window.location = "/assets/result.html";
}, 75000);


quiz.quizData();