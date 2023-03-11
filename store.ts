export const navigations = [
  { name: "Overview", url: "/" },
  // {name: "about us", url: "/about"},
  { name: "features", url: "/features" },
  { name: "docs", url: "/docs" },
  // {name: "blogs", url: "/blogs"},
  { name: "supports", url: "/supports" },
  { name: "Github", url: "https://github.com/phpSniper/php-sniper.git" },
];

export const ourFeatures = [
  {
    title: "Simple and efficient database interactions",
    description:
      "PHP Sniper provides an easy-to-use interface for common database interactions such as selecting, inserting, updating, and deleting data.",
  },
  {
    title: "Flexibility",
    description:
      "PHP Sniper can be used with a variety of different databases and can be easily integrated into existing projects.",
  },
  {
    title: "Time-saving",
    description:
      "Using PHP Sniper can save developers time by simplifying the process of working with databases, allowing them to focus on other aspects of their project.",
  },
  {
    title: "Readability",
    description:
      "The library's clean, well-documented code makes it easy to understand and use, even for developers with limited experience working with databases.",
  },
  {
    title: "Support",
    description:
      "PHP Sniper is supported by its author and the wider community, with regular updates and bug fixes.",
  },
  {
    title: "Free and open-source",
    description:
      "PHP Sniper is available for free under an open-source license, making it accessible to developers of all skill levels and project types.",
  },
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
<?php

include "./sniper.php";

$table = 'mytable';
$id = 1;
$data = "column1 = 'newvalue'";

if(updateRow($table, $data, 'id='. $id)) {
  echo "Record updated successfully";
} else {
  echo "Error updating record";
}

?>
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
    title: "insert data",
    description: `<p>
        The advanced way to insert a data in a table with a php sniper library, after you configure your database connection and include sniper.php in you php script 
        </p>
        
        <li>1st parameter: the name of the table</li>
        <li>2nd parameter: the columns you wanted to insert the data</li>
        <li>3rd parameter: the values of the columns passed as the second parameter respectively</li>
        
        check the examples below for more information:
        `,
    examples: [
      {
        title: "insert data in a table",
        description:
          "to insert data in to a table, all you need is the table name, the columns name and the data you wanted to insert to the table, the function return true if the data was successfully inserted otherwise false",
        code: `
                <?php
                $inserted = insert("users", "name, email, password", "'name_here','example@example.com','12345'");
                
                // to check if the data was successfully inserted then check if the inserted variable is true

                if($inserted === true) {
                    echo "data was successfully inserted";
                }else{
                    echo "data was not successfully inserted";
                }

                ?>`,
      },
      {
        title: "All in 1 syntax",
        description:
          "To insert data in to a table in an optimzed way is to check directily if insert function returns true",
        code: `
                <?php
                
                // all you have to do is to check if the insert function return true if the data was successfully inserted

                if(insert("users", "name, email, password", "'name_here','example@example.com','12345'")) {

                    echo "data was successfully inserted";

                }else{

                    echo "data was not successfully inserted";

                }

                ?>`,
      },
    ],
  },
  {
    title: "Select All data",
    description: `The simplest way to select all data from a table weither with condition or not is using fetch <b>\`selectAll\`()</b> function, here is the avaiable parameters that will help you select all the data you need from a table <br /> 
    
        <li>1st parameter: the name of the  table</li>
        <li>2nd parameter: the condition (optional), the function will return all if it's null</li>
        <li>3rd parameter: the order_by (optional), the method at which you wanted to fetch the data from database, its null by default  </li>
        <li>4th parameter: the columns you wanted to select(optional), the function will return all columns if it's null</li>
        <li>5th parameter: DISTINCT if you wanted to select distinct data from a table</li>
       
        `,
    examples: [
      {
        title: "Select data with out any condition",
        description:
          "to fetch all the table data, all you need is to pass the table name. see the example below for more information",
        code: selectWithPhpSniper,
      },
      {
        title: "Select data with some conditions",
        description:
          "To fetch data based on conditions you've to pass the condition as a second parameter, see the example below for more information",
        code: `
<?php
include "./sniper.php";

// Select all data from the table
$data = selectAll("users", "name = 'user_name' AND city = 'user_city'");

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
`,
      },
    ],
  },
  {
    title: "Update row",
    description: `the simplest way to updata a row with a new data is by using <b>\`update()\`</b> function which has the following parameters <br /> 
    
        <li>1st parameter: the name of the table</li>
        <li>2nd parameter: The columns and their new values </li>
        <li>3rd parameter: the condition, the function will update all rows that matches the condition</li>
        <br />
        see the following example for more information:
        `,
    examples: [
      {
        title: "Updating a row with a new data",
        description:
          "Here we're going to use update() function to update some rows with new data",
        code: updateWithPhpSniper,
      },
      {
        title: "Updating multiple columns with a new data",
        description:
          "To update multiple columns with a new data, all you need to do is list the columns with their values with a comma separated. <br />See the example below for more information",
        code: `
<?php
include "./sniper.php";

// define the columns and their values with a comma separated

$columnsAndValues = "name = 'user_name', city = 'user_city'";

$updated = updateRow("users", $columnsAndValues, "id = 1");

// Check if any row was affected by the update
if ($update) {
   echo "The data was successfully updated";
} else {
    echo "Unable to update the data";
}

?>
`,
      },
    ],
  },
  {
    title: "Delete data",
    description: `To delete a data from records, delete function can highly help you as you don't need to travel to next level of writing any SQL syntax, all you need to do is to provide the information about the specific data you wanted to delete, check the parameters below:<br /> 
    
        <li>1st parameter: the name of the table you wanted to delete a data </li>
        <li>2nd parameter: the condition, to help the function find the exact data you wanted to delete</li>

        Here are some examples to describe how you can use the function to delete a data
       
        `,
    examples: [
      {
        title: "Delete all data",
        description:
          "Here is an example to delete all records from a table, by passing the name of the table and 1 as the second parameter",
        code: `
                <?php
                include "./sniper.php";
                
                // DELETE all data from the table
                $deleted = delete("records", 1);
                
                // Check if any rows were affected by the delete function
                if ($deleted) {
                    echo "Records were deleted successfully";                    
                } else {
                    echo "Unable to delete all records";
                }
                
                ?>
                `,
      },
      {
        title: "Delete data based on some conditions",
        description:
          "To delete data based on conditions you've to pass the condition as a second parameter, see the example below for more information",
        code: deleteWithPhpSniper,
      },
    ],
  },
  {
    title: "Check existance",
    description: `In a situation where by you wanted to check if particular data exist in a table, all you need to do is to use <b>\`rowExists()\`</b>
        that'll return true if the data is found based on the condition provided otherwise false.  check the parameters below:<br /> 
    
        <li>1st parameter: the name of the table you wanted to check the data </li>
        <li>2nd parameter: the condition, to help the function find the exact data you want to verify</li>

        Here are some examples to describe how you can use the function to comfirm a data
       
        `,
    examples: [
      {
        title: "Check a single condition",
        description:
          "Here is an example on how to check a data existance based on single condition, and we'll use email column in the users table as an example.",
        code: `
                <?php
                include "./sniper.php";
                
                //check the existance
                $existance = rowExists("users", "email = 'example@example.com'");
                
                // Check if any row matches the condition
                if ($existance) {
                    echo "This data exists in the table";                    
                } else {
                    echo "This data does not exist in the table";
                }
                
                ?>
                `,
      },
      {
        title: "Check the existance of data based on multiple columns",
        description:
          "Here is an example on how to check a data existance based on multiple columns, and we'll use email and password columns in the users table as an example. ",
        code: `
                <?php
                include "./sniper.php";
                
                //check the existance
                $existance = rowExists("users", "email = 'example@example.com' AND password = 'abcd123456'");
                
                // Check if any row matches the condition
                if ($existance) {
                    echo "This data exists in the table";                    
                } else {
                    echo "This data does not exist in the table";
                }
                
                ?>
                `,
      },
    ],
  },
  {
    title: "count rows",
    description: `in a situations that you want to find the number of a particular data base on a particular condition or even with out any condition, then we recomment using <b>\`countRows()\`, this function returns the number of columns matches, 0 if no row matches</b>  check the parameters below:<br /> 
    
        <li>1st parameter: the name of the table you wanted to check the data </li>
        <li>2nd parameter: the condition (optional), to help the function count the only data you want</li>

        Here are some examples to describe how you can use the function
       
        `,
    examples: [
      {
        title: "count all users",
        description:
          "Here is an example on how to count all the users in the users table without any condition:",
        code: `
                <?php
                include "./sniper.php";
                
                //count all users in the users table
                $allUsers = countRows("users");

                echo $allUsers;
                
                ?>
                `,
      },
      {
        title: "Check the existance of data based on multiple conditions",
        description:
          "Here is an example on how to check a data existance based on multiple conditions, and we'll use email and password columns in the user tsable as an example. ",
        code: `
                <?php
                include "./sniper.php";
                
                // find the number of male users in the users table
                $male_users = countRows("users", "gender = 'male'");
                
                // lets display the result
                echo $male_users;
                
                ?>
                `,
      },
    ],
  },
  {
    title: "Days between dates",
    description: `To find the number of days between 2 dates all you need to do is to pass the first and last dates as a parameters of the <b>getDaysBetweenDates()</b> function , check the parameters below:<br /> 
    
        <li>1st parameter: first date </li>
        <li>2nd parameter: second date</li>

        Here are some examples to describe how you can use the function
       
        `,
    examples: [
      {
        title: "Get the number of days between today and a future date",
        description:
          "Here is an example on how to count the number of days between 2 dates:",
        code: `
                <?php
                include "./sniper.php";
                
                $startDate = '2022-01-01';
                $endDate = '2022-01-15';
                
                // Get the number of days between the two dates
                $days = getDaysBetweenDates($startDate, $endDate);
                
                echo "There are " . $days . " days between " . $startDate . " and " . $endDate;

                // OUTPUT DATA
                // There are 14 days between 2022-01-01 and 2022-01-15

                ?>
                `,
      },
      {
        title: "Get the number of days between today and a future date",
        description:
          "We'll use the getDaysBetweenDates function to get the number of days between today and a future date",
        code: `
                <?php
                include "./sniper.php";
                
                $futureDate = '2023-05-01';

                $days = getDaysBetweenDates(date('Y-m-d'), $futureDate);

                echo "There are " . $days . " days until " . $futureDate;
                
                // OUTPUT DATA as of today 7th march, 2023
                // There are 428 days until 2023-05-01
                
                ?>
                `,
      },
    ],
  },
  {
    title: "Upcoming events",
    description: `To filter the expired event based on date comparison, we recommend using <b>filterUpcomingEvents(). it accept a wide range of data and filtter out all the events that are expired by checking and comparing the current date and the event's date</b>  check the parameters below:<br /> 
    
        <li>1st parameter: all the events in form of array</li>
        <li>2nd parameter: the date column name</li>

        Here are some examples to describe how you can use the function
       
        `,
    examples: [
      {
        title: "Filtering upcoming events from an array of events",
        description:
          "Here is an example on how to find only the upcoming events:",
        code: `
                <?php
                include "./sniper.php";
                
                // Assuming that we have an array of events
                $events = [
                    [
                        'id' => 1,
                        'title' => 'Event 1',
                        'date' => '2023-03-10 15:00:00'
                    ],
                    [
                        'id' => 2,
                        'title' => 'Event 2',
                        'date' => '2023-03-12 10:00:00'
                    ],
                    [
                        'id' => 3,
                        'title' => 'Event 3',
                        'date' => '2023-03-15 18:30:00'
                    ],
                ];

                // Filter upcoming events
                $upcomingEvents = filterUpcomingEvents($events, 'date');

                // Print the result
                if ($upcomingEvents !== 0) {
                    foreach ($upcomingEvents as $event) {
                        echo "Upcoming Event: {$event['title']}, Date: {$event['date']}";
                    }
                } else {
                    echo "No upcoming events found.";
                }

                ?>
                `,
      },
      {
        title: "Fetching and filtering events from database",
        description:
          "Here is an example on how to fetch events example appointments, competitions and other events. And also filter them by their dates ",
        code: `
                <?php
                include "./sniper.php";
                
                // Assuming that we have a table named "appointments"
                // with columns "id", "title", "date"

                // Select all appointments from the table using selectAll()
                $appointments = selectAll("appointments");

                // Filter upcoming appointments
                $upcomingAppointments = filterUpcomingEvents($appointments, 'date');

                // Print the result
                if ($upcomingAppointments !== 0) {
                    foreach ($upcomingAppointments as $event) {
                        echo "Upcoming Event: {$event['title']}, Date: {$event['date']}";
                    }
                } else {
                    echo "No upcoming appointment found.";
                }

                ?>
                `,
      },
    ],
  },
  {
    title: "Todays events",
    description: `The <b>\`getTodayItems()\`</b> function takes in an array of data and a string indicating the name of the column that contains date values. It then loops through each item in the data array and checks if the date in the specified column matches today's date. The function returns an array that includes the todaysItems array as well as the number of items that were added to it. In essence, the function is used to filter an array of items to only include those that have a date value matching the current day. <br />Check the parameters below:<br /> 
    
        <li>1st parameter: all the events in form of array</li>
        <li>2nd parameter: the name of the column that contain the date value</li>

        Here are some examples to describe how you can use the function
       
        `,
    examples: [
      {
        title: "Fetching and filtering events to get todays events only",
        description:
          "Suppose you have a table named `tasks` with columns id, title, and due_date, and you want to get all tasks due today",
        code: `
                <?php
                include "./sniper.php";
                
                // First, fetch all tasks from the database
                $today_tasks = getTodayItems(selectAll("tasks"), "due_date");

                // Finally, loop through the result and display the task titles
                foreach ($today_tasks['data'] as $task) {
                    echo $task['title'] . "<br>";
                }


                ?>
                `,
      },
      {
        title: "Filtering an array of events to get todays events only",
        description:
          "Suppose you have an array of events with event_date as the date column, and you want to filter the events that are happening today:",
        code: `
                <?php
                include "./sniper.php";
                
                $events = array(
                    array("event_id" => 1, "event_name" => "Conference", "event_date" => "2023-03-06"),
                    array("event_id" => 2, "event_name" => "Concert", "event_date" => "2023-03-05"),
                    array("event_id" => 3, "event_name" => "Exhibition", "event_date" => "2023-03-07"),
                );
                
                // Pass the events array and the name of the date column to the function
                $today_events = getTodayItems($events, "event_date");
                
                // Loop through the result and display the event names
                foreach ($today_events['data'] as $event) {
                    echo $event['event_name'] . "<br>";
                }

                ?>
                `,
      },
    ],
  },
  {
    title: "Next event",
    description: `The <b>\`getNextEvent\`()</b> function in PHP Sniper is used to get the next event in an array of events based on the date and time columns provided. It returns the next event as an associative array, or null if there is no next event.<br />Check the parameters below:<br /> 
    
        <li>1st parameter: an array of events</li>
        <li>2nd parameter: the name of the column containing the event dates</li>
        <li>3rd parameter: an optional column for event times</li>
<br />
        Here are some examples to describe how you can use the function
       
        `,
    examples: [
      {
        title: "Getting the next event based on date only",
        description:
          "To use the function to get the next event based on date only, see the following example",
        code: `
                <?php
                include "./sniper.php";
                
                $events = [
                    ["name" => "Event 1", "date" => "2023-03-15"],
                    ["name" => "Event 2", "date" => "2023-03-20"],
                    ["name" => "Event 3", "date" => "2023-03-10"],
                ];
                
                $nextEvent = getNextEvent($events, "date");
                
                echo "The next event is: " . $nextEvent["name"] . " on " . $nextEvent["date"];
                

                // OUTPUT DATA
                / The next event is: Event 1 on 2023-03-15


                ?>
                `,
      },
      {
        title: "Getting the next event based on date and time",
        description:
          "To fetch the next event based on date and time using the same function is to add the third optional parameter, see the following example",
        code: `
                <?php
                include "./sniper.php";
                
                $events = [
                    ["name" => "Event 1", "date" => "2023-03-15", "time" => "13:00:00"],
                    ["name" => "Event 2", "date" => "2023-03-20", "time" => "15:30:00"],
                    ["name" => "Event 3", "date" => "2023-03-10", "time" => "10:00:00"],
                ];
                
                $nextEvent = getNextEvent($events, "date", "time");
                
                echo "The next event is: " . $nextEvent["name"] . " on " . $nextEvent["date"] . " at " . $nextEvent["time"];
                
                // OUTPUT DATA
                //  The next event is: Event 3 on 2023-03-10 at 10:00:00


                ?>
                `,
      },
    ],
  },
  {
    title: "Expired events",
    description: `The <b>\`getExpiredEvents()\`</b> function is used to filter and return an array of events from a larger array of events based on a given date column. Specifically, the function filters and returns an array of events whose date in the specified column is past compared with the current time.<br />Check the parameters below:<br /> 
    
        <li>1st parameter: an array of events</li>
        <li>2nd parameter: the name of the column containing the event dates</li>
<br />
        Here are some examples to describe how you can use the function
       
        `,
    examples: [
      {
        title: "Filtering the expired events from an array",
        description:
          "To use the function to get the expired events from an array based on date only, see the following example",
        code: `
                <?php
                include "./sniper.php";
                
                // sample array of events
                $events = [
                    ["title" => "Event 1", "date" => "2022-01-01"],
                    ["title" => "Event 2", "date" => "2022-02-01"],
                    ["title" => "Event 3", "date" => "2022-03-01"],
                    ["title" => "Event 4", "date" => "2023-03-01"]
                ];

                // call the function to get expired events
                $expiredEvents = getExpiredEvents($events, "date");

                // output the results
                if ($expiredEvents === 0) {
                    echo "No expired events found";
                } else {
                    foreach ($expiredEvents as $event) {
                        echo "{$event['title']} has expired";
                    }
                }


                ?>
                `,
      },
      {
        title: "Getting the expired events from database",
        description:
          "Suppose you have a table named `appointments` with columns id, title, and due_date, and you want to get all the expired appointments. See the following example",
        code: `
                <?php
                include "./sniper.php";
                
                $events = SelectAll("appointments");
                
                $expiredEvents = getExpiredEvents($events, "due_date");
                
                // output the results
                if ($expiredEvents === 0) {
                    echo "No expired events found";
                } else {
                    foreach ($expiredEvents as $event) {
                        echo "{$event['title']} has expired";
                    }
                }

                ?>
                `,
      },
    ],
  },
  {
    title: "Search characters",
    description: `The function <b>\`search()\`</b> takes in two parameters: $data and $query. It returns true if $data contains all the characters in $query and false otherwise.<br />Check the parameters below:<br /> 
    
        <li>1st parameter: The string to search within.</li>
        <li>2nd parameter: The query string to search for</li>
<br />
        Here are some examples to describe how you can use the function
       
        `,
    examples: [
      {
        title: "Filtering the expired events from an array",
        description:
          "In the following example, $data contains all the characters in $query (i, s, and p) so the function returns true. See the following example",
        code: `
                <?php
                include "./sniper.php";

                $data = "This is a sample text.";
                $query = "isp";
                $result = search($data, $query);

                echo $result; // Output: true

                ?>
                `,
      },
      {
        title: "Getting the expired events from database",
        description:
          "In the following example, none of the characters in $query are present in $data, so the function returns false. See the example",
        code: `
                <?php
                include "./sniper.php";
                
                $data = "Hello world!";

                $query = "abc";
                $result = search($data, $query);

                echo $result; // Output: false


                ?>
                `,
      },
    ],
  },
  {
    title: "Currency format",
    description: `The function <b>\`currencyFormat()\`</b> function is used to format a number as currency, with an optional number of decimal places and a currency symbol.Finally, the function adds the currency symbol to the formatted number and returns the resulting string.<br />Check the parameters below:<br /> 
    
        <li>1st parameter: the number to be formatted as currency</li>
        <li>2nd parameter: (optional): the number of decimal places to include in the formatted number. Defaults to 0 if not provided</li>
        <li>3rd parameter: (optional): the currency symbol to use. Defaults to an empty string if not provided.</li>
<br />
        Here are some examples to describe how you can use the function
       
        `,
    examples: [
        {
            title: "Format a number as NGN with no decimal places.",
            description:
            "The following function will return the formatted amount with no decimal starting with euros symbol",
            code: `
            <?php
            include "./sniper.php";
            
            $price = 10.50;
            $formatted_price = currencyFormat($price, 0, 'NGN');
            
            echo $formatted_price; // Output: "NGN10"
            
            
            ?>
            `,
        },
        {
          title: "Format a number as dollars with two decimal places",
          description:
            "The following function will return the formatted amount with two decimal places starting with dallar symbol",
          code: `
                  <?php
                  include "./sniper.php";
    
                  $price = 15.99;
                  $formatted_price = currencyFormat($price, 2, '$');
    
                  echo $formatted_price; // Output: "$15.99"
    
                  ?>
                  `,
        },
    ],
  },
];
