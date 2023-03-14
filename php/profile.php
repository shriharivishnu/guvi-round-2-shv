<?php

$client = new \MongoDB\Client(
    'mongodb+srv://danielraj:guvitask@profiledata.ab7l9uc.mongodb.net/?retryWrites=true&w=majority'
);

$db = $client->db;
$collection = $db->uservalues;


$redis = new Redis();
$redis->connect('127.0.0.1', 5000);
$redis->auth('1234');


if (isset($_POST['firstname'])) {

    $id = $_POST['id'];
    $firstname = $_POST['firstname'];
    $email = $_POST['email'];
    $key = $_POST['id'];

    $exist = $collection->findOne(['email' => $email]);

    // Redis

    if (!$redis->get($key)) {

        $redis->set($key, serialize($email));
        $redis->expire($key, 100000);
    } else {
        unserialize($redis->get($key));
    }


    if ($exist) {
        echo json_encode($exist);
    } else {
        $insertOneResult = $collection->insertOne([
            'id' => $id,
            'email' => $email,
            'name' => $firstname,
            'phone' => '00',
            'dob' => '00/00/0000',
            'age' => '20',
            'role' => "Full Stack Developer",
            'gender' => "Male"
        ]);
        echo ("updatelater");
    }
}

// Update values

if (isset($_POST['changerole'])) {

    $role = $_POST['changerole'];
    $email = $_POST['email'];

    $updateResult = $collection->updateOne(
        ['email' => $email],
        ['$set' => ['role' => $role]]
    );
    echo ("success");
} else if (isset($_POST['changephone'])) {

    $phone = $_POST['changephone'];
    $email = $_POST['email'];

    $updateResult = $collection->updateOne(
        ['email' => $email],
        ['$set' => ['phone' => $phone]]
    );
    echo ("success");
} else if (isset($_POST['changedob'])) {

    $dob = $_POST['changedob'];
    $email = $_POST['email'];

    $updateResult = $collection->updateOne(
        ['email' => $email],
        ['$set' => ['dob' => $dob]]
    );
    echo ("success");
} else if (isset($_POST['changeage'])) {

    $age = $_POST['changeage'];
    $email = $_POST['email'];

    $updateResult = $collection->updateOne(
        ['email' => $email],
        ['$set' => ['age' => $age]]
    );
    echo ("success");
} else if (isset($_POST['changegender'])) {

    $gender = $_POST['changegender'];
    $email = $_POST['email'];

    $updateResult = $collection->updateOne(
        ['email' => $email],
        ['$set' => ['gender' => $gender]]
    );
    echo ("success");
}
