"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// // when no strict mode, silently fails
// // if (passTest) hasDriverLicense = true;
// // when strict, throws error
// // if (passTest) hasDriverLicense = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// potential private words
// const interface = "Audio";
// const private = 534;

// function logger() {
//   console.log("my name is jonas");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   // console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// // console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// ASSIGNMENT
// console.log(describeCountry('Finland', '6 million', 'Helsinki'))
// console.log(describeCountry('US', '3 billion', 'Washington DC'))
// console.log(describeCountry('Mexico', '2 million', 'Mexico City'))

// // function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// // function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} people and its capital city is ${capitalCity}`
// }

// // ASSIGNMENT
function percentageOfWorld1(population){
  return `${(population/7900000000)*100}%`
}
// const percentageOfWorld2 = function (population){
//   return `${(population/7900000000)*100}%`
// }

// console.log(percentageOfWorld1(1441000000))
// console.log(percentageOfWorld2(1441000000))

// Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;

// console.log(calcAge3(1991));

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement}`;
// }

// console.log(yearsUntilRetirement(1991, 'bobby'));
// console.log(yearsUntilRetirement(1980, 'jonas'));

// ASSIGNMENT

// const percentageOfWorld3 = population => `${(population/7900000000)*100}%`
// console.log(percentageOfWorld3(1441000000))


// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2,3))

// function describePopulation (country, population) {
//   return `${country} has ${population} people, which is about ${percentageOfWorld1(population)} of the world`
// }

// console.log(describePopulation('China', 1441000000))


// function calcAge(birthYear) {
//   return 2037 - birthYear
// }

// function yearsUntilRetirement (birthYear, firstName) {
//   const retirement = 65 - calcAge(birthYear);
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement}`);
//     return retirement
//   } else {
//     console.log(`${firstName} has already retired 🥳`);
//     return -1
//   }
// }

// console.log(yearsUntilRetirement(1991, 'bobby'));
// console.log(yearsUntilRetirement(1950, 'bobby'));

//////////////////////////////////////////////////
// coding challenge 1

// const calcAverage = (a, b, c) => (a + b + c) / 3
// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= (avgKoalas * 2)) {
//     console.log(`Dolphin's win (${avgDolphins} vs. ${avgKoalas})!`)
//   } else if (avgKoalas >= (avgDolphins * 2)) {
//     console.log(`Koala's win! (${avgKoalas} vs. ${avgDolphins})`)
//   } else {
//     console.log('No one wins!')
//   }
// }

// checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49))
// checkWinner(calcAverage(85,54,41), calcAverage(23,34,27))

//////////////////////////////////////////////////

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0], friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[2] = 'Jay';

console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

console.log(jonas);
console.log(jonas.length);

// exercise
function calcAge(birthYear) {
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1])
];
console.log(ages);

// ASSIGNMENT

const populations = [
  1441000000,
  3441000000,
  4441000000,
  7441000000,
];
console.log(populations)
if (populations.length === 4) {
  console.log(true);
} else {
  console.log(false);
}

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages)