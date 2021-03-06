'use strict'

/*************  STEP 1
variables, objects and functions definitions
*************************/

//object of questions
var quiz = [
    {
        question: "What is a family of wolves that live together often named?",
        choices: ["Flock", "Pack", "Herd", "Pod"],
        correct: 1,
        explanation: "A group of wolves is often referred to as a pack",
    },
    {
        question: "How do wolves communicate with each other?",
        choices: ["Howling", "Scent marking", "Body posture", "All of the above"],
        correct: 3,
        explanation: "All of the above are ways wolves use to communicate with each other!",
    },
    {
        question: "Why do wolves live together as a family?",
        choices: ["To maintain their territory", "To raise the family", "To be efficient hunters", "All of the above"],
        correct: 3,
        explanation: "Wolves need each other to maintain their territory, help raise the pups, and to effectively hunt",
    },
    {
        question: "A wolf strongest sense is their:",
        choices: ["Sight", "Hearing", "Smell", "Taste"],
        correct: 2,
        explanation: "Wolves have over 200 million olfactory cells in their nose compared to a human who has only 5 million!",
    },
    {
        question: "Wolves are considered to be:",
        choices: ["Carnivores", "Carbivores", "Omnivores", "Herbivores"],
        correct: 0,
        explanation: "Wolves are carnivores and rely on meat as their primary food source",
    },
    {
        question: "Approximately how successful are wolves when they go to hunt?",
        choices: ["10% of the time", "25% of the time", "50% of the time", "60% of the time"],
        correct: 0,
        explanation: "Wolves are successful in hunting approximately 1 out of every 10 times, 10%",
    },
    {
        question: "How much stronger is a wolf jaw compared to a domesticated dog?",
        choices: ["about the same", "twice as strong", "five times stronger", "it is unknown"],
        correct: 1,
        explanation: "Wolves have twice as much jaw power, compared to domesicated dogs",
    },
    {
        question: "How many pounds of meat can wolves consume in a single feeding?",
        choices: ["5 lbs", "10 lbs", "15 lbs", "20 lbs"],
        correct: 3,
        explanation: "Wolves can consume up to 20 lbs of meating in a single feeding",
    },
    {
        question: "How many species of wolves are there in the world?",
        choices: ["1", "3", "5", "7"],
        correct: 1,
        explanation: "There are 3 species of wolves in the world: the gray wolf, the red wolf and the Ethiopian wolf",
    },
    {
        question: "Which of the following is a subspecies of the gray wolf?",
        choices: ["Coyotes", "Coywolf", "Mexican Gray Wolf", "Fox"],
        correct: 2,
        explanation: "Mexican Gray wolves are subspecies of the gray wolf",
    }
];


//question counter
var currentQuestion = 0;
//score counter
var score = 0;

//loop through the questions 1 at a time no skipping
function displayQuestion() {

    /*code to display and loop through questions and choices and display # from question counter*/
    //append function to html
    var question = "<p>" + quiz[currentQuestion].question + "</p>";
    $('#questions').html(question);
    var choices = "";
    for (var i = 0; i < quiz[currentQuestion].choices.length; i++) {
        //append choices to the question label add so user can click on radio button or word next to button
        choices += "<label><input type='radio' name='choice' class='option' value='" + i + "'>" + quiz[currentQuestion].choices[i] + "</label>";
    }
    $('#choices').html(choices);
    var showScore = "<p>Your score so far: " + score + "</p>";
    $('#score').html(showScore);
    var showCurrentQuestionNumber = "<p>Question " + (currentQuestion + 1) + " out of " + quiz.length + "</p>";
    $('#showCurrentQuestionNumber').html(showCurrentQuestionNumber);
}


/*************  STEP 2
functions usage and triggers
*************************/

//display the questions
$(document).ready(function () {
    $('.quiz').hide();
    $('.results').hide();

    /*Begin the Quiz shows first question*/
    $('#begin-button').click(function () {
        $('.begin').hide();
        $('.results').hide();
        $('.quiz').show();
        displayQuestion();
    });


    /*User makes selection by clicking on radio button to advance to next question*/
    $('.quiz').on('click', '.option', function () {

        var userSelection = $("input[class='option']:checked").val();
        var correctSelection = quiz[currentQuestion].correct;
        if (userSelection == correctSelection) {
            score++;
        }
        //results container and display question and explanation
        $('#resultsMessage').append("<h3> Q: " + quiz[currentQuestion].question + "<h3>");
        $('#resultsMessage').append("<h4> A: " + quiz[currentQuestion].explanation + "<h4>");


        /*Checks results of choice selected by user*/
        if ((currentQuestion + 1) == quiz.length) {
            console.log('hello');
            $('#finalScore').html("<p>Your final score is " + score + " out of " + quiz.length + "</p>");
            $('.quiz').hide();
            $('.begin').hide();
            $('.results').show();
            //if all quiz questions have not displayed, show the next question
        } else {
            currentQuestion++;
            displayQuestion();
        };
    });

    $('#startOver').click(function () {
        location.reload();
    });
});
