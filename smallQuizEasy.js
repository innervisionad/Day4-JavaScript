//You should use to build your solution
//An object constructor to create quiz objects
//Push objects into an array
//Use a For loop to rotate through the array and display the questions 
//onto the DOM
var event1 = document.getElementById("submit");
event1. addEventListener('click', checkAnswer, false);

var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var input4 = document.getElementById("input4");
var input5 = document.getElementById("input5");

function quizWindow(question, option1, option2, option3, option4){
    this.question = question;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.option4 = option4;
};
// create objects for the questions
var question1 = new quizWindow ("Question 1: In the Chamber of Secrets, Where does Harry end up after using using floo powder?", "A: Diagon Alley", "B: Gringotts Bank", "C: Knockturn Alley", "D: Ministry of Magic");

var question2 = new quizWindow ("Question 2: In the tri-wizard Tournament, What animal does victor Krum turn into to in the mermaid challenge?", "A: Jellyfish", "B: Shark", "C: Eel", "D: Butterfly");

var question3 = new quizWindow ("Question 3: In Umbridge's office, what animal is displayed all over the walls?", "A: Porcupines", "B: dogs", "C: frogs", "D: cats");

var question4 = new quizWindow ("Question 4: Which movie in the series does Snape die?", "A: Chamber of Secrets", "B: Half-blood Prince", "C: Deathly Hallow pt 1", "D: deathly Hallows pt 2");

var question5 = new quizWindow ("Question 5: What is the name of Ron Weaseley's pet rat?", "A: Crookshanks", "B: Malfoy", "C: Scabbers", "D: Hedwig");

//create array to hold questions
var questionArray = [];
//push objects into the array
questionArray.push(question1);
questionArray.push(question2);
questionArray.push(question3);
questionArray.push(question4);
questionArray.push(question5);

//put question1 on screen
document.getElementById("quest1").innerHTML = questionArray[0].question;

document.getElementById("answer1").innerHTML = questionArray[0].option1 + "<br>" + questionArray[0].option2 + "<br>" + questionArray[0].option3 + "<br>" + questionArray[0].option4;

//put question 2 on screen
document.getElementById("quest2").innerHTML = questionArray[1].question;

document.getElementById("answer2").innerHTML = questionArray[1].option1 + "<br>" + questionArray[1].option2 + "<br>" + questionArray[1].option3 + "<br>" + questionArray[1].option4;

//put question 3 on screen
document.getElementById("quest3").innerHTML = questionArray[2].question;

document.getElementById("answer3").innerHTML = questionArray[2].option1 + "<br>" + questionArray[2].option2 + "<br>" + questionArray[2].option3 + "<br>" + questionArray[2].option4;

//put question 4 on screen
document.getElementById("quest4").innerHTML = questionArray[3].question;

document.getElementById("answer4").innerHTML = questionArray[3].option1 + "<br>" + questionArray[3].option2 + "<br>" + questionArray[3].option3 + "<br>" + questionArray[3].option4;

//put question 5 on screen
document.getElementById("quest5").innerHTML = questionArray[4].question;

document.getElementById("answer5").innerHTML = questionArray[4].option1 + "<br>" + questionArray[4].option2 + "<br>" + questionArray[4].option3 + "<br>" + questionArray[4].option4;

var score = 0

function checkAnswer(){

var score = 0;
    
    if(input1.value == "C"){
        score ++;
    };
    if(input2.value == "B"){
        score ++;
    };
    if(input3.value == "D"){
        score ++;
    };
    if(input4.value == "D"){
        score ++;
    };
    if(input5.value == "C"){
        score ++;
    };
    document.getElementById("scores").innerHTML = "You got " + score + " correct!";

}