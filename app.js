'use strict';
// global tally variable
var tally = 0;
// arrays for yes/no answers
var questions = ['Is Portland any fun?', 'Is Jacob allowed to attend the fun things in Portland?',
    'Does Jacob have houseplants?', 'Can Jacob watch four horror movies in a row?',
    'What\'s Jacob\'s favorite book store in Portland?'];
var correctAns = ['yes', 'y', 'yeah', 'ye', 'sure', 'powells', 'powell\'s', 'powell\'s city of books'];
var responsesPos = ['Yeah, it can be pretty fun', 'No. He\'s too young to get in.', 'You\'re right, he has one',
    'He hasn\'t proven that but he\'s working on it', 'Yes.'];
var responsesNeg = ['I think it is sometimes.', ':(', 'No, he has one',
    'You\'re right but it\'s a work in progress', 'No.'];
// questions 1-5 in array form
for(var i = 0; i < 5; i++){
    var answer = prompt(questions[i]);
    if(correctAns.includes(answer.toLowerCase())){
        alert(responsesPos[i]);
        if(i === 0 || i === 2 || i === 4){
            tally++;
        }
    }else{
        alert(responsesNeg[i]);
        if(i === 1 || i === 3){
            tally++;
        }
    }
}
// sixth question: evaluates numerical input, responds accordingly
var correctNum = Math.floor(Math.random() * 10);
var answerSix = prompt('How many hours of sleep does Jacob get on average?');
if(answerSix != correctNum){
    for(var m = 0; m < 6; m++){
        if(answerSix < correctNum){
            alert('higher. ' + (5 - m) + ' guess(es) left.');
            answerSix = prompt('How many hours of sleep does Jacob get on average?');
        }else if (answerSix > correctNum){
            alert('lower. ' + (5 - m) + ' guess(es) left.');
            answerSix = prompt('How many hours of sleep does Jacob get on average?');
        }else{
            alert('Correct!');
            tally++;
            break;
        }
    }
}else{
    alert('Correct!');
    tally++;
}
// seventh question: compares string input to contents of array, responds accordingly
var answerSeven = prompt('What\'s one of Jacob\'s favorite genres of music?');
var favGenres = ['folk', 'punk', 'blues', 'ambient'];
if(!favGenres.includes(answerSeven.toLowerCase())){
    for(var r = 0; r < 6; r++){
        alert('Try again, ' + (5 - r) + ' guess(es) left.');
        answerSeven = prompt('What\'s one of Jacob\'s favorite genres of music?');
        if(favGenres.includes(answerSeven.toLowerCase())){
            alert('That\'s one of them!');
            tally++;
            break;
        }
    }
}else{
    alert('That\'s one of them!');
    tally++;
}
// tells user how many questions they answered correctly
if(tally === 7){
    alert('Your score is: ' + tally + '. You are an expert on Jacob.');
}else if(tally >= 5){
    alert('Your score is: ' + tally + '. You pass this test.');
}else if(tally < 5){
    alert('Your score is: ' + tally + '. Keep studying.');
}else if(tally === 0){
    alert('Your score is: ' + tally + '. You do not know me.');
} 