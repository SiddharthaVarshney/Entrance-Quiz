class Quiz {
    constructor(questions, reward) {
        this.reward= reward;
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score +=this.reward;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

// Create a question Class
class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

// NOW DISPLAY THE QUESTIONS
var fianlScore = 0;
function displayQuestion(count, quizElement, hasNext, next) {
    QuizNumber(count);
    if (quizElement.isEnded()) {
        fianlScore += quizElement.score;
        if(hasNext){
            clearInterval(quizTimer1);
            countDown2(15);
            displayQuestion(2, quiz2, false, null);
        }
        else{
            clearInterval(quizTimer2);
            countDown3(8);
            displayLogoQuestion();
        }
    } else {
        // show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quizElement.getQuestionIndex().text;

        // show options
        let choices = quizElement.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i], count, quizElement, hasNext, next);
        }

        showProgress(quizElement);
    }
};

function displayLogoQuestion(){
    QuizNumber(3);
    if (quiz3.isEnded()) {
        fianlScore += quiz3.score;
        showScores();
    }else{
        // show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = `<img src='${quiz3.getQuestionIndex().text}' style='width:50%; display:block; margin-left:auto; margin-right:auto'></img>`;

        // show options
        let choices = quiz3.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess2("btn" + i, choices[i]);
        }
        showProgress(quiz3);
    }
}

// Quiz Number
function QuizNumber(Count){
    let quizNumber = document.getElementById("quiz-num");
    quizNumber.innerHTML = `Quiz- ${Count}`;
}

// GUESS ANSWER
function guess(id, guess, count, quizElement, hasNext, next) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quizElement.guess(guess);
        displayQuestion(count, quizElement, hasNext, next);
    }
};
function guess2(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz3.guess(guess);
        displayLogoQuestion();
    }
};

// SHOW QUIZ PROGRESS
function showProgress(quizElement) {
    let currentQuestionNumber = quizElement.questionIndex + 1;
    let ProgressElement = document.getElementById("progress");
    ProgressElement.innerHTML =
        `Question ${currentQuestionNumber} of ${quizElement.questions.length}`;
};


// SHOW SCORES
function showScores() {
    var passed="Mission Passed!",result="";
    if(fianlScore > 9.5){
        result="Admitted in Vellore";
    }else if(fianlScore > 7.5){
        result="Admitted in Chennai";
    }else if(fianlScore > 6.5){
        result="Admitted in Amravati";
    }
    else{
        passed="Mission Failed! Not admitted";
    }
    let quizEndHTML =
        `
    <h1>Quiz Completed</h1>
    <h2 class='score'> Your scored: ${fianlScore}</h2>
    <h2 class='score'> ${passed}</h2>
    <h2 class='score'> ${result}</h2>
    <div class="quiz-repeat">
        <a href="quiz.html">Take Quiz Again</a>
    </div>
    `;
    let quizElemnt = document.getElementById("quiz");
    quizElemnt.innerHTML = quizEndHTML;
};

// create questions here
let questions1 = [
    new Question(
        "What is the color of sky?", ["Black", "Blue", "Orange", "Pink"], "Blue"
    ),
    new Question(
        "What is the hardest substance on earth?", ["Diamond", "Stone", "Sand", "Obsedian"], "Diamond"
    ),
    new Question(
        "What is the process of converting liquid to gas?", ["Evaporation", "Condensation", "Water Cycle", "Ostentation"], "Evaporation"
    ),
    new Question(
        "How long does it take to a person to die from asphyxiation?", ["1-2", "4-5", "10-12", "20-24"], "4-5"
    ),
    new Question(
        "Which one of these are a non-newtonian fluid?", ["Selenium", "Borax", "Honey", "Mercury"], "Honey"
    ),
    new Question(
        "what are the 3 primary colors?", ["Red-Blue-Green", "Red-Green-Yellow", "Red-White-Black", "Red-Blue-Yellow"], "Red-Blue-Yellow"
    ),
    new Question(
        "How many states of matter exist?", ["1", "2", "3", "4"], "3"
    ),
    new Question(
        "What is the Color of leaves?", ["Red", "Black", "Green", "Brown"], "Green"
    ),
    new Question(
        "What is the biggest mammal on earth?", ["Elephant", "Tiger", "Human", "Whale"], "Whale"
    ),
    new Question(
        "What is the fastest animal on earth?", ["Tiger", "Lion", "Cheetah", "Rabbit"], "Cheetah"
    )
];

let questions2 = [
    new Question(
      "Who is the current Prime Minister of India?", ["Pratibha Patil", "Narendra Modi", "Pranab Mukherjee", "Rahul Gandhi"], "Narendra Modi"  
    ),
    new Question(
      "Who is the current President of India?", ["Ranjendra Prasad", "Ram Nath Kovind", "Yashwant Sinha", "Droupadi Murmu"], "Droupadi Murmu"  
    ),
    new Question(
      "Who is the father of the nation?", ["Mahatma Gandhi", "Jawaharlal Nehru", "Subash Chandra Bose", "Vallabhbhai Patel"], "Mahatma Gandhi"  
    ),
    new Question(
      "What is the national bird of India?", ["Eagle", "Crow", "Peacock", "Parrot"], "Peacock"  
    ),
    new Question(
      "What is the national animal of India?", ["Tiger", "Cheetah", "Lion", "Elephant"], "Tiger"  
    )
];

let questions3 = [
    new Question(
        "images/img1.jfif", ["Dew", "CocaCola", "Pepsi", "Sprite"], "Dew"
    ),
    new Question(
        "images/img2.jfif", ["Abibas", "Abidas", "Adidas", "Adibi"], "Adidas"
    ),
    new Question(
        "images/img3.jfif", ["Google", "Chrome", "Youtube", "FaceBook"], "Google"
    ),
    new Question(
        "images/img4.jfif", ["Insta", "Snapchat", "FaceBook", "Youtube"], "Insta"
    ),
    new Question(
        "images/img5.jfif", ["Gucci", "CocaCola", "Adidas", "Nike"], "Nike"
    )
];

// INITIALIZE quiz
let quiz1 = new Quiz(questions1, 2);
let quiz2 = new Quiz(questions2, 2);
let quiz3 = new Quiz(questions3, 4)

// display questions
displayQuestion(1, quiz1, true, quiz2);


// Add A CountDown for the Quiz
let counting = document.getElementById("count-down");

var quizTimer1, quizTimer2, quizTimer3;

function countDown1(time) {
    let quizTimeInMinutes = time * 60 * 60;
    let quizTime = quizTimeInMinutes / 60;
    quizTimer1 = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer1);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME: ${min} : ${sec}`;
        }
    }, 1000);
}
function countDown2(time) {
    let quizTimeInMinutes = time * 60 * 60;
    let quizTime = quizTimeInMinutes / 60;
    quizTimer2 = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer2);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME: ${min} : ${sec}`;
        }
    }, 1000);
}
function countDown3(time) {
    let quizTimeInMinutes = time * 60 * 60;
    let quizTime = quizTimeInMinutes / 60;
    quizTimer3 = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer3);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME: ${min} : ${sec}`;
        }
    }, 1000);
}
countDown1(15);