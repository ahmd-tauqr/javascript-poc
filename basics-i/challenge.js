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

const MarkDataI = {
  // weight in kg, height in meter
  weight: 78,
  height: 1.69,
};

const JohnDataI = {
  weight: 92,
  height: 1.95,
};

IsMarkBMIHigherI =
  MarkDataI.weight / MarkDataI.height ** 2 >
  JohnDataI.weight / (JohnDataI.height * JohnDataI.height);
console.log({
  BMIMarkI: MarkDataI.weight / MarkDataI.height ** 2,
  BMIJohnI: JohnDataI.weight / (JohnDataI.height * JohnDataI.height),
  IsMarkBMIHigherI,
});

const MarkDataII = {
  // weight in kg, height in meter
  weight: 95,
  height: 1.88,
};

const JohnDataII = {
  weight: 85,
  height: 1.76,
};

IsMarkBMIHigherII =
  MarkDataII.weight / MarkDataII.height ** 2 >
  JohnDataII.weight / JohnDataII.height ** 2;
console.log({
  BMIMarkII: MarkDataII.weight / MarkDataII.height ** 2,
  BMIJohnII: JohnDataII.weight / (JohnDataII.height * JohnDataII.height),
  IsMarkBMIHigherII,
});

// challenge II
MarkBMII = MarkDataI.weight / MarkDataI.height ** 2;
JohnBMII = JohnDataI.weight / (JohnDataI.height * JohnDataI.height);

MarkBMIII = MarkDataII.weight / MarkDataII.height ** 2;
JohnBMIII = JohnDataII.weight / (JohnDataII.height * JohnDataII.height);

if (MarkBMII > JohnBMII) {
  console.log("Mark I's BMI is greater");
} else {
  console.log("John I's BMI is greater");
}

if (MarkBMIII > JohnBMIII) {
  console.log("Mark II's BMI is greater");
} else {
  console.log("John II's BMI is greater");
}
