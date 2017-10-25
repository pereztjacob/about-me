'use strict';

// Basic single prompt, single response questions.
var answerOne = prompt('Is Portland any fun?');
if(answerOne.toLowerCase() === 'yes' || answerOne.charAt(0) === 'y'
    || answerOne.charAt(0) === 'Y'){
    alert('Yeah, it can be pretty fun.');
}else if(answerOne.toLowerCase() === ''){
    alert('NO RESPONSE');
}else{
    alert('I think it is sometimes.');
}
console.log(answerOne);
var answerTwo = prompt('Is Jacob allowed to attend the fun things in Portland?');
if(answerTwo.toLowerCase() === 'yes' || answerTwo.toLowerCase() === 'y'){
    alert('No. He\'s too young to get in.');
}else if(answerTwo.toLowerCase() === ''){
    alert('NO RESPONSE');
}else{
    alert(':(');
}
var answerThree = prompt('Does Jacob have houseplants?');
if(answerThree.toLowerCase() === 'yes' || answerThree.toLowerCase() === 'y'){
    alert('You\'re right, he\'s got one.');
}else if(answerThree.toLowerCase() === ''){
    alert('NO RESPONSE');
}else{
    alert('No, he has one.');
}
var answerFour = prompt('Can Jacob watch four horror movies in a row?');
if(answerFour.toLowerCase() === 'yes' || answerFour.toLowerCase() === 'y'){
    alert('He hasn\'t proven that yet but he will keep trying.');
}else if(answerFour.toLowerCase() === ''){
    alert('NO RESPONSE');
}else{
    alert('You\'re right but it\'s a work in progress.');
}
var answerFive = prompt('What \' s Jacob \' s favorite book store in Portland?');
if(answerFive.toLowerCase() === 'Powell\'s' || answerFive.toLowerCase() === 'Powell\'s City of Books'
    || answerFive.toLowerCase() === 'powells' || answerFive.toLowerCase() === 'powell\'s'){
    alert('Yes.');
}else if(answerFive.toLowerCase() === ''){
    alert('NO RESPONSE');
}else{
    alert('No.');
}

/* A question gathering numeric input from user.
    Allows 6 guesses, informs user whether guesses are too high or too low. */
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
            alert('Correct!')
            break;
        }
    }
}else{
    alert('Correct!');
}

var answerSeven = prompt('What are Jacob\'s favorite genres of music?');
var favGenres = ['folk', 'punk', 'blues', 'ambient'];
