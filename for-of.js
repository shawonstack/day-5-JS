// const movies = ['Dark', 'Money Heist', 'Breaking Bad'];
// for (const move of movies) {
//   console.log(move);
// }
// const cart = [1200, 300, 500];
// let total = 0;
// for (const price of cart) {
//   total += price;
//   console.log('prie of the cart is:', total);
// }
// const users = ['Hasan', 'Rahim', 'Karim'];
// for (const user of users) {
//   console.log(`notification sent to ${user}`);
// }
//api data processing
// const products = [
//   { name: 'Mouse', price: 500 },
//   { name: 'Keyboard', price: 1000 },
// ];
// for (const product of products) {
//   console.log(
//     `name o the product is ${product.name} and price is ${product.price}`,
//   );
// }

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
