
export const navigations = [
    {name: "Home", url: "/"},
    {name: "about us", url: "/about"},
    {name: "features", url: "/features"},
    {name: "docs", url: "/docs"},
    {name: "blogs", url: "/blogs"},
    {name: "supports", url: "/supports"},
    {name: "Github", url: "https://github.com/phpSniper/php-sniper.git"},
]

export const insertWithOutPhpSniper = `
<?php
    $servername = "localhost";
    $username = "username";
    $password = "password";
    $dbname = "myDB";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // prepare and bind
    $stmt = $conn->prepare("INSERT INTO MyGuests (firstname, lastname, email) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $firstname, $lastname, $email);

    // set parameters and execute
    $firstname = "John";
    $lastname = "Doe";
    $email = "john@example.com";
    $stmt->execute();

    echo "New records created successfully";

    $stmt->close();
    $conn->close();
?>
`;



export const insertWithPhpSniper = `
<?php
    include "./sniper.php";

    $table = "MyGuests";
    $columns = "firstname,lastname,email";
    $values = "'John','Doe','john@example.com'";

    $result = insertData($table, $data);

    if ($result) {
        echo "New records created successfully";
    } else {
        echo "Error: " . $result;
    }
?>
`;

export const selectWithoutPhpSniper = `
<?php

// Create a connection
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "database_name";
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Select all data from the table
$sql = "SELECT * FROM table_name";
$result = $conn->query($sql);

// Check if any rows were returned
if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "Name: " . $row["name"]. " - Email: " . $row["email"]. "<br>";
    }
} else {
    echo "0 results";
}

// Close the connection
$conn->close();

?>
`;

export const selectWithPhpSniper = `
<?php

// Include the PhpSniper functions
include "functions/selectAll.php";

// Select all data from the table
$data = selectAll("table_name");

// Check if any rows were returned
if ($data) {
    // Output data of each row
    foreach($data as $row) {
        echo "Name: " . $row["name"]. " - Email: " . $row["email"]. "<br>";
    }
} else {
    echo "0 results";
}

?>
`;