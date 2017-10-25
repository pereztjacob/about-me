'use strict';
// global tally variable
var tally = 0;
// first question
var answerOne = prompt('Is Portland any fun?');
if(answerOne.toLowerCase() === 'yes' || answerOne.charAt(0) === 'y'
    || answerOne.charAt(0) === 'Y'){
    alert('Yeah, it can be pretty fun.');
    tally++;
}else if(answerOne.toLowerCase() === ''){
    alert('NO RESPONSE');
}else{
    alert('I think it is sometimes.');
}
// second question
var answerTwo = prompt('Is Jacob allowed to attend the fun things in Portland?');
if(answerTwo.toLowerCase() === 'yes' || answerTwo.toLowerCase() === 'y'){
    alert('No. He\'s too young to get in.');
}else if(answerTwo.toLowerCase() === ''){
    alert('NO RESPONSE');
}else{
    alert(':(');
    tally++;
}
// third question
var answerThree = prompt('Does Jacob have houseplants?');
if(answerThree.toLowerCase() === 'yes' || answerThree.toLowerCase() === 'y'){
    alert('You\'re right, he\'s got one.');
    tally++;
}else if(answerThree.toLowerCase() === ''){
    alert('NO RESPONSE');
}else{
    alert('No, he has one.');
}
// fourth question
var answerFour = prompt('Can Jacob watch four horror movies in a row?');
if(answerFour.toLowerCase() === 'yes' || answerFour.toLowerCase() === 'y'){
    alert('He hasn\'t proven that yet but he will keep trying.');
}else if(answerFour.toLowerCase() === ''){
    alert('NO RESPONSE');
}else{
    alert('You\'re right but it\'s a work in progress.');
    tally++;
}
// fifth question
var answerFive = prompt('What \' s Jacob \' s favorite book store in Portland?');
if(answerFive.toLowerCase() === 'Powell\'s' || answerFive.toLowerCase() === 'Powell\'s City of Books'
    || answerFive.toLowerCase() === 'powells' || answerFive.toLowerCase() === 'powell\'s'){
    alert('Yes.');
    tally++;
}else if(answerFive.toLowerCase() === ''){
    alert('NO RESPONSE');
}else{
    alert('No.');
}
// sixth question: evaluates numerical input, responds accordingly
var answerSix = prompt('How many hours of sleep does Jacob get on average?');
if(answerSix != 6){
    for(var i = 0; i < 6; i++){
        if(answerSix < 6){
            alert('higher. ' + (5 - i) + ' guess(es) left.');
            answerSix = prompt('How many hours of sleep does Jacob get on average?');
        }else if (answerSix > 6){
            alert('lower. ' + (5 - i) + ' guess(es) left.');
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
if(!favGenres.includes(answerSeven)){
    for(var r = 0; r < 6; r++){
        alert('Try again, ' + (5 - r) + ' guess(es) left.');
        answerSeven = prompt('What\'s one of Jacob\'s favorite genres of music?');
        if(favGenres.includes(answerSeven)){
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
    alert('Your score is: ' + tally + '. You are an expert on Jacob');
}else if(tally >= 5){
    alert('Your score is: ' + tally + '. You pass this test.');
}else if(tally < 5){
    alert('Your score is: ' + tally + '. Keep studying.');
}else if(tally === 0){
    alert('Your score is: ' + tally + '. You do not know me.');
}