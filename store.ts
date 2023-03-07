
export const navigations = [
    {name: "Overview", url: "/"},
    // {name: "about us", url: "/about"},
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
include "./sniper.php";

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

export const selectRowWithoutPhpSniper = `
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$id = 1;
$sql = "SELECT * FROM myTable WHERE id = '$id'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        // Output row data here
        echo "Name: " . $row["name"];
    }
} else {
    echo "0 results";
}

$conn->close();
`;

export const selectRowWithPhpSniper = `
include "./sniper.php";

$id = 1;
$row = selectRow("myTable", "id='$id'");

if ($row) {
    // Output row data here
    echo "Name: " . $row["name"];

} else {
    echo "0 results";
}
`;

export const updateWithoutPhpSniper = `
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE mytable SET column1='newvalue' WHERE id=1";

if ($conn->query($sql) === TRUE) {
  echo "Record updated successfully";
} else {
  echo "Error updating record: " . $conn->error;
}

$conn->close();
`;

export const updateWithPhpSniper = `
include "./sniper.php";

$table = 'mytable';
$id = 1;
$data = "column1 = 'newvalue'";

if(updateRow($table, $data, 'id='. $id)) {
  echo "Record updated successfully";
} else {
  echo "Error updating record";
}
`;

export const deleteWithoutPhpSniper = `
<?php
// Connect to the database
$conn = mysqli_connect('localhost', 'username', 'password', 'database_name');

// Delete a row from the table
$id = 1; // ID of the row to delete
$sql = "DELETE FROM table_name WHERE id = $id";
$result = mysqli_query($conn, $sql);

if ($result) {
  echo "Row deleted successfully!";
} else {
  echo "Error deleting row: " . mysqli_error($conn);
}

// Close the database connection
mysqli_close($conn);
?>
`;

export const deleteWithPhpSniper = `
<?php
include "./sniper.php";

// Delete a row from the table
$table = 'table_name'; /

if (deleteRow($table, "id=".$id)) {
  echo "data deleted successfully!";
} else {
  echo "Error deleting row: " . mysqli_error($conn);
}

// Close the database connection
mysqli_close($conn);
?>
`;