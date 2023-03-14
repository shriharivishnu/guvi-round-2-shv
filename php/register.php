<?php
if (isset($_POST['email'])) {

    $servername = "sql12.freesqldatabase.com";
    $username = "sql12604120";
    $password = "ivVKZX3kuD";
    $dbname = "sql12604120";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $pass = $_POST['password'];

    $user = $conn->prepare("SELECT * FROM user WHERE email = ?");
    $user->bind_param('s', $email);
    $user->execute();
    $result = $user->get_result();
    $account = $result->fetch_assoc();

    if ($account) {
        echo ("existing");
        exit;
    }

    $stmt = $conn->prepare("INSERT INTO user (firstname, lastname, email, pass) VALUES (?, ?, ?, ?)");
    $stmt->bind_param('ssss', $firstname, $lastname, $email, $pass);

    $stmt->execute();

    echo ("success");

    $conn->close();

    exit;
}
?>
