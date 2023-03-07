
export const navigations = [
    {name: "Overview", url: "/"},
    // {name: "about us", url: "/about"},
    {name: "features", url: "/features"},
    {name: "docs", url: "/docs"},
    // {name: "blogs", url: "/blogs"},
    {name: "supports", url: "/supports"},
    {name: "Github", url: "https://github.com/phpSniper/php-sniper.git"},
]


export const ourFeatures = [
    {title: "Simple and efficient database interactions", description: "PHP Sniper provides an easy-to-use interface for common database interactions such as selecting, inserting, updating, and deleting data."},
    {title: "Flexibility", description: "PHP Sniper can be used with a variety of different databases and can be easily integrated into existing projects."},
    {title: "Time-saving", description: "Using PHP Sniper can save developers time by simplifying the process of working with databases, allowing them to focus on other aspects of their project."},
    {title: "Readability", description: "The library's clean, well-documented code makes it easy to understand and use, even for developers with limited experience working with databases."},
    {title: "Support", description: "PHP Sniper is supported by its author and the wider community, with regular updates and bug fixes."},
    {title: "Free and open-source", description: "PHP Sniper is available for free under an open-source license, making it accessible to developers of all skill levels and project types."},
];



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


export const functions = [
    {
        "title": "insert data",
        "description": "The advanced way to insert a data in a table with a php sniper library, after you configureyour database connection and include sniper.php in you php script",
        "examples": [
            {
                "title": "insert data with in a table",
                "description": "to insert data in to a table, all you need is the table name, the columns name and data you wanted to insert to the table, the function return true if the data was successfully inserted otherwise false",
                "code": `
                <?php
                $inserted = insert("users", "name, email, password", "'Muhammad','muhammad@test.com','12345'");
                
                // to check if the data was successfully inserted then check if the inserted variable is true

                if($inserted === true) {
                    echo "data was successfully inserted";
                }else{
                    echo "data was not successfully inserted";
                }

                ?>`
            },
            {
                "title": "insert data with in a table in an optimized conditional mode",
                "description": "To insert data in to a table, in an optimzed way is to check directily if insert function returns true",
                "code": `
                <?php
                
                // all you have to do is to check if the insert function return true if the data was successfully inserted

                if(insert("users", "name, email, password", "'Muhammad','muhammad@test.com','12345'")) {

                    echo "data was successfully inserted";

                }else{

                    echo "data was not successfully inserted";

                }

                ?>`
            }

        ]
    },
    {
        "title": "Select All data",
        "description": `The simplest way to select all data from a table weither with condition or not is using fetch selectAll() function, here is the avaiable parameters that will help you select all the data you need from a table <br /> 
    
        <li>1st parameter: the name of the database table</li>
        <li>2nd parameter: the condition (optional), the function will return all if it's null</li>
        <li>3rd parameter: the order_by (optional), the method at which you wanted to fetch the data from database, its null by default  </li>
        <li>4th parameter: the columns you wanted to select(optional), the function will return all columns if it's null</li>
        <li>5th parameter: DISTINCT if you wanted to select distinct data from a table the tun it true otherwise it's false</li>
       
        `,
        "examples": [
            {
                "title": "Insert data with in a table",
                "description": "to insert data in to a table, all you need is the table name, the columns name and data you wanted to insert to the table, the function return true if the data was successfully inserted otherwise false",
                "code": `
                <?php
                $inserted = insert("users", "name, email, password", "'Muhammad','muhammad@test.com','12345'");
                
                // to check if the data was successfully inserted then check if the inserted variable is true

                if($inserted === true) {
                    echo "data was successfully inserted";
                }else{
                    echo "data was not successfully inserted";
                }

                ?>`
            },
            {
                "title": "Insert data with in a table in an optimized conditional mode",
                "description": "To insert data in to a table, in an optimzed way is to check directily if insert function returns true",
                "code": `
                <?php
                
                // all you have to do is to check if the insert function return true if the data was successfully inserted

                if(insert("users", "name, email, password", "'Muhammad','muhammad@test.com','12345'")) {

                    echo "data was successfully inserted";

                }else{

                    echo "data was not successfully inserted";

                }

                ?>`
            }

        ]
    },
]