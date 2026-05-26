// for loop basic  structre is: for(initialization:conditin: increment/decrement)
for (let i = 1; i <= 10; i++) {
  // console.log('the increment number is:', i);
}
//  2nd is odd number print using for loop
for (let a = 1; a <= 10; a++) {
  // console.log(a);
}
for (let b = 1; b <= 10; b++) {
  // console.log(b);
}
for (let c = 3; c <= 10; c += 2) {
  // console.log(c);
}
for (let d = 10; d >= 1; d -= 2) {
  //   console.log(d);
}

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    // console.log(i, j);
  }
}
for (let i = 0, j = 10; i <= 10; i++, j--) {
  // console.log(i, j);
}

for (let classroom = 1; classroom <= 3; classroom++) {
  // console.log('classroome is:', classroom);
  for (let student = 1; student <= 5; student++) {
    // console.log('total istudent is : ', student);
  }
}
for (let bucket = 1; bucket <= 3; bucket++) {
  // console.log('total bucket is:', bucket);
  for (let apple = 1; apple <= 5; apple++) {
    // console.log('total apple of the buket is:', apple);
  }
}
// multiple variable loop
// for (let i = 0, j = 10; i <= 10; i++, j--) {
// console.log(i, j);
// }
// for (let i = 0; i < array.length; i++) {
// console.log(i);
// }
const post = ['post1', 'post2', 'post3'];
for (let i = 0; i < post.length; i++) {
  // console.log(post[i]);
}
// snding email
const emails = ['email1', 'email2', 'email3', 'email4'];
for (let i = 0; i < emails.length; i++) {
  // console.log('sending emial is :', emails[i]);
}

// case study 3: ecommerce releted
const price = [100, 200, 300, 700, 600];
let total = 0;
for (let i = 0; i < price.length; i++) {
  total += price[i];
  console.log('total pice is :', total);
}
