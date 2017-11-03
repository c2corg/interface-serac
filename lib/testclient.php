<?php

require("clientSerac.class.php");

$client = new clientSerac();
    
var_dump($client->changeReports(["title" => "nouveau titre", "description" => "je change la description","id" => "1", "id_user" => "1"]));
