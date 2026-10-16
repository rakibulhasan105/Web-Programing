const Callorie_Goal = 2000;

let calorieInput = document.getElementById("inputCalories");
let addCaloriesBtn = document.getElementById("addCaloriesBtn");
let label = document.getElementById("label");

let totalCalories = 0;
let feedbackMessage = "";
let numberOfEntries = 0;

addCaloriesBtn.addEventListener("click", calculateCalories);

function calculateCalories() {
    //console.log("Button clicked");
    let caloriesValue = calorieInput.value;
    // console.log(caloriesValue);
    totalCalories += parseInt(caloriesValue);
    numberOfEntries++;
    // console.log(totalCalories);

    if (totalCalories >= 0 && totalCalories <= 800) {
        feedbackMessage = "You're off to a healthy start!";
    } else if (totalCalories >= 801 && totalCalories <= 1600) {
        feedbackMessage = "Good progress, keep it balanced!";
    }
    else if (totalCalories >= 1601 && totalCalories <= 1999) {
        feedbackMessage = "Almost at your limit!";
    }
    else if (totalCalories >= 2000) {
        feedbackMessage = "Goal reached! Stay mindful!";
    }


    if (numberOfEntries > 10 && totalCalories < Callorie_Goal) {
        feedbackMessage = "Be cautious of frequent snacking!";
    }

    // console.log(totalCalories);
    // console.log(numberOfEntries);
    //console.log(feedbackMessage);

    label.textContent = "Total Calories: " + totalCalories +
     ", Number of Entries: " + numberOfEntries + 
     ", Feedback: " + feedbackMessage;
  
}
