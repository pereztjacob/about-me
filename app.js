'use strict';

let tally = 0;

const questions = ['Is Portland any fun?' , 'Is Jacob allowed to attend the fun things in Portland?' , 'Does Jacob have house plants?' , 'Can Jacob watch four horror movies in a row' , 'What\'s Jacob\'s favorite book store in town?' ];

const correctAns = ['yes' , 'no', 'yes' , 'no' , 'Powells' , 'y' , 'n' , 'y' , 'n' , 'powell\'s'];

const responsePos = ['Yah, it can be pretty fun' , ':(' , 'Yes, he has one.' , 'You\'re right but it is a work in progress.' , 'Correct.' ];

const responseNeg = ['I think it is' , 'No, he\'s too young to get in.' , 'No, he does have one.' , 'He has not proven that yet but he will keep trying.' , 'Incorrect'];


function askQuestion (i) {
    const answer = prompt(questions[i]);
    if (correctAns[i] === answer.toLowerCase() || correctAns[i + 5] === answer.toLowerCase() ){
        alert(responsePos[i]);
        if (i === 0 || i === 2 || i === 4){
            tally++;
        }
    } else {
        alert(responseNeg[i]);
        if (i === 1 || i === 3) {
            tally++;
        }
    }
}

for (let i = 0; i < 5; i++) {
    askQuestion(i);
}

alert('Your score is ' + tally);