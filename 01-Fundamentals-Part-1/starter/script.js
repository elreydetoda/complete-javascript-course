/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

let js$ = "test";
console.log(js$);


*/
// variable assignment
let country = "US";
let continent = "North America";
let population = 99999999999999999999n;
console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = "en";

console.log(language);

const countryz = "US";
// countryz = "bobby";

// math ops
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSara = now - 2018;
// console.log(ageJonas, ageSara);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const fName = "J";
// const lName = "S";
// console.log(fName + " " + lName);

// // assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1
// console.log(x);

// population = 1000;

// console.log(population / 2);
// population++;
// console.log(population);
// finPop = 6000000;
// averPop = 33000000;
// console.log(population > finPop);
// console.log(population > averPop);
// const description =
//   "Portugal is in Europe, and its 11 million people speak portuguese";

// // copmarison operators

// let z, y;
// z = y = 25 - 10 - 5;
// console.log(x, y);

// // Coding challenge 1
// // *************************
// // data 1
// // *************************

// const markWeightD1 = 78;
// const markHeightD1 = 1.69;
// const johnWeightD1 = 92;
// const johnHeightD1 = 1.95;

// const markBMID1 = markWeightD1 / markHeightD1 ** 2;
// const johnBMID1 = johnWeightD1 / johnHeightD1 ** 2;
// const markHigherBMID1 = markBMID1 > johnBMID1;

// console.log(markBMID1, johnBMID1, markHigherBMID1);

// // *************************
// // data 2
// // *************************

// const markWeightD2 = 95;
// const markHeightD2 = 1.88;
// const johnWeightD2 = 85;
// const johnHeightD2 = 1.76;

// const markBMID2 = markWeightD2 / markHeightD2 ** 2;
// const johnBMID2 = johnWeightD2 / johnHeightD2 ** 2;
// const markHigherBMID2 = markBMID2 > johnBMID2;

// console.log(markBMID2, johnBMID2, markHigherBMID2);

// const fName = "jonas";
// const job = "teacher";
// const bYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + fName + ", a " + (year - bYear) + " years old " + job + "!";

// console.log(jonas);

// const jonasNew = `I'm ${fName}, a ${year - bYear} years old ${job}!`;
// console.log(jonasNew);

// // old way for multi-line string
// console.log("String with \n\
// muliple \n\
// lines");

// // new way
// console.log(`String
// multiple
// lines`);

// const description = `Portugal is in Europe, and its 11 million people speak portuguese`;

// const age = 19;
// const age = 15;

// // if (isOldEnough) {
// if (age >= 18) {
//   console.log("Sara can start driving license 🚗");
// } else {
//   console.log(`Sara is too young wait another ${18 - age} years :)`);
// }

// // const birthYear = 1991;
// const birthYear = 2012;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// Coding challenge 1
// *************************
// data 1
// *************************

// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / johnHeight ** 2;
// const markHigherBMI = markBMI > johnBMI;

// console.log(markBMI, johnBMI, markHigherBMI);

// // *************************
// // data 2
// // *************************

// // const markWeight = 95;
// // const markHeight = 1.88;
// // const johnWeight = 85;
// // const johnHeight = 1.76;

// // const markBMI = markWeight / markHeight ** 2;
// // const johnBMI = johnWeight / johnHeight ** 2;
// // const markHigherBMI = markBMI > johnBMI;

// // console.log(markBMI, johnBMI, markHigherBMI);

// let whoIsHigher, notHigher, whoIsHigherBMI;

// if (markBMI > johnBMI) {
//   whoIsHigher = "Mark";
//   whoIsHigherBMI = markBMI;
//   notHigher = "John";
//   notHigherBMI = johnBMI;
// } else {
//   whoIsHigher = "John";
//   whoIsHigherBMI = johnBMI;
//   notHigher = "Mark";
//   notHigherBMI = markBMI;
// }

// console.log(
//   `${whoIsHigher}'s BMI (${whoIsHigherBMI})is higher than ${notHigher}'s (${notHigherBMI})`
// );

// type conversion
const inputYear = "1991";
console.log(Number(inputYear) + 18);
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - 2 + "5");
