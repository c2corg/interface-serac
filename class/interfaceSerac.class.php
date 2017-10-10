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
        var_dump($data);
        $query = $this->db->prepare('SELECT * FROM `reports` WHERE id_provider = :id_provider AND id = :id AND id_user = :id_user');
        $query->execute(Array('id_provider' => $this->id_provider,"id" => $data['id'], 'id_user' => $data['id_user']));
        $result = $query->fetch();

        var_dump($result);
    }

    private function putRequest($method,$request,$data)
    {
        switch($request[0])
        {
            case 'reports':

                if($this->controlPutData($method,$request,$data))
                {

                    $this->makePutQuery($data);
                    /*
                    $query = $this->db->prepare('INSERT INTO `reports` (`id`, `id_provider`, `id_user`, `visibility`, `json_serac`, `json_custom`, `title`, `activities`,`event_type`, `date_start`, `date_end`, `elevation`, `severity`, `nb_participants`, `nb_impacted`, `quality`, `language`, `created_at`, `updated_at`) VALUES (NULL, :id_provider, :id_user, :visibility, :json_serac, :json_custom, :title, :activities, :event_type, :date_start, :date_end, :elevation, :severity, :nb_participants, :nb_impacted, :quality, :language, now(), now());');
                    $query->execute(Array('id_provider' => $this->id_provider,
                                          'id_user' => $data['id_user'],
                                          'visibility' => $data['visibility'],
                                          'json_serac' => $this->makeSeracJson($data),
                                          'json_custom' => $data['json_custom'],
                                          'title' => $data['title'],
                                          'activities' => $data['activities'],
                                          'event_type' => $data['event_type'],
                                          'date_start' => $data['date'],
                                          'date_end' => $data['date'],
                                          'elevation' => $data['elevation'],
                                          'severity' => $data['severity'],
                                          'nb_participants' => $data['nb_participants'],
                                          'nb_impacted' => $data['nb_impacted'],
                                          'quality' => $data['quality'],
                                          'language' => $data['lang']
                                         ));
                                         */

                }


                break;
        }
    }

    private function pushToC2C($data) {
        $curl = curl_init("http://api.demov6.camptocamp.org/xreports");
        curl_setopt($curl, CURLOPT_HTTPHEADER,
                    array('Content-Type: application/json' ,
                          'Authorization: JWT token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImNvdXJnZXR0ZWlzYmFjayIsInN1YiI6ODI4NTE0LCJleHAiOjE1MDE1OTE5MzB9.7T-imKuxMmn1nmKLDnnFxfxS5OVZWrctPrbLe-nNyx0"',
                          'Content-Length: ' . strlen($this->makeSeracJson($data))));
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS,$this->makeSeracJson($data));
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);


        $result = curl_exec($curl);
        var_dump($result);
        curl_close($curl);
        return json_decode($result);
    }

    private function postRequest($method,$request,$data)
    {
        switch($request[0])
        {
            case 'reports':
                echo "post request";

                if($this->controlPutData($method,$request,$data))
                {

                    $query = $this->db->prepare('INSERT INTO `reports` (`id`, `id_provider`, `id_user`, `visibility`, `json_serac`, `json_custom`, `title`, `activities`,`event_type`, `date_start`, `date_end`, `elevation`, `severity`, `nb_participants`, `nb_impacted`, `quality`, `language`, `created_at`, `updated_at`) VALUES (NULL, :id_provider, :id_user, :visibility, :json_serac, :json_custom, :title, :activities, :event_type, :date_start, :date_end, :elevation, :severity, :nb_participants, :nb_impacted, :quality, :language, now(), now());');
                    $query->execute(Array('id_provider' => $this->id_provider,
                                          'id_user' => $data['id_user'],
                                          'visibility' => $data['visibility'],
                                          'json_serac' => $this->makeSeracJson($data),
                                          'json_custom' => $data['json_custom'],
                                          'title' => $data['title'],
                                          'activities' => json_encode($data['activities']),
                                          'event_type' => json_encode($data['event_type']),
                                          'date_start' => $data['date'],
                                          'date_end' => $data['date'],
                                          'elevation' => $data['elevation'],
                                          'severity' => $data['severity'],
                                          'nb_participants' => $data['nb_participants'],
                                          'nb_impacted' => $data['nb_impacted'],
                                          'quality' => $data['quality'],
                                          'language' => $data['lang']
                                         ));

                    if($data['visibility'] == 2) // public , we push it on c2c
                    {
                        $this->pushToC2C($data);
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
            if(!isset($data['activities']))
                return false;

            if(!isset($data['title']))
                return false;
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
                        $query = $this->db->prepare('SELECT * FROM `reports` WHERE id_provider = :id_provider AND ((visibility = 0 AND id_user = :id_user) OR (visibility = 1)) AND id = :id');
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
                        $query = $this->db->prepare('SELECT id,id_user,title, activities, date_start, severity,event_type FROM `reports` WHERE id_provider = :id_provider ORDER BY created_at DESC LIMIT :page, 20');
                        $query->execute(Array("id_provider" => $this->id_provider, "page" => $page));
                    } else {
                        $query = $this->db->prepare('SELECT id,id_user,title, activities, date_start, severity,event_type FROM `reports` WHERE id_provider = :id_provider AND ((visibility = 0 AND id_user = :id_user) OR (visibility = 1)) ORDER BY created_at DESC LIMIT :page, 20');
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
        $locale->lang = $data['lang'];
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
        $obj->geometry->geom = "{\"type\":\"Point\",\"coordinates\":[468028.9954234603,5509498.629907387]}";
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

        return '{
	"associations": {
		"waypoints": [],
		"waypoint_children": [],
		"routes": [{
			"global_rating": null,
			"activities": ["rock_climbing"],
			"geometry": {
				"version": 1,
				"geom": "{\"type\": \"Point\", \"coordinates\": [634382.5047556206, 5535936.187932838]}"
			},
			"document_id": 828329,
			"engagement_rating": null,
			"protected": false,
			"orientations": null,
			"available_langs": ["fr"],
			"aid_rating": null,
			"rock_free_rating": null,
			"rock_required_rating": null,
			"type": "r",
			"height_diff_difficulties": null,
			"version": 1,
			"height_diff_up": null,
			"equipment_rating": null,
			"locales": [{
				"summary": null,
				"title": "test",
				"version": 1,
				"title_prefix": "Sigottier",
				"lang": "fr"
			}],
			"quality": "draft",
			"elevation_max": null,
			"areas": [{
				"available_langs": null,
				"locales": [{
					"version": 4,
					"lang": "fr",
					"title": "France"
				}],
				"type": "a",
				"protected": false,
				"area_type": "country",
				"version": 11,
				"document_id": 14274
			}, {
				"available_langs": null,
				"locales": [{
					"version": 2,
					"lang": "fr",
					"title": "Hautes-Alpes"
				}],
				"type": "a",
				"protected": false,
				"area_type": "admin_limits",
				"version": 2,
				"document_id": 14361
			}, {
				"available_langs": null,
				"locales": [{
					"version": 2,
					"lang": "fr",
					"title": "Luberon - Baronnies - Saoû"
				}],
				"type": "a",
				"protected": false,
				"area_type": "range",
				"version": 1,
				"document_id": 14460
			}],
			"exposition_rock_rating": null,
			"risk_rating": null,
			"label": "Sigottier : test",
			"documentType": "routes",
			"new": true
		}],
		"all_routes": {
			"total": 0,
			"documents": []
		},
		"users": [{
			"document_id": 828514,
			"name": "Courgetteisback",
			"locales": [{
				"lang": "fr"
			}]
		}, {
			"name": "David Bochot",
			"available_langs": ["fr"],
			"locales": [{
				"version": 68,
				"lang": "fr"
			}],
			"activities": ["mountain_climbing", "snow_ice_mixed", "hiking", "snowshoeing", "skitouring", "rock_climbing", "ice_climbing"],
			"type": "u",
			"areas": [{
				"available_langs": null,
				"locales": [{
					"version": 4,
					"lang": "fr",
					"title": "France"
				}],
				"type": "a",
				"protected": false,
				"area_type": "country",
				"version": 11,
				"document_id": 14274
			}, {
				"available_langs": null,
				"locales": [{
					"version": 3,
					"lang": "fr",
					"title": "Haute-Savoie"
				}],
				"type": "a",
				"protected": false,
				"area_type": "admin_limits",
				"version": 3,
				"document_id": 14366
			}, {
				"available_langs": null,
				"locales": [{
					"version": 6,
					"lang": "fr",
					"title": "Haut Giffre - Aiguilles Rouges - Fiz"
				}],
				"type": "a",
				"protected": false,
				"area_type": "range",
				"version": 5,
				"document_id": 14404
			}],
			"protected": false,
			"forum_username": "ptetbenquoui",
			"version": 9,
			"document_id": 11871,
			"categories": ["amateur"],
			"label": "David Bochot",
			"documentType": "users",
			"new": true
		}],
		"recent_outings": {
			"total": 0,
			"documents": []
		},
		"outings": [{
			"locales": [{
				"summary": null,
				"version": 1,
				"lang": "fr",
				"title": "Mont Rogneux : Depuis Champsec"
			}],
			"condition_rating": "good",
			"activities": ["skitouring"],
			"quality": "medium",
			"geometry": {
				"version": 1,
				"geom": "{\"type\": \"Point\", \"coordinates\": [808205.4034940241, 5784718.350324878]}"
			},
			"protected": false,
			"document_id": 149895,
			"date_start": "2009-01-10",
			"elevation_max": null,
			"available_langs": ["eu", "fr"],
			"author": {
				"name": "Gorka Galdos",
				"user_id": 9427
			},
			"areas": [{
				"available_langs": null,
				"locales": [{
					"version": 1,
					"lang": "fr",
					"title": "Suisse"
				}],
				"type": "a",
				"protected": false,
				"area_type": "country",
				"version": 8,
				"document_id": 14067
			}, {
				"available_langs": null,
				"locales": [{
					"version": 6,
					"lang": "fr",
					"title": "Valais"
				}],
				"type": "a",
				"protected": false,
				"area_type": "admin_limits",
				"version": 9,
				"document_id": 14384
			}, {
				"available_langs": null,
				"locales": [{
					"version": 2,
					"lang": "fr",
					"title": "Valais W - Alpes Pennines W"
				}],
				"type": "a",
				"protected": false,
				"area_type": "range",
				"version": 6,
				"document_id": 14437
			}],
			"type": "o",
			"version": 1,
			"height_diff_up": 2170,
			"date_end": "2009-01-10",
			"label": "Mont Rogneux : Depuis Champsec",
			"documentType": "outings",
			"new": true
		}],
		"articles": [{
			"available_langs": ["en"],
			"locales": [{
				"summary": null,
				"version": 2,
				"lang": "en",
				"title": "Soft ice in the Mont Blanc region"
			}],
			"activities": ["ice_climbing"],
			"quality": "medium",
			"type": "c",
			"protected": false,
			"version": 2,
			"document_id": 345816,
			"article_type": "collab",
			"categories": ["tags"],
			"label": "Soft ice in the Mont Blanc region (en)",
			"documentType": "articles",
			"new": true
		}],
		"books": [],
		"xreports": [],
		"images": [],
		"areas": []
	},
	"locales": [{
		"title": "test ajout base serac",
		"lang": "fr",
		"summary": "resumé",
		"description": "description",
		"place": "lieu",
		"route_study": "etude blabla",
		"conditions": "analyse",
		"training": "prep",
		"motivations": "motiv",
		"group_management": "gestion",
		"risk": "attention",
		"time_management": "gestion",
		"safety": "mesure",
		"reduce_impact": "attenué",
		"increase_impact": "aggravé",
		"modifications": "conséquence",
		"other_comments": "physique"
	}],
	"type": "",
	"activities": ["skitouring", "hiking", "snow_ice_mixed", "snowshoeing", "mountain_climbing", "paragliding", "slacklining", "rock_climbing", "mountain_biking", "ice_climbing", "via_ferrata"],
	"document_id": 0,
	"quality": "draft",
	"geometry": {
		"geom": "{\"type\":\"Point\",\"coordinates\":[468028.9954234603,5509498.629907387]}"
	},
	"elevation": 150,
	"date": "2017-07-11T22:00:00.000Z",
	"event_type": ["avalanche", "stone_fall", "falling_ice", "crevasse_fall", "person_fall", "roped_fall", "physical_failure", "lightning", "other"],
	"nb_participants": 2,
	"nb_impacted": 2,
	"severity": "1d_to_3d",
	"rescue": true,
	"avalanche_level": "level_3",
	"avalanche_slope": "slope_35_40",
	"age": 20,
	"gender": "female",
	"author_status": "secondary_impacted",
	"autonomy": "autonomous",
	"activity_rate": "activity_rate_30",
	"nb_outings": "nb_outings_14",
	"previous_injuries": "no",
	"disable_comments": true}';
        // return json_encode($obj);
        /*
        return '{
        "associations": {
		"waypoints": [],
		"waypoint_children": [],
        "routes": [],
        "all_routes": {
			"total": 0,
			"documents": []
		},
		"users": [],
        "recent_outings": {
			"total": 0,
			"documents": []
		},
		"outings": [],
        "articles": [],
		"books": [],
		"xreports": [],
		"images": [],
		"areas": []
        },
        "locales": [{
		"title": "test ajout base serac",
		"lang": "fr",
		"summary": "resumé",
		"description": "description",
		"place": "lieu",
		"route_study": "etude blabla",
		"conditions": "analyse",
		"training": "prep",
		"motivations": "motiv",
		"group_management": "gestion",
		"risk": "attention",
		"time_management": "gestion",
		"safety": "mesure",
		"reduce_impact": "attenué",
		"increase_impact": "aggravé",
		"modifications": "conséquence",
		"other_comments": "physique"
	}],
	"type": "",
	"activities": ["skitouring", "hiking", "snow_ice_mixed", "snowshoeing", "mountain_climbing", "paragliding", "slacklining", "rock_climbing", "mountain_biking", "ice_climbing", "via_ferrata"],
	"document_id": 0,
	"quality": "draft",
	"geometry": {
		"geom": "{\"type\":\"Point\",\"coordinates\":[468028.9954234603,5509498.629907387]}"
	},
	"elevation": 150,
	"date": "2017-07-11T22:00:00.000Z",
	"event_type": ["avalanche", "stone_fall", "falling_ice", "crevasse_fall", "person_fall", "roped_fall", "physical_failure", "lightning", "other"],
	"nb_participants": 2,
	"nb_impacted": 2,
	"severity": "1d_to_3d",
	"rescue": true,
	"avalanche_level": "level_3",
	"avalanche_slope": "slope_35_40",
	"age": 20,
	"gender": "female",
	"author_status": "secondary_impacted",
	"autonomy": "autonomous",
	"activity_rate": "activity_rate_30",
	"nb_outings": "nb_outings_14",
	"previous_injuries": "no",
	"disable_comments": true
    }';
*/
        /*{
	"associations": {
		"waypoints": [],
		"waypoint_children": [],
		"routes": [{
			"global_rating": null,
			"activities": ["rock_climbing"],
			"geometry": {
				"version": 1,
				"geom": "{\"type\": \"Point\", \"coordinates\": [634382.5047556206, 5535936.187932838]}"
			},
			"document_id": 828329,
			"engagement_rating": null,
			"protected": false,
			"orientations": null,
			"available_langs": ["fr"],
			"aid_rating": null,
			"rock_free_rating": null,
			"rock_required_rating": null,
			"type": "r",
			"height_diff_difficulties": null,
			"version": 1,
			"height_diff_up": null,
			"equipment_rating": null,
			"locales": [{
				"summary": null,
				"title": "test",
				"version": 1,
				"title_prefix": "Sigottier",
				"lang": "fr"
			}],
			"quality": "draft",
			"elevation_max": null,
			"areas": [{
				"available_langs": null,
				"locales": [{
					"version": 4,
					"lang": "fr",
					"title": "France"
				}],
				"type": "a",
				"protected": false,
				"area_type": "country",
				"version": 11,
				"document_id": 14274
			}, {
				"available_langs": null,
				"locales": [{
					"version": 2,
					"lang": "fr",
					"title": "Hautes-Alpes"
				}],
				"type": "a",
				"protected": false,
				"area_type": "admin_limits",
				"version": 2,
				"document_id": 14361
			}, {
				"available_langs": null,
				"locales": [{
					"version": 2,
					"lang": "fr",
					"title": "Luberon - Baronnies - Saoû"
				}],
				"type": "a",
				"protected": false,
				"area_type": "range",
				"version": 1,
				"document_id": 14460
			}],
			"exposition_rock_rating": null,
			"risk_rating": null,
			"label": "Sigottier : test",
			"documentType": "routes",
			"new": true
		}],
		"all_routes": {
			"total": 0,
			"documents": []
		},
		"users": [{
			"document_id": 828514,
			"name": "Courgetteisback",
			"locales": [{
				"lang": "fr"
			}]
		}, {
			"name": "David Bochot",
			"available_langs": ["fr"],
			"locales": [{
				"version": 68,
				"lang": "fr"
			}],
			"activities": ["mountain_climbing", "snow_ice_mixed", "hiking", "snowshoeing", "skitouring", "rock_climbing", "ice_climbing"],
			"type": "u",
			"areas": [{
				"available_langs": null,
				"locales": [{
					"version": 4,
					"lang": "fr",
					"title": "France"
				}],
				"type": "a",
				"protected": false,
				"area_type": "country",
				"version": 11,
				"document_id": 14274
			}, {
				"available_langs": null,
				"locales": [{
					"version": 3,
					"lang": "fr",
					"title": "Haute-Savoie"
				}],
				"type": "a",
				"protected": false,
				"area_type": "admin_limits",
				"version": 3,
				"document_id": 14366
			}, {
				"available_langs": null,
				"locales": [{
					"version": 6,
					"lang": "fr",
					"title": "Haut Giffre - Aiguilles Rouges - Fiz"
				}],
				"type": "a",
				"protected": false,
				"area_type": "range",
				"version": 5,
				"document_id": 14404
			}],
			"protected": false,
			"forum_username": "ptetbenquoui",
			"version": 9,
			"document_id": 11871,
			"categories": ["amateur"],
			"label": "David Bochot",
			"documentType": "users",
			"new": true
		}],
		"recent_outings": {
			"total": 0,
			"documents": []
		},
		"outings": [{
			"locales": [{
				"summary": null,
				"version": 1,
				"lang": "fr",
				"title": "Mont Rogneux : Depuis Champsec"
			}],
			"condition_rating": "good",
			"activities": ["skitouring"],
			"quality": "medium",
			"geometry": {
				"version": 1,
				"geom": "{\"type\": \"Point\", \"coordinates\": [808205.4034940241, 5784718.350324878]}"
			},
			"protected": false,
			"document_id": 149895,
			"date_start": "2009-01-10",
			"elevation_max": null,
			"available_langs": ["eu", "fr"],
			"author": {
				"name": "Gorka Galdos",
				"user_id": 9427
			},
			"areas": [{
				"available_langs": null,
				"locales": [{
					"version": 1,
					"lang": "fr",
					"title": "Suisse"
				}],
				"type": "a",
				"protected": false,
				"area_type": "country",
				"version": 8,
				"document_id": 14067
			}, {
				"available_langs": null,
				"locales": [{
					"version": 6,
					"lang": "fr",
					"title": "Valais"
				}],
				"type": "a",
				"protected": false,
				"area_type": "admin_limits",
				"version": 9,
				"document_id": 14384
			}, {
				"available_langs": null,
				"locales": [{
					"version": 2,
					"lang": "fr",
					"title": "Valais W - Alpes Pennines W"
				}],
				"type": "a",
				"protected": false,
				"area_type": "range",
				"version": 6,
				"document_id": 14437
			}],
			"type": "o",
			"version": 1,
			"height_diff_up": 2170,
			"date_end": "2009-01-10",
			"label": "Mont Rogneux : Depuis Champsec",
			"documentType": "outings",
			"new": true
		}],
		"articles": [{
			"available_langs": ["en"],
			"locales": [{
				"summary": null,
				"version": 2,
				"lang": "en",
				"title": "Soft ice in the Mont Blanc region"
			}],
			"activities": ["ice_climbing"],
			"quality": "medium",
			"type": "c",
			"protected": false,
			"version": 2,
			"document_id": 345816,
			"article_type": "collab",
			"categories": ["tags"],
			"label": "Soft ice in the Mont Blanc region (en)",
			"documentType": "articles",
			"new": true
		}],
		"books": [],
		"xreports": [],
		"images": [],
		"areas": []
	},
	"locales": [{
		"title": "test ajout base serac",
		"lang": "fr",
		"summary": "resumé",
		"description": "description",
		"place": "lieu",
		"route_study": "etude blabla",
		"conditions": "analyse",
		"training": "prep",
		"motivations": "motiv",
		"group_management": "gestion",
		"risk": "attention",
		"time_management": "gestion",
		"safety": "mesure",
		"reduce_impact": "attenué",
		"increase_impact": "aggravé",
		"modifications": "conséquence",
		"other_comments": "physique"
	}],
	"type": "",
	"activities": ["skitouring", "hiking", "snow_ice_mixed", "snowshoeing", "mountain_climbing", "paragliding", "slacklining", "rock_climbing", "mountain_biking", "ice_climbing", "via_ferrata"],
	"document_id": 0,
	"quality": "draft",
	"geometry": {
		"geom": "{\"type\":\"Point\",\"coordinates\":[468028.9954234603,5509498.629907387]}"
	},
	"elevation": 150,
	"date": "2017-07-11T22:00:00.000Z",
	"event_type": ["avalanche", "stone_fall", "falling_ice", "crevasse_fall", "person_fall", "roped_fall", "physical_failure", "lightning", "other"],
	"nb_participants": 2,
	"nb_impacted": 2,
	"severity": "1d_to_3d",
	"rescue": true,
	"avalanche_level": "level_3",
	"avalanche_slope": "slope_35_40",
	"age": 20,
	"gender": "female",
	"author_status": "secondary_impacted",
	"autonomy": "autonomous",
	"activity_rate": "activity_rate_30",
	"nb_outings": "nb_outings_14",
	"previous_injuries": "no",
	"disable_comments": true
} */

    }
    private function deleteRequest($method,$request,$data)
    {
        switch($request[0])
        {
            case 'reports':
                if(isset($request[1]) && is_numeric($request[1])) { // get a single report
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
        echo '{"'.$request[0].'":'.$data.'}';
    }
    private function handleError($method,$request,$data)
    {
        echo '{"method":"'.$method.'","request":"'.implode("/",$request).'","error":"'.$data.'"}';
    }


}
