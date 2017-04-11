'use strict'
$(document).ready(function () {
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
                    question: "How successful are wolves when they go to hunt?",
                    choices: ["10% of the time", "25% of the time", "50% of the time", "60% of the time"],
                    correct: 0,
                    explanation: "Wolves are only successful hunting 1 out of every 10 times, 10%",
                },
                {
                    question: "What is the jaw power of a gray wolf in pounds per square inch?",
                    choices: ["500psi", "750psi", "1500psi", "2000psi"],
                    correct: 2,
                    explanation: "Wolves have 1500psi jaw power, compared to German Shepherds with 750psi",
                },
                {
                    question: "How many pounds of meat can wolves consumer in a single feeding?",
                    choices: ["5 lbs", "10 lbs", "15 lbs", "20 lbs"],
                    correct: 3,
                    explanation: "Wolves can consume up to 20 lbs of meating in a single feeding",
                },
                {
                    question: "How many species of wolves are there in the world?",
                    choices: ["1", "3", "5", "7"],
                    correct: 1,
                    explanation: "There are 3 species of wolves in the world: Gray wolf, red wolf, and Ethiopian wolf",
                },
                {
                    question: "Which of the following is a subspecies of the gray wolf?",
                    choices: ["Coyotes", "Coywolf", "Mexican Gray Wolf", "Fox"],
                    correct: 2,
                    explanation: "Mexican Gray wolves are subspecies of the gray wolf",
                }
            ]
        };

        //question counter
        var currentQuestion = 0;
        //score counter
        var score = 0;
    )
    //loop through the questions 1 at a time no skipping
var displayQuestion = function () {
        for (var i = 0; i < quiz.length; i++) {
            /*code to display and loop through questions and choices and display # from question counter*/
            //append function to html
            var question = "<p>" + quiz.question[i] + "</p>"
            $('#questions').html(question);
            currentQuestion++
        }
    }
    //user selects choice

//user selects submit answer button

//check if answer is correct
var score = function () {
        //if correct add one to score
        if (choice === correct) {
            score += 1;
            //if not correct do not add one to the score and show explanation
        } else {
            score += 0;
        }
    }
    /*Once quiz is complete show overall score and give restart quiz button*/
