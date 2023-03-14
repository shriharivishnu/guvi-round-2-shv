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
    $email = $_POST['email'];
    $pass = $_POST['password'];

    $user = $conn->prepare("SELECT * FROM user WHERE email = ?");
    $user->bind_param('s', $email);
    $user->execute();
    $result = $user->get_result();
    $account = $result->fetch_assoc();

    if (!$account) {
        echo ("Not an account");
    } elseif ($account['pass'] != $pass) {
        echo ("incorrect password");
    } else {
        echo json_encode($account);
    }
}
?>