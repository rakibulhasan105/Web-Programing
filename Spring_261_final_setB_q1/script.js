let label = document.getElementById("label");
let heartRateInputs = [];
let oxygenSaturationInputs = [];

let totalHeartRate = 0;
let totalOxygenSaturation = 0;
let readingCount = 0;
let feedback = "";
let riskScore = 0;

function saveReading() {
    let heartRate = parseFloat(document.getElementById("heart_rate").value);
    let oxygenSaturation = parseFloat(document.getElementById("oxygen_saturation").value);
    heartRateInputs.push(heartRate);
    oxygenSaturationInputs.push(oxygenSaturation);


    totalHeartRate += heartRate;
    totalOxygenSaturation += oxygenSaturation;
    readingCount++;

    let averageHeartRate = totalHeartRate / readingCount;
    let averageOxygenSaturation = totalOxygenSaturation / readingCount;

    riskScore = (100-oxygenSaturation)*2 + Math.abs(heartRate - 80) * 0.5;

    if( riskScore <= 10){
        feedback = "SAFE";
    }else if(riskScore > 10 && riskScore <= 20){
    feedback = "WARNING";
    }else if(riskScore > 20){
        feedback = "DANGER";
    }


    label.innerHTML = "Average Heart Rate: " + averageHeartRate.toFixed(2) +
                        "<br>Average Oxygen Saturation: " + averageOxygenSaturation.toFixed(2) +
                        "<br>Risk Score: " + riskScore.toFixed(2) +
                        "<br>Feedback: " + feedback;



}
