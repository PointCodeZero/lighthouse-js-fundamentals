var raining = true;
var cold = false;

//STEP 1
if (raining) console.log("Don't forget your umbrella!");

if (cold) console.log("Make sure you pick out a scarf!");

console.log("Now you are ready to go outside!");

//STEP 2
if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}

//STEP 3
var temperature = -12;

if (temperature < 0) {
  console.log("Make sure to pick up your scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you are ready to go outside!");

//STEP 4
var isCitizen = true;
var age = 24;
if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

//STEP 5
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

//STEP 6
if (!raining) {
  console.log("Leave your umbrella at home!");
}