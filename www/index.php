<?php
// class files
error_reporting(E_ALL);
ini_set("log_errors", true);
ini_set("display_errors", false);
require("../lib/libRequest.php");
require("../class/interfaceAuth.class.php");
require("../class/interfaceSerac.class.php");

// prepare the database
require("../partials/db.php");

// get all parameters
require("../partials/parameters.php");

$interfaceAuth = new interfaceAuth($db,$data['client_key'],$headers['Token']);

if($interfaceAuth->isAuthorize())
{
    $admin = false;
    if(isset($_GET['fa'])) {
      if($_GET['fa'] == "1")
        $admin = true;
    } else if(isset($data['fa'])) {
      if($data['fa'] == "1")
        $admin = true;
    }

    $interfaceSerac = new InterfaceSerac($db,$interfaceAuth->getIdProvider(),$admin);
    $interfaceSerac->request($method,$request,$data);
}
else
{
    echo '{"method":"'.$method.'","request":"'.$request[0].'","error":"Access denied. Bad api key or access key."}';
}
