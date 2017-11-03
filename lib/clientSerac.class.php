<?php


class clientSerac {
    private $token;
    private $url = "http://127.0.0.1/";
    private $client_key = "123456";
    private $client_secret = "hello";

    function __construct($token=NULL)
    {

    }


    private function makeHash() {
        return hash("sha512","salt".$this->client_key."".date('z')."".date('Y')."".$this->client_secret."resalt");
    }

    private function cleanData($data)
    {
        foreach($data as $key => $info)
        {
            if(is_string($data[$key])) {
                if(trim($data[$key]) == "")
                {
                    unset($data[$key]);
                }
            }
        }
        return $data;
    }

    public function changeReports($data)
    {
        $result = $this->doRequest($data,"reports","POST");
        $data = json_decode($result);
        return $data;
    }
    public function getReports($data)
    {

        /*
        $data = array(
            'p' => "0", // [optionnel] page de résultat
        ); */

        $result = $this->doRequest($data,"reports","GET");
        $data = json_decode($result);
        return $data;

    }

    public function addReports($data)
    {

        /*
        $data = array(
            'p' => "0", // [optionnel] page de résultat
        ); */
        $data = $this->cleanData($data);
        $result = $this->doRequest($data,"reports","POST");
        $data = json_decode($result);
        return $data;

    }

    public function getSearch($data)
    {

        /*
        $data = array(
            'p' => "0", // [optionnel] page de résultat
            's' => "ma recherche" // [obligatoire] supérieur a 3 caractères
        ); */

        $result = $this->doRequest($data,"search","GET");
        $data = json_decode($result);
        return $data;

    }

    function doRequest($data,$ressource,$type="GET")
    {

        // var_dump($data);

        $headers = array(
            'Content-type: application/x-www-form-urlencoded',
            'Token: '.$this->makeHash()
        );

        if($type == 'GET')
        {
            $data['client_key'] = $this->client_key;
            $query = http_build_query($data);
            $curl = curl_init($this->url."".$ressource."?".$query);
        }
        else
        {
            $curl = curl_init($this->url."".$ressource."?client_key=".$this->client_key);
        }




        curl_setopt($curl, CURLOPT_HEADER, false);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);


        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

        if($type == "POST")
        {
            curl_setopt($curl,CURLOPT_POST, count($data));
            curl_setopt($curl, CURLOPT_POST, true);
        }
        else
        {

            curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $type);
        }

        if($data != null)
            curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($data));



        $response = curl_exec($curl);
        echo'<pre>';
        var_dump($response);
        echo '</pre>';
        if (!$response) {
            die("Connection Failure.n");
        }


        return $response;

    }


}

?>
