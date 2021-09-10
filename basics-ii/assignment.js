// strict mode
'use strict';

// let hasDriverLicence = false;
// const passTest = true;

// if (passTest) {
//   hasDriverLicences = true;
// }

// if (hasDriverLicence) {
//   console.log('I can drive!');
// }
// function declaration
function logger() {
  console.log('This logs...');
}
// invoke/run/execute/call the function
logger();

function taskProcessor(actions, operations) {
  // console.log(actions, operations);
  const taskPerformed = `Task with ${actions} actions and ${operations} operations were performed.`;
  return taskPerformed;
}

const result = taskProcessor(2, 7);
console.log(result);
