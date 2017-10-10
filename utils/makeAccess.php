<?php

require("../partials/db.php");

function makeHash($apikey,$secret)
{
    return hash("sha512","salt".$apikey."".date('z')."".date('Y')."".$secret."resalt");
}


echo makeHash($argv[1],$argv[2]);
