<?php

class interfaceSerac {

  private $db;
  private $id_provider;
  private $id_admin;

  public function __construct($db,$id_provider,$is_admin) {
    $this->db = $db;
    $this->id_provider = $id_provider;
    $this->is_admin = $is_admin;
  }

  public function request($method,$request,$data) {
    switch ($method) {
      case 'PUT':
      $this->putRequest($method,$request,$data);
      break;

      case 'POST':
      $this->postRequest($method,$request,$data);
      break;

      case 'GET':
      $this->getRequest($method,$request,$data);
      break;

      case 'DELETE':
      $this->deleteRequest($method,$request,$data);
      break;

      default:
      $this->handleError($method,$request,"unrecognised method");
      break;
    }

  }

  private function makePutQuery($data) {
    $query = $this->db->prepare('SELECT * FROM `reports` WHERE id_provider = :id_provider AND id = :id AND id_user = :id_user');
    $query->execute(Array('id_provider' => $this->id_provider,"id" => $data['id'], 'id_user' => $data['id_user']));
    $result = $query->fetch();
  }

  private function putRequest($method,$request,$data)
  {
    switch($request[0])
    {
      case 'reports':

      if($this->controlPutData($method,$request,$data))
      {

        $this->makePutQuery($data);

        if($this->is_admin) {
          $query = $this->db->prepare('UPDATE `reports` SET
            `visibility` = :visibility,
            `json_serac` = :json_serac,
            `json_custom` = :json_custom,
            `title` = :title,
            `activities` = :activities,
            `event_type` = :event_type,
            `date_start` = :date_start,
            `elevation` = :elevation,
            `nb_participants` = :nb_participants,
            `nb_impacted` = :nb_impacted,
            `quality` = :quality,
            `updated_at` =  now()
            WHERE id_provider= :id_provider AND id = :id
            ');

            $query->execute(Array('id' => $request[1],
            'id_provider' => $this->id_provider,
            'visibility' => $data['visibility'],
            'json_serac' => $this->makeSeracJson($data),
            'json_custom' => $data['json_custom'],
            'title' => $data['title'],
            'activities' => json_encode($data['activities']),
            'event_type' => json_encode($data['event_type']),
            'date_start' => $data['date_start'],
            'elevation' => $data['elevation'],
            'nb_participants' => $data['nb_participants'],
            'nb_impacted' => $data['nb_impacted'],
            'quality' => $data['quality'],
          ));

          if($data['visibility'] == '2') // 0 private, 1 private autorize user, 2 public , we push it on c2c
          {

            $test = $this->db->prepare('SELECT pushed FROM `reports` WHERE id_provider = :id_provider AND id = :id');
            $test->execute(Array(id_provider => $this->id_provider, "id" => intval($request[1])));
            $res = $test->fetch();
            if($res['pushed'] === 0) {
              $this->pushToC2C($data,$request[1]);
            }
          }


        } else {
          $query = $this->db->prepare('UPDATE `reports` SET
            `visibility` = :visibility,
            `json_serac` = :json_serac,
            `json_custom` = :json_custom,
            `title` = :title,
            `activities` = :activities,
            `event_type` = :event_type,
            `date_start` = :date_start,
            `elevation` = :elevation,
            `nb_participants` = :nb_participants,
            `nb_impacted` = :nb_impacted,
            `quality` = :quality,
            `updated_at` =  now()
            WHERE id_provider= :id_provider AND id = :id AND id_user: id_user
            ');

            $query->execute(Array('id' => $request[1],
            'id_provider' => $this->id_provider,
            'id_user' => $data['id_user'],
            'visibility' => $data['visibility'],
            'json_serac' => $this->makeSeracJson($data),
            'json_custom' => $data['json_custom'],
            'title' => $data['title'],
            'activities' => json_encode($data['activities']),
            'event_type' => '',
            'date_start' => $data['date_start'],
            'date_end' => $data['date_end'],
            'elevation' => $data['elevation'],
            'severity' => $data['severity'],
            'nb_participants' => $data['nb_participants'],
            'nb_impacted' => $data['nb_impacted'],
            'quality' => $data['quality'],
            'language' => $data['language']
          ));

          $test = $this->db->prepare('SELECT * FROM `reports` WHERE id_provider = :id_provider AND id_user = :id_user AND id = :id');
          $test->execute(Array("id_provider" => $this->id_provider, "id_user" => $data['id_user'], "id" => intval($request[1])));

          if($data['visibility'] == 2) // 0 private, 1 private autorize user, 2 public , we push it on c2c
          {
            $test = $this->db->prepare('SELECT pushed FROM `reports` WHERE id_provider = :id_provider AND id_user = :id_user AND id = :id');
            $test->execute(Array(id_provider => $this->id_provider, 'id_user' => $data['id_user'], "id" => intval($request[1])));
            $res = $test->fetch();
            if($res['pushed'] === 0) {
              $this->pushToC2C($data,$request[1]);
            }
          }
        }
        $this->handleOk($request,"ok");
      }
      else {
        echo 'false';
      }
      break;
    }
  }

  private function getJwtProvider() {
    echo 'get data provider';
      $query_ident = $this->db->prepare("SELECT login,password FROM provider WHERE id=:id");
      $query_ident->execute(Array("id"=>$this->id_provider));
      $ident = $query_ident->fetch();

      $curl = curl_init("https://api.demov6.camptocamp.org/users/login");

      $data = Array( "discourse" => false, "password" => $ident['password'], "username" => $ident['login'], "remember" => true);

      curl_setopt($curl, CURLOPT_HTTPHEADER,
      array('Content-Type: application/json' ,
      'Content-Length: ' . strlen(json_encode($data))));

      curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
      curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($curl, CURLOPT_POSTFIELDS,json_encode($data));
      curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);
      $result = curl_exec($curl);
      curl_close($curl);
      return json_decode($result)->token;
  }

  private function pushToC2C($data,$id=NULL) {

    $curl = curl_init("https://api.demov6.camptocamp.org/xreports");
    curl_setopt($curl, CURLOPT_HTTPHEADER,
    array('Content-Type: application/json' ,
    'Authorization: JWT token="'.$this->getJwtProvider().'"',
    'Content-Length: ' . strlen($this->makeSeracJson($data))));

    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS,$this->makeSeracJson($data));
    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);

