const movies = ['Dark', 'Money Heist', 'Breaking Bad'];
for (const move of movies) {
  console.log(move);
}
const cart = [1200, 300, 500];
let total = 0;
for (const price of cart) {
  total += price;
  console.log('prie of the cart is:', total);
}
const users = ['Hasan', 'Rahim', 'Karim'];
for (const user of users) {
  console.log(`notification sent to ${user}`);
}
// api data processing
const products = [
  { name: 'Mouse', price: 500 },
  { name: 'Keyboard', price: 1000 },
];
for (const product of products) {
  console.log(
    `name o the product is ${product.name} and price is ${product.price}`,
  );
}

const groups = [
  ['Rahim', 'Karim'],
  ['Hasan', 'Jahid'],
];
for (const team of groups) {
  for (const members of team) {
    console.log(members);
  }
}
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  if (num === 3) {
    break;
  }

  console.log(num);
}
const prices = [100, 200, 300];
for (const price of prices) {
  const discountPrice = price - price * 0.1;
  console.log(
    `orginal price is ${price}. and 10% discount price is ${discountPrice}`,
  );
}
const students = ['Rahim', 'Karim', 'Hasan'];
for (const student of students) {
  console.log(`${student} is present`);
}
// koyta uppercase, koyta lowercase. kota number seta print krote hobe for of loop use kroe
const password = 'HasaN123';
let upperCount = 0;
let lowerCount = 0;
let Number = 0;
for (const count of password) {
  if (count >= 'A' && count <= 'Z') {
    upperCount++;
  } else if (count >= 'a' && count <= 'z') {
    lowerCount++;
  } else if (count >= 1 && count <= 9) {
    Number++;
  }
}
console.log(
  `uppercount is ${upperCount}. lowercount is ${lowerCount}. total number is ${Number}`,
);
