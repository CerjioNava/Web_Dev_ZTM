// SANTA CHALLENGE

import fs from 'fs';

// Question 1:

function question1() {
    fs.readFile('./input.txt', (err, data) => {
        console.time('Question 1')

        const input = data.toString();
        const inputArray = input.split('');

        //Primera idea: 
        // let floor = 0;
        // inputArray.forEach(input => {
        //     if (input === '(')
        //         floor++;
        //     else 
        //         floor--;
        // });
        // console.log('Floor: ', floor);     //232

        // Segunda idea: 
        const answer = inputArray.reduce((acc, input) => {
            if (input === '(') 
                return acc += 1; 
            else 
                return acc -= 1;
        }, 0);
        console.log('Floor: ', answer);

        console.timeEnd('Question 1')
    });
}
question1();

// Question 2:
function question2() {
    fs.readFile('./input.txt', (err, data) => {
        console.time('Question 2')

        const input = data.toString();
        const inputArray = input.split('');
        let acc = 0;
        let counter = 0;

        const answer = inputArray.some((currentItem) => {
            if (currentItem === '(') 
                acc += 1; 
            else 
                acc -= 1;
            counter++;
            return acc < 0 ;
        });
        console.log('Basement reached at: ', counter);

        console.timeEnd('Question 2');
    });
}
question2();