<?php
// class files
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
    $interfaceSerac = new InterfaceSerac($db,$interfaceAuth->getIdProvider(),true);

    $interfaceSerac->request($method,$request,$data);
}
else
{
    echo '{"method":"'.$method.'","request":"'.$request[0].'","error":"Access denied. Bad api key or access key."}';
}
