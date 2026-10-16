const weeklyGoal = 20;
let label = document.getElementById("label");

let totalHours = 0;
let avgStudyHours = 0;
let subjectList = [];
let sessionCount = 0;
let feedbackMassage = "";

function addStudy() {
  //console.log("Add Study button clicked");
  let subject = document.getElementById("subjectInput").value;
  let hours = document.getElementById("hourInput").value;

  totalHours += parseFloat(hours);
  subjectList.push(subject);
  sessionCount++;
  avgStudyHours = totalHours / sessionCount;

  if (totalHours >= 0 && totalHours <= 5) {
    feedbackMassage = "Start studying regularly!";
  } else if (totalHours >= 6 && totalHours <= 12) {
    feedbackMassage = "Good progress!";
  } else if (totalHours >= 13 && totalHours <= 19) {
    feedbackMassage = "Almost ready!";
  } else if (totalHours >= 20) {
    feedbackMassage = "Weekly goal reached!";
  }

  if(sessionCount > 7 && totalHours < weeklyGoal){
     feedbackMassage = "Increase your study time!";
    }

    label.textContent = "Total : " + totalHours + ", Average : " + avgStudyHours + ", Subjects : [" + subjectList.join(", ") + "], " + feedbackMassage;
}
