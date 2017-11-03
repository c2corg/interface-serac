<?php
header("Access-Control-Allow-Origin: *");
$method = $_SERVER['REQUEST_METHOD'];
$request = str_replace("index.php","",explode("/",substr(substr($_SERVER['REQUEST_URI'],0,strpos($_SERVER['REQUEST_URI'],"?")),1)));

$putraw = fopen("php://input","r");
$putdata = Array();

while($putline = fread($putraw,1024)) {
    $params = explode("&",$putline);

    for($i = 0;$i<count($params);$i++) {
        $pos = strpos($params[$i],"=");
        $putdata[substr($params[$i],0,$pos)] = substr($params[$i],$pos+1);
    }
}

if($method === "GET" || $method === "POST") {
  $data = array_merge($_GET,$_POST);
} else {
  $data = array_merge($_GET,$_POST,$putdata);
}

$headers = getallheaders();
if(!isset($headers['Token']))
    $headers['Token'] = null;
