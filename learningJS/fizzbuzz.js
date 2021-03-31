/*Implement fizz-buzz in JavaScript
The program should run for the numbers 1 to 100. There should be spaces (or newlines) between the numbers and words.*/

for (let i = 1; i <= 100; i++) {
    if ((i % 5 == 0) && (i % 3 == 0)) {
        console.log('fizzbuzz')
    }
    else if (i % 5 == 0) {
        console.log('fizz')
    }
    else if (i % 3 == 0) {
        console.log('buzz')
    }
    else {
        console.log(i)
    }
    console.log('')
}

