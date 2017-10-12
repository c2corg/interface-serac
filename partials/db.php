<?php
$host = '127.0.0.1';
$db   = 'interface-serac';
$user = 'user';
$pass = 'password';

$dsn = "pgsql:host=$host;dbname=$db";
$opt = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];
try {
$db = new PDO($dsn, $user, $pass, $opt);
}
catch(PDOException $e) {
die($e);
}
