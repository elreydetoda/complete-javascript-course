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
// function percentageOfWorld1(population){
//   return `${(population/7900000000)*100}%`
// }
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
// Coding Challenge 1

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

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0], friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[2] = 'Jay';

// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

// console.log(jonas);
// console.log(jonas.length);

// // exercise
// function calcAge(birthYear) {
//   return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1])
// ];
// console.log(ages);

// // ASSIGNMENT

// const populations = [
//   1441000000,
//   3441000000,
//   4441000000,
//   7441000000,
// ];
// console.log(populations)
// if (populations.length === 4) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages)


// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// // add elements
// const newLength = friends.push('Jay');
// console.log(friends, newLength);
// friends.unshift('John');
// console.log(friends);

// // remove elements
// friends.pop(); // Last
// const popped = friends.pop(); // Last
// console.log(friends, popped);

// friends.shift(); // First
// console.log(friends);


// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// // ES6 - STRICT EQUALITY
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// friends.push(23);
// console.log(friends.includes('23'));
// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
//   console.log('You have a friend called Steven');
// }

// // ASSIGNMENT

// const neighbours = [ 'Mexico', 'Canada', ];
// console.log(neighbours);
// neighbours.push('Utopia');
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);
// // neighbours.push('Germany');
// if (!neighbours.includes('Germany')) {
//   console.log('Probably not a central European country :D')
// }
// neighbours[neighbours.indexOf('Canada')] = 'New Canada'
// console.log(neighbours);

// //////////////////////////////////////////////////
// // Coding Challenge 1
// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2
// }

// // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * .15 : bill * .2

// console.log(calcTip(100));
// console.log(calcTip(300));
// const bills = [ 125, 555, 44 ];
// console.log(bills);
// const tips = [
//   calcTip(bills[0]),
//   calcTip(bills[1]),
//   calcTip(bills[2]),
// ];
// console.log(tips);
// const totals = [
//   bills[0] + tips[0],
//   bills[1] + tips[1],
//   bills[2] + tips[2],
// ];
// console.log(totals);
// //////////////////////////////////////////////////

// const jonasArray = [
//   'Jonas',
//   'Schmedtmann',
//   'teacher',
//   ['Michael', 'Peter', 'Steven']
// ];

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
// };
// console.log(jonas);

// // ASSIGNMENT
// const myCountry = {
//   country: 'USA',
//   capital: 'Washington DC',
//   language: 'en',
//   population: 3441000000,
//   neighbours: [ 'Mexico', 'Canada', ],
// };
// console.log(myCountry);

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
// };
// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// // const interestedIn = prompt('What do you want to know about Jonas? (Choose between firstName, lastName, age, job, and friends)');
// // if (jonas[interestedIn]) {
// //   console.log(jonas[interestedIn]);
// // } else {
// //   console.log('Wrong request! (Choose between firstName, lastName, age, job, and friends)')
// // }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// // challenge
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// // ASSIGNMENT

// const myCountry = {
//   country: 'USA',
//   capital: 'Washington DC',
//   language: 'english',
//   population: 3441000000,
//   neighbours: [ 'Mexico', 'Canada', ],
// };
// console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a captial called ${myCountry.capital}.`);
// myCountry.population += 2000000
// console.log(myCountry.population)
// myCountry['population'] -= 2000000
// console.log(myCountry.population)

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  // calcAge: function(birthYear) {
  //   return 2037 - birthYear
  // }
  // calcAge: function() {
  //   return 2037 - this.birthYear
  // }
  calcAge: function() {
    this.age = 2037 - this.birthYear
    return this.age
  },
  // wasn't working for some reason `this` is referencing global (Window) object
  // driversLicense: () => this //? 'a' : 'no'
  driversLicense: function() {
    return this.hasDriversLicense ? 'a' : 'no'
  },
  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()}-year old teacher, and he has ${this.driversLicense() } driver's license`
  }
};

// console.log(jonas.calcAge())
// console.log(jonas.age)

// challenge
console.log(jonas.getSummary())