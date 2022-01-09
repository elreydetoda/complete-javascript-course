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
// function percentagOfWorld1(population){
//   return `${(population/7900000000)*100}%`
// }
// const percentagOfWorld2 = function (population){
//   return `${(population/7900000000)*100}%`
// }

// console.log(percentagOfWorld1(1441000000))
// console.log(percentagOfWorld2(1441000000))

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

// const percentagOfWorld3 = population => `${(population/7900000000)*100}%`
// console.log(percentagOfWorld3(1441000000))


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
//   return `${country} has ${population} people, which is about ${percentagOfWorld1(population)} of the world`
// }

// console.log(describePopulation('China', 1441000000))


function calcAge(birthYear) {
  return 2037 - birthYear
}

function yearsUntilRetirement (birthYear, firstName) {
  const retirement = 65 - calcAge(birthYear);
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement}`);
    return retirement
  } else {
    console.log(`${firstName} has already retired 🥳`);
    return -1
  }
}

console.log(yearsUntilRetirement(1991, 'bobby'));
console.log(yearsUntilRetirement(1950, 'bobby'));