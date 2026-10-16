<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="" method="POST">
        <h2>Result Calculation</h2>
        <h3>Input: </h3>

        <label for="">CT 1: </label>
        <input type="number" name="ct1" id="">
        <br><br>

        <label for="">CT 2: </label>
        <input type="number" name="ct2" id="">
        <br><br>


        <label for="">CT 3: </label>
        <input type="number" name="ct3" id="">
        <br><br>

        <label for="">Midturm Marks: </label>
        <input type="number" name="midturm" id="">
        <br><br>

        <label for="">Final Marks: </label>
        <input type="number" name="final" id="">
        <br><br>

        <input type="submit" value="Calculate Total">

    </form>

</body>

</html>


<?php

if ($_SERVER['REQUEST_METHOD'] == "POST") {

    $ct1 = $_POST["ct1"];
    $ct2 = $_POST["ct2"];
    $ct3 = $_POST["ct3"];
    $midturm = $_POST["midturm"];
    $final = $_POST["final"];
  
    $bestTwo = $ct1 + $ct2 + $ct3 - min($ct1, $ct2, $ct3);

    $totalMarks = $bestTwo + $midturm + $final;

    echo " <h4> Output : </h4>";
    echo "Best two CT's total: " . $bestTwo . " <br>";
    echo "Midturm marks: " . $midturm . "<br>";
    echo "Final marks: " . $final . "<br><br>";
    echo "<b>Total Marks = " . $totalMarks . "</b><br>";  

    if ($totalMarks > 54) {
        echo "Status: Passed";
    } else echo "Status: Failed";
}



?>
