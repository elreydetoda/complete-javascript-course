/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

let js$ = "test";
console.log(js$);


*/
// variable assignment
// let country = "US";
// let continent = "North America";
// let population = 99999999999999999999n;
// console.log(country);
// console.log(continent);
// console.log(population);

// let isIsland = false;
// let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// language = "en";

// console.log(language);

// const countryz = "US";
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

// Coding challenge 2
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
// const inputYear = "1991";
// console.log(Number(inputYear) + 18);
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log(2 + 3 + 4 + "5");
// console.log("10" - "4" - "3" - 2 + "5");

// // 1) solutions
// // 4
// // 617
// // 23
// // false
// // 118 (1143)

// // truthy vs falsy

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));

// // const money = 0;
// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// // let height;
// // let height = 100;
// let height = 0;
// if (height) {
//   console.log(`Yay! height is defined`);
// } else {
//   console.log(`Height is undefined`);
// }

// const age = 17;
// const age = 18;
// const age = "18";
// if (age === 18) console.log(`You Just became and adult :D (strict)`);
// if (age == 18) console.log(`You Just became and adult :D (loose)`);

// // const favorite = prompt("What's your favorite number?");
// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (false) {
// } else if (false) {
// } else {
// }

// let numNeighbors = prompt("How many neighbour countries does your country have?")
// let numNeighbors = Number(
//   prompt("How many neighbour countries does your country have?")
// );
// // if (numNeighbors == 1) {
// if (numNeighbors === 1) {
//   console.log(`only 1 border!`);
// } else if (numNeighbors > 1) {
//   console.log(`More than 1 border`);
// } else {
//   console.log("No borders");
// }

// const hasDriverLicense = true;
// let hasGoodVision = true;
// console.log(hasDriverLicense && hasGoodVision);
// hasGoodVision = false;
// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// hasGoodVision = true;
// // if (hasDriverLicense && hasGoodVision) {
// //   console.log("sara is able to drive");
// // } else {
// //   console.log("someone else should drive");
// // }
// // const isTired = true;
// const isTired = false;

// if (hasDriverLicense && hasGoodVision && !isTired) {
//   console.log("sara is able to drive");
// } else {
//   console.log("someone else should drive");
// }

// assignment
// const language = "en";
// // const population = 49000000;
// const population = 51000000;
// const isIsland = false;
// const country = "US";

// if (language === "en" && population < 50000000 && !isIsland) {
//   console.log(`You should live in ${country} :)`);
// } else {
//   console.log(`${country} does not meet your criteria :(`);
// }

// Coding challenge 3

// const gamesPlayed = 3;
// // original scores
// // const dolphinsAveScore = (96 + 108 + 89) / gamesPlayed;
// // const koalasAveScore = (88 + 91 + 110) / gamesPlayed;
// // bonus 1
// // const dolphinsAveScore = (97 + 112 + 101) / gamesPlayed;
// // const koalasAveScore = (109 + 95 + 123) / gamesPlayed;
// // bonus 2
// // const dolphinsAveScore = (97 + 112 + 101) / gamesPlayed;
// // const koalasAveScore = (109 + 95 + 106) / gamesPlayed;
// // watching video
// const dolphinsAveScore = (96 + 108 + 89) / gamesPlayed;
// const koalasAveScore = (88 + 91 + 120) / gamesPlayed;
// let winner, winnerScore;

// if (dolphinsAveScore > koalasAveScore) {
//   winner = "Dolphins";
// } else if (dolphinsAveScore < koalasAveScore) {
//   winner = "Koalas";
// } else {
//   winner = "draw";
// }

// if (winner === "draw") {
//   winnerScore = 0;
// } else {
//   winnerScore = eval(`${winner.toLowerCase()}AveScore`);
// }

// if (!(winnerScore > 100)) {
//   winner = "";
// }

// if (winner && winner !== "draw") {
//   console.log(`${winner} win!`);
// } else if (winner && winner === "draw") {
//   console.log("There is a draw!");
// } else {
//   console.log("You're all loosers!");
// }

// const day = "monday";
// // const day = "wednesday";
// // const day = "thursday";
// // const day = "never";

// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a valid day!");
//     break;
// }

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("enjoy the weekend");
// } else {
//   console.log("Not a valid day!");
// }

// const language = "english";

// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log("MOST number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Greate language too :D");
//     break;
// }

// const age = 23;
// age >= 18
//   ? console.log("I like to drink wine")
//   : console.log("I like to drink water");

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

// const population = 3;
// const population = 300000000;
// console.log(
//   `Portugal's population is ${
//     population > 33000000 ? "above" : "below"
//   } average`
// );

// coding challenge 4

// const bill = 275;
// const bill = 40;
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total was ${bill + tip}`
);
