/*

Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

*/

// const MarkDataI = {
//   // weight in kg, height in meter
//   weight: 78,
//   height: 1.69,
// };

// const JohnDataI = {
//   weight: 92,
//   height: 1.95,
// };

// IsMarkBMIHigherI =
//   MarkDataI.weight / MarkDataI.height ** 2 >
//   JohnDataI.weight / (JohnDataI.height * JohnDataI.height);
// console.log({
//   BMIMarkI: MarkDataI.weight / MarkDataI.height ** 2,
//   BMIJohnI: JohnDataI.weight / (JohnDataI.height * JohnDataI.height),
//   IsMarkBMIHigherI,
// });

// const MarkDataII = {
//   // weight in kg, height in meter
//   weight: 95,
//   height: 1.88,
// };

// const JohnDataII = {
//   weight: 85,
//   height: 1.76,
// };

// IsMarkBMIHigherII =
//   MarkDataII.weight / MarkDataII.height ** 2 >
//   JohnDataII.weight / JohnDataII.height ** 2;
// console.log({
//   BMIMarkII: MarkDataII.weight / MarkDataII.height ** 2,
//   BMIJohnII: JohnDataII.weight / (JohnDataII.height * JohnDataII.height),
//   IsMarkBMIHigherII,
// });

// challenge II
/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK � 

*/
// MarkBMII = MarkDataI.weight / MarkDataI.height ** 2;
// JohnBMII = JohnDataI.weight / (JohnDataI.height * JohnDataI.height);

// MarkBMIII = MarkDataII.weight / MarkDataII.height ** 2;
// JohnBMIII = JohnDataII.weight / (JohnDataII.height * JohnDataII.height);

// if (MarkBMII > JohnBMII) {
//   console.log("Mark I's BMI is greater");
// } else {
//   console.log("John I's BMI is greater");
// }

// if (MarkBMIII > JohnBMIII) {
//   console.log("Mark II's BMI is greater");
// } else {
//   console.log("John II's BMI is greater");
// }

// challenge #3
/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK �
*/

// helper function for calculating average
// const calculateAverage = (scores) => {
//   const average =
//     scores.reduce((prev, current) => prev + current, 0) / scores.length;
//   return average;
// };

// // test case I
// const TeamDolphinsScoreI = [96, 108, 89];
// const TeamKoalasScoreI = [88, 91, 110];

// const averageScoreDolphinsI = calculateAverage(TeamDolphinsScoreI);
// const averageScoreKoalasI = calculateAverage(TeamKoalasScoreI);
// console.log('Round ONE!!!!');
// console.log({ averageScoreDolphinsI, averageScoreKoalasI });

// if (averageScoreDolphinsI > averageScoreKoalasI) {
//   console.log('Team Dolphins win!!');
// } else if (averageScoreKoalasI > averageScoreDolphinsI) {
//   console.log('Team Koalas win!!');
// } else {
//   console.log('It was a draw!');
// }

// // Bonus case I
// const TeamDolphinsScoreII = [97, 112, 101];
// const TeamKoalasScoreII = [109, 95, 123];

// const minimumAverageScoreI = 100;

// const averageScoreDolphinsII = calculateAverage(TeamDolphinsScoreII);
// const averageScoreKoalasII = calculateAverage(TeamKoalasScoreII);
// console.log('Round TWO!!!!');
// console.log({ averageScoreDolphinsII, averageScoreKoalasII });

// if (
//   averageScoreDolphinsII > averageScoreKoalasII &&
//   averageScoreDolphinsII >= minimumAverageScoreI
// ) {
//   console.log('Team Dolphins win!!');
// } else if (
//   averageScoreKoalasII > averageScoreDolphinsII &&
//   averageScoreKoalasII >= minimumAverageScoreI
// ) {
//   console.log('Team Koalas win!!');
// } else {
//   console.log('It was a draw!');
// }

// // Bonus case II
// const TeamDolphinsScoreIII = [67, 112, 101];
// const TeamKoalasScoreIII = [79, 95, 106];

// const minimumAverageScoreII = 100;

// const averageScoreDolphinsIII = calculateAverage(TeamDolphinsScoreIII);
// const averageScoreKoalasIII = calculateAverage(TeamKoalasScoreIII);
// console.log('Round THREE!!!!');
// console.log({ averageScoreDolphinsIII, averageScoreKoalasIII });

// if (
//   averageScoreDolphinsIII > averageScoreKoalasIII &&
//   averageScoreDolphinsIII >= minimumAverageScoreII
// ) {
//   console.log('Team Dolphins win!!');
// } else if (
//   averageScoreKoalasIII > averageScoreDolphinsIII &&
//   averageScoreKoalasIII >= minimumAverageScoreII
// ) {
//   console.log('Team Koalas win!!');
// } else if (
//   averageScoreDolphinsIII === averageScoreKoalasIII &&
//   averageScoreDolphinsIII >= minimumAverageScoreII &&
//   averageScoreKoalasIII >= minimumAverageScoreII
// ) {
//   console.log('BOTH TEAM WIN!!');
// } else if (
//   averageScoreDolphinsIII < minimumAverageScoreII &&
//   averageScoreKoalasIII < minimumAverageScoreII
// ) {
//   console.log('NO Team WIN :(');
// }

/*
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �
GOOD LUCK �

*/

const bill = 5;
let tip = bill < 50 ? 0 : bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill + tip}`);
