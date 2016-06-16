var event1 = document.getElementById("start");
event1.addEventListener('click', startGame, false);

function quizWindow(question, option1, option2, option3, option4, answer){
    this.question = question;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.option4 = option4;
    this.answer = answer;
};
// create objects for the questions
var question1 = new quizWindow ("Question 1: In the Chamber of Secrets, Where does Harry end up after using using floo powder?", "A: Diagon Alley", "B: Gringotts Bank", "C: Knockturn Alley", "D: Ministry of Magic", "C");

var question2 = new quizWindow ("Question 2: In the tri-wizard Tournament, What animal does victor Krum turn into to in the mermaid challenge?", "A: Jellyfish", "B: Shark", "C: Eel", "D: Butterfly", "B");

var question3 = new quizWindow ("Question 3: In Umbridge's office, what animal is displayed all over the walls?", "A: Porcupines", "B: dogs", "C: frogs", "D: cats", "D");

var question4 = new quizWindow ("Question 4: Which movie in the series does Snape die?", "A: Chamber of Secrets", "B: Half-blood Prince", "C: Deathly Hallow pt 1", "D: deathly Hallows pt 2", "D");

var question5 = new quizWindow ("Question 5: What is the name of Ron Weaseley's pet rat?", "A: Crookshanks", "B: Malfoy", "C: Scabbers", "D: Hedwig", "C");

//create array to hold questions
var questionArray = [];
//push objects into the array
questionArray.push(question1);
questionArray.push(question2);
questionArray.push(question3);
questionArray.push(question4);
questionArray.push(question5);

document.getElementById("radial").style.display = "none";

function startGame() {
document.getElementById("radial").style.display = "block";
   
    
    
    
    
    
    
    
    
    
    
}
