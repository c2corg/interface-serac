<?php
header("Access-Control-Allow-Origin: *");
$method = $_SERVER['REQUEST_METHOD'];
$request = str_replace("index.php","",explode("/",substr(substr($_SERVER['REQUEST_URI'],0,strpos($_SERVER['REQUEST_URI'],"?")),1)));

$putraw = fopen("php://input","r");
$putdata = Array();


while($putline = fread($putraw,1024))
{
    
    $params = explode("&",$putline);
    for($i = 0;$i<count($params);$i++)
    {
        $pos = strpos($params[$i],"=");
        $putdata[substr($params[$i],0,$pos-1)] = substr($params[$i],$pos);
    }
}
var_dump($putdata);

$data = array_merge($_GET,$_POST);





$headers = getallheaders();
if(!isset($headers['Token']))
    $headers['Token'] = null;


