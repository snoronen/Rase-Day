let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 18;

if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (age > 18 && registeredEarly) {
  console.log(`Early adults run at 9am with racenumber: ${raceNumber}.`);
} else if (age > 18 && !registeredEarly) {
  console.log(`Late adults run at 11am with racenumber: ${raceNumber}.`);
}

if (age < 18) {
  console.log(
    `Youth registrants run at 12:30 pm with racenumber: ${raceNumber}.`
  );
} else {
  console.log("See the registration desk.");
}
