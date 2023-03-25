// function makeIterable(initialValue, maxValue, callback) {
//   return {
//     [Symbol.iterator]() {
//       let num = initialValue;
//       return {
//         next() {
//           return { value: callback(num++), done: num > maxValue };
//         },
//       };
//     },
//   };
// }

// const multiple = makeIterable(0, 10, (num) => num * 2);
// console.log(multiple);
// for (const num of multiple) {
//   console.log(num);
// }

// function* multipleGenerator() {
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//     yield i ** 2;
//   }
// }

// getBanana() //
//   .then((banana) =>
//     getApple() //
//       .then((apple) => [apple, banana])
//   )
//   .then(console.log);

function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}
function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}
function getChicken() {
  return Promise.reject(new Error('can not find 🐓'));
}

function fetch() {
  getChicken()
    .then((chicken) => fetchEgg(chicken))
    .then((egg) => fryEgg(egg))
    .then((meal) => console.log(meal));
}
