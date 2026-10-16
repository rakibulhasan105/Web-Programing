<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <form action="" method="POST">

        <h2> Movie Night Event</h2>
        <label for="">Attendess:</label>
        <input type="number" name="attendees" id="" required>
        <br>
        <br>

        <label for="">Seat Capacity:</label>
        <input type="number" name="seat_capacity" id="" required>
        <br><br>

        <label for="">Ticket Price:</label>
        <input type="number" name="ticket_price" id="" required>
        <br><br>

        <input type="submit" value="Submit">

    </form>

</body>

</html>


<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

   $attendees = $_POST["attendees"];
   $seat_capacity = $_POST["seat_capacity"];
   $ticket_price = $_POST["ticket_price"];

   $total_screen = ceil($attendees / $seat_capacity);
   $empty_seats = ($total_screen * $seat_capacity) - $attendees;
   $total_wested_money = $empty_seats * $ticket_price;

   echo "Total Screens: " . $total_screen . "<br>";
   echo "Empty Seats: " . $empty_seats . "<br>";
   echo "Total Wasted Money: " . $total_wested_money . "<br>";

}  

?>
