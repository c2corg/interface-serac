<?php

class interfaceAuth {

  private $db;
  private $id_provider;
  private $apikey;
  private $hash;

  public function __construct($db,$key,$hash) {
    $this->db = $db;

    $this->apikey = $key;
    $this->hash = $hash;
  }

  public function isAuthorize()
  {
    $test = $this->db->prepare("SELECT id,secret FROM provider WHERE apikey=?");
    $test->execute(array($this->apikey));

    $rows = $test->fetchAll(PDO::FETCH_ASSOC);
    if($this->hash === $this->makeHash($this->apikey,$rows[0]['secret'])) {
  
      $this->id_provider = $rows[0]['id'];
      return true;
    }
    else {
      return false;
    }
  }

  private function makeHash($apikey,$secret)
  {
    return hash("sha512","salt".$apikey."".date('z')."".date('Y')."".$secret."resalt");
  }

  private function handle_error($method,$request,$data)
  {
    echo '{"method":"'.$method.'","request":"'.$request.'","error":"'.$data.'"}';
  }

  public function getIdProvider()
  {
    return $this->id_provider;
  }
}