    if($id != NULL) {
      $query = $this->db->prepare('UPDATE `reports` SET `pushed` = TRUE WHERE id = :id');
      $query->execute(Array('id' => $id));
    }

    $result = curl_exec($curl);
    curl_close($curl);

    return json_decode($result);
  }

  private function postRequest($method,$request,$data)
  {

    switch($request[0])
    {
      case 'reports':
      if(isset($data['id']))
      {
        if($this->controlPutData($method,$request,$data))
        {

          $this->makePutQuery($data);
          if($this->is_admin) {
            $query = $this->db->prepare('UPDATE `reports` SET
              `visibility` = :visibility,
              `json_serac` = :json_serac,
              `json_custom` = :json_custom,
              `title` = :title,
              `activities` = :activities,
              `event_type` = :event_type,
              `date_start` = :date_start,
              `elevation` = :elevation,
              `nb_participants` = :nb_participants,
              `nb_impacted` = :nb_impacted,
              `quality` = :quality,
              `updated_at` =  now()
              WHERE id_provider= :id_provider AND id = :id
              ');

              $query->execute(Array('id' => $request[1],
              'id_provider' => $this->id_provider,
              'visibility' => $data['visibility'],
              'json_serac' => $this->makeSeracJson($data),
              'json_custom' => $data['json_custom'],
              'title' => $data['title'],
              'activities' => json_encode($data['activities']),
              'event_type' => json_encode($data['event_type']),
              'date_start' => $data['date_start'],
              'elevation' => $data['elevation'],
              'nb_participants' => $data['nb_participants'],
              'nb_impacted' => $data['nb_impacted'],
              'quality' => $data['quality'],
            ));
            if($data['visibility'] == '2') // 0 private, 1 private autorize user, 2 public , we push it on c2c
            {
              $test = $this->db->prepare('SELECT pushed FROM `reports` WHERE id_provider = :id_provider AND id = :id');
              $test->execute(Array("id_provider" => $this->id_provider, "id" => intval($request[1])));
              $res = $test->fetch();

              if($res['pushed'] === 0) {
                $this->pushToC2C($data,$request[1]);
              }
            }
          } else {
            $query = $this->db->prepare('UPDATE `reports` SET
              `visibility` = :visibility,
              `json_serac` = :json_serac,
              `json_custom` = :json_custom,
              `title` = :title,
              `activities` = :activities,
              `event_type` = :event_type,
              `date_start` = :date_start,
              `elevation` = :elevation,
              `nb_participants` = :nb_participants,
              `nb_impacted` = :nb_impacted,
              `quality` = :quality,
              `updated_at` =  now()
              WHERE id_provider= :id_provider AND id = :id AND id_user: id_user
              ');

              $query->execute(Array('id' => $request[1],
              'id_provider' => $this->id_provider,
              'id_user' => $data['id_user'],
              'visibility' => $data['visibility'],
              'json_serac' => $this->makeSeracJson($data),
              'json_custom' => $data['json_custom'],
              'title' => $data['title'],
              'activities' => json_encode($data['activities']),
              'event_type' => '',
              'date_start' => $data['date_start'],
              'date_end' => $data['date_end'],
              'elevation' => $data['elevation'],
              'severity' => $data['severity'],
              'nb_participants' => $data['nb_participants'],
              'nb_impacted' => $data['nb_impacted'],
              'quality' => $data['quality'],
              'language' => $data['language']
            ));

            $test = $this->db->prepare('SELECT * FROM `reports` WHERE id_provider = :id_provider AND id_user = :id_user AND id = :id');
            $test->execute(Array("id_provider" => $this->id_provider, "id_user" => $data['id_user'], "id" => intval($request[1])));

            if($data['visibility'] == 2) // 0 private, 1 private autorize user, 2 public , we push it on c2c
            {
              $test = $this->db->prepare('SELECT pushed FROM `reports` WHERE id_provider = :id_provider AND id_user = :id_user AND id = :id');
              $test->execute(Array(id_provider => $this->id_provider, 'id_user' => $data['id_user'], "id" => intval($request[1])));
              $res = $test->fetch();
              if($res['pushed'] === 0) {
                $this->pushToC2C($data,$request[1]);
              }
            }
          }

          $this->handleOk($request,"ok");
        }
        else {
          echo 'false';
        }

      } else {
        if($this->controlPutData($method,$request,$data))
        {
          if($data['visibility'] == "2")
          $pushed = 1;
          else
          $pushed = 0;

          $query = $this->db->prepare('INSERT INTO `reports` (`id`, `id_provider`, `id_user`,`pushed`, `visibility`, `json_serac`, `json_custom`, `title`, `activities`,`event_type`, `date_start`, `date_end`, `elevation`, `severity`, `nb_participants`, `nb_impacted`, `quality`, `language`, `created_at`, `updated_at`) VALUES (NULL, :id_provider, :id_user, :pushed, :visibility, :json_serac, :json_custom, :title, :activities, :event_type, :date_start, :date_end, :elevation, :severity, :nb_participants, :nb_impacted, :quality, :language, now(), now());');
          $query->execute(Array('id_provider' => $this->id_provider,
          'id_user' => $data['id_user'],
          'pushed' => $pushed,
          'visibility' => $data['visibility'],
          'json_serac' => $this->makeSeracJson($data),
          'json_custom' => $data['json_custom'],
          'title' => $data['title'],
          'activities' => json_encode($data['activities']),
          'event_type' => json_encode($data['event_type']),
          'date_start' => $data['date_start'],
          'date_end' => $data['date_end'],
          'elevation' => $data['elevation'],
          'severity' => $data['severity'],
          'nb_participants' => $data['nb_participants'],
          'nb_impacted' => $data['nb_impacted'],
          'quality' => $data['quality'],
          'language' => $data['language']
        ));

        $this->handleOk='"'.$this->db->lastInsertId().'"';
        if($data['visibility'] == 2) // 0 private, 1 private autorize user, 2 public , we push it on c2c
        {
          $idc2c = $this->pushToC2C($data);
        }
      } else {
        echo 'false';
      }
    }

    break;
  }
}

private function validateDate( $date ){
  if (preg_match("/^(\d{4})-(\d{2})-(\d{2}) ([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/", $date, $matches)) {
    if (checkdate($matches[2], $matches[3], $matches[1])) {
      return true;
    }
  }
  return false;
}

private function isValidJson($json) {
  $result = json_decode($json);
  if(json_last_error() == "JSON_ERROR_NONE") {
    return true;
  }
  else {
    return false;
  }
}

private function controlActivities($activities) {
  foreach($activities as $activity)
  {
    if($activity != 'skitouring' && $activity != 'snow_ice_mixed' && $activity != 'mountain_climbing' && $activity != 'rock_climbing' && $activity != 'ice_climbing' && $activity != 'hiking' && $activity != 'snowshoeing' && $activity != 'paragliding' && $activity != 'mountain_biking' && $activity != 'via_ferrata' && $activity != 'slacklining') {
      return false;
    }

  }
  return true;
}

private function controlPutData($method,$request,$data) {

  if($method == "POST")
  {

    if(!isset($data['activities'])) {
      return false;
    }

    if(!isset($data['title'])) {
      return false;
    }
  }

  if(isset($data['date_start'])) {
    if(trim($data['date_start']) == "") {
      $this->handleError($method,$request,'date must be set.');
      return false;
    }
  }

  if(isset($data['elevation'])) {
    if(!is_numeric($data['elevation']))
    {
      $this->handleError($method,$request,'elevation must be a number.');
      return false;

    }
  }
  if(isset($data['nb_participants'])) {
    if (!is_numeric($data['nb_participants'])) {
      $this->handleError($method,$request,'nb_participants must be a number.');
      return false;
    }
  }

  if(isset($data['json_custom']))
  {
    if(!$this->isValidJson($data['json_custom'])) {
      $this->handleError($method,$request,'json_custom must be a valid json string.');
      return false;
    }
  }
  if(isset($data['activities']))
  {

    if(!is_array($data['activities'])) {
      $this->handleError($method,$request,'activities must be an array.');
      return false;
    }
    if(count($data['activities']) == 0) {
      $this->handleError($method,$request,'activities must have a value.');
      return false;
    }
    if(!($this->controlActivities($data['activities']))) {
      $this->handleError($method,$request,'activities values are not correct.');
      return false;
    }
  }
  return true;
}

private function getRequest($method,$request,$data) {
  switch($request[0])
  {
    case 'reports':
    if(isset($request[1]) && is_numeric($request[1])) { // get a single report
      if($this->is_admin) {
        $query = $this->db->prepare('SELECT * FROM `reports` WHERE id_provider = :id_provider AND id = :id');
        $query->execute(Array("id_provider" => $this->id_provider, "id" => intval($request[1])));
      } else {
        $query = $this->db->prepare('SELECT * FROM `reports` WHERE id_provider = :id_provider AND ((visibility = 0 AND id_user = :id_user) OR (visibility = 1 OR visibility = 2)) AND id = :id');
        $query->execute(Array("id_provider" => $this->id_provider, "id_user" => $data['id_user'], "id" => intval($request[1])));
      }

      $this->handleOk($request,json_encode($query->fetch()));
    }
    else // list of report
    {
      if(isset($data['p'])) {
        $page = $data['p'] * 20;
      } else {
        $page = 0;
      }

      if($this->is_admin) {
        $query = $this->db->prepare('SELECT id,id_user,title, activities, visibility,date_start, severity,event_type FROM `reports` WHERE id_provider = :id_provider ORDER BY created_at DESC LIMIT :page, 20');
        $query->execute(Array("id_provider" => $this->id_provider, "page" => $page));
      } else {
        $query = $this->db->prepare('SELECT id,id_user,title, activities, visibility,date_start, severity,event_type FROM `reports` WHERE id_provider = :id_provider AND ((visibility = 0 AND id_user = :id_user) OR (visibility = 1 OR visibility = 2)) ORDER BY created_at DESC LIMIT :page, 20');
        $query->execute(Array("id_provider" => $this->id_provider, "id_user" => $data['id_user'], "page" => $page));
      }

      $this->handleOk($request,json_encode($query->fetchAll()));
    }
    break;

    case 'search':
    if(isset($data['p'])) {
      $page = $data['p'] * 20;
    } else {
      $page = 0;
    }

    if(strlen($data['s']) > 3)
    {
      $search = implode('%',explode(" ",$data['s']));

      if($this->is_admin) {
        $query = $this->db->prepare('SELECT id,id_user,title, activities, date_start, severity,event_type FROM `reports` WHERE id_provider = :id_provider AND title LIKE :search ORDER BY created_at DESC LIMIT :page, 20');
        $query->execute(Array("id_provider" => $this->id_provider, "search" => $search, "page" => $page));
      } else {
        $query = $this->db->prepare('SELECT id,id_user,title, activities, date_start, severity,event_type FROM `reports` WHERE id_provider = :id_provider AND ((visibility = 0 AND id_user = :id_user) OR (visibility = 1)) ORDER BY created_at DESC LIMIT :page, 20');
        $query->execute(Array("id_provider" => $this->id_provider, "search" => $search, "page" => $page));
      }

      $this->handleOk($request,json_encode($query->fetchAll()));
    }
    else
    {
      $this->handleError($method,$request,'search string must be longer than 3 characters.');
      return ;
    }

    break;
  }
}

private function makeSeracJson($data)
{
  $obj = (object)[];
  $obj->activities = $data['activities'];
  $obj->associations = (object)[];
  $obj->associations->waypoints = Array();
  $obj->associations->waypoint_children = Array();
  $obj->associations->routes = Array();
  $obj->associations->all_routes = (object)[];
  $obj->associations->all_routes->total = 0;
  $obj->associations->all_routes->documents = Array();
  $obj->associations->users = Array();
  $obj->associations->recent_outings = (object)[];
  $obj->associations->recent_outings->total = 0;
  $obj->associations->recent_outings->documents = Array();
  $obj->associations->outings = Array();
  $obj->associations->articles = Array();
  $obj->associations->books = Array();
  $obj->associations->xreports = Array();
  $obj->associations->images = Array();
  $obj->associations->areas = Array();
  $obj->locales = Array();
  $locale = (object)[];
  $locale->title = $data['title'];
  $locale->lang = $data['language'];
  $locale->summary = $data['summary'];
  $locale->description = $data['description'];
  $locale->place = $data['place'];
  $locale->route_study = $data['route_study'];
  $locale->conditions = $data['conditions'];
  $locale->training = $data['training'];
  $locale->motivations = $data['motivations'];
  $locale->group_management = $data['group_management'];
  $locale->risk = $data['risk'];
  $locale->time_mangement = $data['time_management'];
  $locale->safety = $data['safety'];
  $locale->reduce_impact = $data['reduce_impact'];
  $locale->increase_impact= $data['increase_impact'];
  $locale->modifications = $data['modifications'];
  $locale->other_comments = $data['other_comments'];

  array_push($obj->locales,$locale);
  $obj->type = "";

  $obj->quality = $data['quality'];
  $obj->geometry = (object)[];
  $obj->geometry->geom =  "{\"type\": \"Point\", \"coordinates\": [".$data['x'].", ".$data['y']."]}";
  $obj->elevation = $data['elevation'];
  $obj->date = $data['date'];
  $obj->event_type = $data['event_type'];
  $obj->nb_participants = $data['nb_impacted'];
  $obj->severity = $data['severity'];
  $obj->rescue = $data['rescue'];
  $obj->avalanche_level = $data['avalanche_level'];
  $obj->avalanche_slope = $data['avalanche_slope'];
  $obj->age = $data['age'];
  $obj->gender = $data['gender'];
  $obj->author_status = $data['author_status'];
  $obj->autonomy = $data['autonomy'];
  $obj->activity_rate = $data['activity_rate'];
  $obj->nb_outings = $data['nb_outings'];
  $obj->previous_injuries = $data['previous_injuries'];
  $obj->disable_comments = $data['disable_comments'];

  return json_encode($obj);
}
private function deleteRequest($method,$request,$data)
{

  switch($request[0])
  {
    case 'reports':
    if(isset($request[1]) && is_numeric($request[1])) {
      if($this->is_admin) {
        $query = $this->db->prepare('DELETE FROM `reports` WHERE id_provider = :id_provider AND id = :id');
        $query->execute(Array("id_provider" => $this->id_provider, "id" => intval($request[1])));
      } else {
        $query = $this->db->prepare('DELETE FROM `reports` WHERE id_provider = :id_provider AND id_user = :id_user AND id = :id');
        $query->execute(Array("id_provider" => $this->id_provider, "id_user" => $data['id_user'], "id" => intval($request[1])));
      }
      $this->handleOk($request,"ok");
    }
    break;

  }
}

private function handleOk($request,$data)
{
  if($data === "ok")
  echo '{"'.$request[0].'":"'.$data.'"}';
  else
  echo '{"'.$request[0].'":'.$data.'}';
}
private function handleError($method,$request,$data)
{
  echo '{"method":"'.$method.'","request":"'.implode("/",$request).'","error":"'.$data.'"}';
}


}
