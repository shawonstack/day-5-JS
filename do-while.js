// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);
// let i = 1;

// do {
//   console.log('the number of reerce is :', i);
//   i = i + 2;
// } while (i <= 20);
// let input = '';
// let password = '1234';

// do {
//   input = prompt('Enter your password');
// } while (input !== password);

// console.log('Login Success');
// let success = false;
// let attempt = 1;
// do {
//   console.log('trying.....', attempt);
//   attempt++;
// } while (!success && attempt <= 5);
//------- 3 bar wrong pin dile block
// const readline = require('readline-sync');

// let pin = 1234;
// let attempt = 0;
// let input;

// do {
//   input = Number(readline.question('Enter Your PIN: '));

//   if (input !== pin) {
//     console.log('Wrong PIN');
//   }

//   attempt++;
// } while (input !== pin && attempt < 3);

// if (input === pin) {
//   console.log('Login Success');
// } else {
//   console.log('Card Blocked');
// }
let choice = 1;
do {
  console.log('play');
  console.log('seetings');
  console.log('exit');

  if (choice == 1) {
    console.log('play');
  } else if (choice == 2) {
    console.log('seetings');
  } else if (choice == 3) {
    console.log('exit');
  }
  choice++;
} while (choice < 3);
