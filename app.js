"use strict";

var answerOne = prompt('Is Portland any fun?');
if(answerOne.toLowerCase() === 'yes' || answerOne.toLowerCase() === 'y'){
    alert('Yeah, it can be pretty fun.');
}else{
    alert('I think it is sometimes.');
}
console.log(answerOne);
var answerTwo = prompt('Is Jacob allowed to attend the fun things in Portland?');
if(answerTwo.toLowerCase() === 'yes' || answerTwo.toLowerCase() === 'y'){
    alert("No. He's too young to get in.");
}else{
    alert(":(");
}
var answerThree = prompt('Does Jacob have houseplants?');
if(answerThree.toLowerCase() === 'yes' || answerThree.toLowerCase() === 'y'){
    alert("You're right, he's got one.");
}else{
    alert('No, he has one.');
}
var answerFour = prompt('Can Jacob watch four horror movies in a row?');
if(answerFour.toLowerCase() === 'yes' || answerFour.toLowerCase() === 'y'){
    alert("He hasn't proven that yet but he will keep trying.");
}else{
    alert("You're right but it's a work in progress.");
}
var answerFive = prompt("What's Jacob's favorite book store in Portland?");
if(answerFive.toLowerCase() === "Powell's" || answerFive.toLowerCase() === "Powell's City of Books"
    || answerFive.toLowerCase() === "powells"){
    alert('Yes.');
}else{
    alert('No.');
}