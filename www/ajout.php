<?php
require("../lib/clientSerac.class.php");
if(isset($_POST['btenvoie']))
{
    if($_POST['btenvoie'] === "envoie")
    {
        $clientSerac  = new clientSerac();

        echo "retour:";
        $_POST['nb_participants'] = 1;
        $_POST['id_user'] = 1;
        $_POST['visibility'] = 2;
        $_POST['json_custom'] = '{}';
        echo $clientSerac->addReports($_POST);
    }
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">

        <meta name="robots" content="noindex,nofollow">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>

    </head>
    <body>
        <form method="post" action="">
            <div id="title-group">
                <label ><span translate=""><span class="ng-scope">Titre</span></span> *</label>
                <input name="title" required="" type="text" id="title">

            </div>

            <div id="lang-group" >
                <label ><span translate=""><span class="ng-scope">Langue</span></span> *</label>
                <select name="lang" id="lang"><option value="" class="" selected="selected"></option><option label="français" value="fr">français</option><option label="italien" value="it">italien</option><option label="allemand" value="de">allemand</option><option label="anglais" value="en">anglais</option><option label="espagnol" value="es">espagnol</option><option label="catalan" value="ca">catalan</option><option label="basque" value="eu">basque</option></select>

                <div></div></div>
            <div>
                <select name="quality">
                    <option label="vide" value="empty">vide</option><option label="ébauche" value="draft" selected="selected">ébauche</option><option label="moyen" value="medium">moyen</option><option label="bon" value="fine">bon</option><option label="excellent" value="great">excellent</option>
                </select>
            </div>
            <div>
                <label app-context-help="" context-help-title="Activités" context-help-content-url="/static/partials/contexthelp/activities.html"><span translate=""><span class="ng-scope">Activités</span></span> * <span class="glyphicon glyphicon-info-sign context-help-sign"></span></label>
                <select multiple name="activities[]">
                    <option value="skitouring">Ski, surf</option>
                    <option value="snow_ice_mixed">Neige, glace et mixte</option>
                    <option value="mountain_climbing">Rocher haute montagne</option>
                    <option value="rock_climbing">Escalade</option>
                    <option value="ice_climbing">Cascade de glace</option>
                    <option value="hiking">Randonnée / Trail</option>
                    <option value="snowshoeing">Raquette</option>
                    <option value="paragliding">Parapente</option>
                    <option value="mountain_biking">VTT</option>
                    <option value="via_ferrata">via ferrata</option>
                    <option value="slacklining">Slackline / Highline</option>
                </select> </div>
            <label><span class="ng-scope">Altitude</span></label>
            <div class="input-group">
                <input name="elevation" id="elevation" min="0" max="9999" ng-model="xreport.elevation" class="form-control ng-pristine ng-valid ng-empty ng-valid-min ng-valid-max ng-touched" type="number">
                <span class="input-group-addon">m</span>
            </div>
            <span class="glyphicon glyphicon-ok form-control-feedback ng-hide" ng-show="editForm.elevation.$valid &amp;&amp; xreport.elevation"></span>
            <span class="glyphicon glyphicon-warning-sign form-control-feedback ng-hide" ng-show="editForm.elevation.$invalid &amp;&amp; editForm.elevation.$touched"></span>

            <div id="lon-group" class="form-group data third has-feedback">
                <label ng-class="{ 'control-label': editForm.longitude.$touched &amp;&amp; editForm.longitude.$invalid }"><span translate=""><span class="ng-scope">Longitude</span></span> *</label>
                <div class="input-group">
                    <input name="longitude" id="longitude" class="form-control ng-valid-min ng-valid-max ng-not-empty ng-dirty ng-valid-number ng-valid ng-valid-required ng-touched" required="" min="-180" max="180" type="number">
                    <span class="input-group-addon">°E</span>
                </div>
                <span class="glyphicon glyphicon-ok form-control-feedback ng-hide" ng-show="editForm.longitude.$valid &amp;&amp; xreport.lonlat.longitude"></span>
                <span class="glyphicon glyphicon-warning-sign form-control-feedback ng-hide" ng-show="editForm.longitude.$invalid &amp;&amp; editForm.longitude.$touched"></span>

            </div>
            <div id="lat-group" class="form-group data third has-feedback"><label><span translate=""><span class="ng-scope">Latitude</span></span> *</label>
                <div class="input-group">
                    <input name="latitude" id="latitude"  class="form-control ng-valid-min ng-valid-max ng-not-empty ng-dirty ng-valid-number ng-valid ng-valid-required ng-touched" required="" min="-90" max="90" type="number">
                    <span class="input-group-addon">°N</span>
                </div>
                <span class="glyphicon glyphicon-ok form-control-feedback ng-hide" ng-show="editForm.longitude.$valid &amp;&amp; xreport.lonlat.latitude"></span>
                <span class="glyphicon glyphicon-warning-sign form-control-feedback ng-hide" ng-show="editForm.latitude.$invalid &amp;&amp; editForm.latitude.$touched"></span>

            </div>


            <div class="date form-group" ng-init="openDateStart = false">
                <label><span translate=""><span class="ng-scope">Date</span></span> *</label>
                <div class="input-group ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-date" name="date" id="date" uib-datepicker-popup="dd MM yyyy" is-open="openDateStart">
                    <input class="form-control" value="" type="text" name="date">
                </div><div uib-datepicker-popup-wrap="" ng-model="date" ng-change="dateSelection(date)" template-url="uib/template/datepickerPopup/popup.html" class="ng-empty ng-valid">

                </div>
            </div>

            <div>
                <label><span translate=""><span class="ng-scope">Âge</span></span></label>
                <div class="input-group">
                    <input name="age" min="0" max="99" type="number">
                </div>
            </div>
            <div>
                <label translate=""><span class="ng-scope">Sexe</span></label>
                <select name="gender"><option value="" class="" selected="selected"></option><option label="homme" value="male">homme</option><option label="femme" value="female">femme</option></select>

            </div>
            <div class="form-group half">
                <label><span class="ng-scope">Implication dans la situation</span></label>
                <select name="author_status"><option value="" class="" selected="selected"></option><option label="victime principale" value="primary_impacted">victime principale</option><option label="victime secondaire" value="secondary_impacted">victime secondaire</option><option label="témoin direct" value="internal_witness">témoin direct</option><option label="témoin extérieur" value="external_witness">témoin extérieur</option></select>

            </div>
            <div>
                <label><span class="ng-scope">Niveau de pratique</span></label>
                <select name="autonomy"><option value="" class="" selected="selected"></option><option label="non autonome" value="non_autonomous">non autonome</option><option label="autonome" value="autonomous">autonome</option><option label="débrouillé" value="initiator">débrouillé</option><option label="expert" value="expert">expert</option></select>
            </div>
            <div class="form-group half">
                <label translate=""><span class="ng-scope">Fréquence de pratique dans l'activité</span></label>
                <select name="activity_rate"><option value="" class="" selected="selected"></option><option label="au moins 3 fois par semaine" value="activity_rate_150">au moins 3 fois par semaine</option><option label="1 à 2 fois par semaine" value="activity_rate_50">1 à 2 fois par semaine</option><option label="2 à 3 fois par mois" value="activity_rate_30">2 à 3 fois par mois</option><option label="1 fois par mois" value="activity_rate_20">1 fois par mois</option><option label="moins d'1 fois par mois" value="activity_rate_10">moins d'1 fois par mois</option><option label="moins d'1 fois par an" value="activity_rate_5">moins d'1 fois par an</option><option label="1ère fois de sa vie" value="activity_rate_1">1ère fois de sa vie</option></select>
            </div>
            <div class="form-group half">
                <label translate=""><span class="ng-scope">Nombre de sorties</span></label>
                <select name="nb_outings"><option value="" class="" selected="selected"></option><option label="de 0 à 4" value="nb_outings_4">de 0 à 4</option><option label="de 5 à 9" value="nb_outings_9">de 5 à 9</option><option label="de 10 à 14" value="nb_outings_14">de 10 à 14</option><option label="15 et plus" value="nb_outings_15">15 et plus</option></select>
            </div>
            <div class="form-group half">
                <label translate=""><span class="ng-scope">Blessures antérieures</span></label>
                <select name="previous_injuries"><option value="" class="" selected="selected"></option><option label="non" value="no">non</option><option label="autres blessures" value="previous_injuries_2">autres blessures</option><option label="autres blessures" value="previous_injuries_3">autres blessures</option></select>
            </div>

            <!-- ngIf: editForm.xreport.age.$touched && editForm.xreport.age.$invalid -->


            <div class="form-group half half-group">
                <label app-context-help="" context-help-title="Type d'évènement" context-help-content="Type of the occurred or potentially resulting event. More than one type may be selected. 'fall while roped' must be used to clarify 'avalanche', 'fall of a person or roped party' and 'fall in a crevasse', but cannot be selected alone."><span translate=""><span class="ng-scope">Type d'évènement</span></span> * <span class="glyphicon glyphicon-info-sign context-help-sign"></span></label>
                <select multiple name="event_type[]">
                    <option value="avalanche">avalanche</option>
                    <option value="stone_fall">chute de pierres</option>
                    <option value="falling_ice">chute de glace</option>
                    <option value="person_fall">chute d'une personne</option>
                    <option value="crevasse_fall">chute en crevasse</option>
                    <option value="roped_fall">chute encordé</option>
                    <option value="physical_failure">défaillance physique</option>
                    <option value="lightning">foudre</option>
                    <option value="other">autre</option>
                </select>




            </div>
            <div class="form-group half">
                <label ng-class="{ 'control-label': editForm.nb_impacted.$touched &amp;&amp; editForm.nb_impacted.$invalid }" app-context-help="" context-help-title="Nombre de personnes touchées" context-help-content="Number of impacted persons. If no accident occurred or if no one has fallen, was buried or injured, put 0." translate=""><span class="ng-scope">Nombre de personnes touchées</span></label>
                <div class="input-group">
                    <input class="form-control ng-pristine ng-untouched ng-valid ng-empty ng-valid-min ng-valid-max ng-valid-minlength" min="0" max="1000" minlength="1" name="nb_impacted" id="nb_impacted" type="number">
                    <span class="input-group-addon" translate=""><span class="ng-scope">personnes</span></span>
                </div>
            </div>
            <div class="form-group half" ng-class="{'has-success': xreport.severity}" ng-init="severities = ['severity_no', '1d_to_3d', '4d_to_1m', '1m_to_3m', 'more_than_3m']">
                <label app-context-help="" context-help-title="Gravité" context-help-content="Have the impacted persons been injured and forced to temporarily cease the activity performed during this outing?" translate=""><span class="ng-scope">Gravité</span></label>
                <select class="form-control ng-pristine ng-untouched ng-valid ng-empty" id="severity" name="severity"><option value="" class="" selected="selected"></option><option label="pas de blessure" value="severity_no">pas de blessure</option><option label="De 1 à 3 jours" value="1d_to_3d">De 1 à 3 jours</option><option label="De 4 jours à un mois" value="4d_to_1m">De 4 jours à un mois</option><option label="De 1 à 3 mois" value="1m_to_3m">De 1 à 3 mois</option><option label="supérieur à 3 mois" value="more_than_3m">supérieur à 3 mois</option></select>
                <span class="glyphicon glyphicon-ok form-control-feedback ng-hide" ng-show="xreport.severity"></span>
            </div>
            <div class="form-group half" ng-class="{'has-success': xreport.rescue != undefined}">
                <label app-context-help="" context-help-title="Intervention des services de secours" context-help-content="L'évènement a-t-il nécessité l'intervention des secours ?" translate=""><span class="ng-scope">Intervention des services de secours</span></label>
                <input id="rescue" value="rescue" name="rescue" class="ng-pristine ng-untouched ng-valid ng-empty" type="checkbox">
                <span ng-click="editCtrl.pushToArray(xreport, 'rescue', !xreport.rescue, $event)"></span>
            </div>
            <div class="form-group half ng-scope" ng-if="xreport.event_type.indexOf('avalanche') > -1" ng-init="avalanche_levels = ['level_1', 'level_2', 'level_3', 'level_4', 'level_5', 'level_na']">
                <label app-context-help="" context-help-title="Niveau de risque d'avalanche" context-help-content="Indice de risque d'avalanche issu du BERA sur le lieu et à l'heure de l'évènement (le BERA peut indiquer un risque différent selon l'altitude, l'orientation et l'heure). S'il n'y a pas de BERA ou s'il ne mentionne pas d'indice de risque, sélectionnez &quot;indisponible&quot;." translate=""><span class="ng-scope">Niveau de risque d'avalanche</span> <span class="glyphicon glyphicon-info-sign context-help-sign"></span></label>
                <select class="form-control ng-pristine ng-untouched ng-valid ng-empty" name="avalanche_level" id="avalanche_level"><option value="" class="" selected="selected"></option><option label="1 - faible" value="level_1">1 - faible</option><option label="2 - limité" value="level_2">2 - limité</option><option label="3 - marqué" value="level_3">3 - marqué</option><option label="4 - fort" value="level_4">4 - fort</option><option label="5 - très fort" value="level_5">5 - très fort</option><option label=" niveau non renseigné" value="level_na"> niveau non renseigné</option></select>
                <span class="glyphicon glyphicon-ok form-control-feedback ng-hide" ng-show="xreport.avalanche_level"></span>
            </div>
            <div class="form-group half ng-scope" ng-if="xreport.event_type.indexOf('avalanche') > -1">
                <label app-context-help="" context-help-title="Pente de la zone de départ" context-help-content="Pente la plus raide dans la zone de départ de l'avalanche." translate=""><span class="ng-scope">Pente de la zone de départ</span> <span class="glyphicon glyphicon-info-sign context-help-sign"></span></label>
                <select class="form-control ng-pristine ng-untouched ng-valid ng-empty" name="avalanche_slope" id="avalanche_slope"><option value="" class="" selected="selected"></option><option label="pente inférieure à 30°" value="slope_lt_30">pente inférieure à 30°</option><option label="pente de 30 à 35°" value="slope_30_35">pente de 30 à 35°</option><option label="pente de 35 à 40°" value="slope_35_40">pente de 35 à 40°</option><option label="pente de 40 à 45°" value="slope_40_45">pente de 40 à 45°</option><option label="pente supérieure à 45°" value="slope_gt_45">pente supérieure à 45°</option></select>
                <span class="glyphicon glyphicon-ok form-control-feedback ng-hide" ng-show="xreport.avalanche_slope"></span>
            </div>


            <label translate=""><span class="ng-scope">Resumé</span></label>
            <div class="md-editor active" id="1500275374600"><textarea app-markdown-editor="" name="summary" id="description" class="form-control description ng-pristine ng-valid processed md-input ng-empty ng-touched" placeholder="Décrivez le déroulement de la sortie et de l'incident/accident. Si vous avez déjà saisi une sortie, vous pouvez décrire uniquement l'évènement, puis associez ce compte rendu à la sortie (après l'avoir enregistré)." rows="5" style="resize: none;"></textarea></div>

            <label translate=""><span class="ng-scope">Description</span></label>
            <div class="md-editor active" id="1500275374600"><textarea app-markdown-editor="" name="description" id="description" class="form-control description ng-pristine ng-valid processed md-input ng-empty ng-touched" placeholder="Décrivez le déroulement de la sortie et de l'incident/accident. Si vous avez déjà saisi une sortie, vous pouvez décrire uniquement l'évènement, puis associez ce compte rendu à la sortie (après l'avoir enregistré)." rows="5" style="resize: none;"></textarea></div>

            <label translate=""><span class="ng-scope">Participants membres</span></label>

            <section class="section associations">
                <app-simple-search parent-id="xreport.document_id" app-select="editCtrl.documentService.pushToAssociations(doc, 'users')" dataset="u"><span class="glyphicon glyphicon-search search-icon"></span> <span class="twitter-typeahead" style="position: relative; display: inline-block;"><input class="search form-control tt-hint" ngeo-search="searchCtrl.options" ngeo-search-datasets="searchCtrl.datasets" ngeo-search-listeners="searchCtrl.listeners" style="position: absolute; top: 0px; left: 0px; border-color: transparent; box-shadow: none; opacity: 1; background: rgb(251, 251, 251) none repeat scroll 0% 0%;" readonly="" autocomplete="off" spellcheck="false" tabindex="-1" dir="ltr" type="search"><input class="search form-control tt-input" placeholder="Rechercher ..." ngeo-search="searchCtrl.options" ngeo-search-datasets="searchCtrl.datasets" ngeo-search-listeners="searchCtrl.listeners" autocomplete="off" spellcheck="false" dir="auto" style="position: relative; vertical-align: top; background-color: transparent;" type="search"><pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: &quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: optimizelegibility; text-transform: none;"></pre><div class="tt-menu" style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none;"><div class="tt-dataset tt-dataset-3"></div></div></span> </app-simple-search>
                <section class="associated-section flex wrap-row">
                    <h5 translate="" ng-show="xreport.associations.users.length == 0"><span class="ng-scope">Vous pouvez rechercher les contributeurs qui vous accompagnaient lors de l'événement.</span></h5>
                </section>

            </section>


            <div id="place-group" class="form-group full">
                <label translate=""><span class="ng-scope">Lieu</span></label>
                <div class="md-editor" id="1500275374631"><textarea app-markdown-editor="" name="place" id="place" class="form-control ng-pristine ng-untouched ng-valid processed md-input ng-empty" placeholder="Information on the location of the incident.  Mark the location on the map above, even if you cannot do very accurately, (in which case give more details here).  After completing the report, you can associate it to a route, a climbing site or an outing." rows="5" style="resize: none;"></textarea></div>
                <span class="glyphicon glyphicon-ok form-control-feedback ng-hide" ng-show="xreport.locales[0].place"></span>
            </div>

            <div id="route_study-group" class="form-group full">
                <label translate=""><span class="ng-scope">Étude de l'itinéraire</span></label>
                <div class="md-editor" id="1500275374658"><textarea app-markdown-editor="" name="route_study" id="route_study" class="form-control ng-pristine ng-untouched ng-valid processed md-input ng-empty" placeholder="Maps, guidebooks and outings reports consulted. Evaluation of the route during the outing." rows="5" style="resize: none;"></textarea></div>
                <span class="glyphicon glyphicon-ok form-control-feedback ng-hide" ng-show="xreport.locales[0].route_study"></span>
            </div>

            <div id="conditions-group" class="form-group full">
                <label translate=""><span class="ng-scope">Analyse préalable des conditions</span></label>
                <div class="md-editor" id="1500275374677"><textarea app-markdown-editor="" name="conditions" id="conditions" class="form-control ng-pristine ng-untouched ng-valid processed md-input ng-empty" placeholder="Décrivez les informations récoltées avant la sortie et le suivi de leur évolution sur le terrain. Cela concerne les prévisions météo, les bulletins d'évaluation du risque d'avalanche, la qualité du regel, la qualité de la neige/glace/rocher, les compte rendu des jours précédents, etc." rows="5" style="resize: none;"></textarea></div>
                <span class="glyphicon glyphicon-ok form-control-feedback ng-hide" ng-show="xreport.locales[0].conditions"></span>
            </div>

            <div id="training-group" class="form-group full">
                <label translate=""><span class="ng-scope">Préparation physique et entraînement par rapport à l’objectif</span></label>
                <div class="md-editor" id="1500275374696"><textarea app-markdown-editor="" name="training" id="training" class="form-control ng-pristine ng-untouched ng-valid processed md-input ng-empty" placeholder="Décrivez votre niveau technique à la date de l'évènement, votre condition physique, la fatigue accumulée avant l'évènement, l'acclimatation pour une sortie en haute altitude, etc." rows="5" style="resize: none;"></textarea></div>
                <span class="glyphicon glyphicon-ok form-control-feedback ng-hide" ng-show="xreport.locales[0].training"></span>
            </div>

            <div id="motivations-group" class="form-group full">
                <label translate=""><span class="ng-scope">Motivations</span></label>
                <div class="md-editor" id="1500275374711"><textarea app-markdown-editor="" name="motivations" id="motivations" class="form-control ng-pristine ng-untouched ng-valid processed md-input ng-empty" placeholder="Why did you choose this outing? When did you decide to engage. What influenced your decision (holiday time, long journey, hotel/hut bookings, time spent already in preparation, limited possibilities, etc.)?" rows="5" style="resize: none;"></textarea></div>
                <span class="glyphicon glyphicon-ok form-control-feedback ng-hide" ng-show="xreport.locales[0].motivations"></span>
            </div>

            <div id="group_management-group" class="form-group full">
                <label translate=""><span class="ng-scope">Gestion du groupe</span></label>
                <div class="md-editor" id="1500275374730"><textarea app-markdown-editor="" name="group_management" id="group_management" class="form-control ng-pristine ng-untouched ng-valid processed md-input ng-empty" placeholder="Communication des objectifs et attentes de chacun, des craintes et observations en cours de sortie, briefing pour établir de nouvelles stratégies, éléments de conduite de groupe et de responsabilités, groupe habitué à fonctionner ensemble ou non, émulation, etc." rows="5" style="resize: none;"></textarea></div>
                <span class="glyphicon glyphicon-ok form-control-feedback ng-hide" ng-show="xreport.locales[0].group_management"></span>
            </div>

            <div id="risk-group" class="form-group full">
                <label translate=""><span class="ng-scope">Niveau de l'attention et (ré)évaluation des risques</span></label>
                <div class="md-editor" id="1500275374752"><textarea app-markdown-editor="" name="risk" id="risk" class="form-control ng-pristine ng-untouched ng-valid processed md-input ng-empty" placeholder="Have you (re)evaluated the risks at each change in the situation? What factors might have affected your awareness, such as tiredness, stress, relaxing having passed the main difficulties or on the descent, on a section reputed to be easy, presence of footprints or other people, complete confidence in the leader of the group, etc." rows="5" style="resize: none;"></textarea></div>
                <span class="glyphicon glyphicon-ok form-control-feedback ng-hide" ng-show="xreport.locales[0].risk"></span>
            </div>

            <div id="time_management-group" class="form-group full">
                <label translate=""><span class="ng-scope">Gestion de l'horaire</span></label>
                <div class="md-editor" id="1500275374776"><textarea app-markdown-editor="" name="time_management" id="time_management" class="form-control ng-pristine ng-untouched ng-valid processed md-input ng-empty" placeholder="Un horaire avait-il été prévu ? A t-il été tenu ? La gestion du temps a t-elle eu une influence sur le déclenchement de l'événement ?" rows="5" style="resize: none;"></textarea></div>
                <span class="glyphicon glyphicon-ok form-control-feedback ng-hide" ng-show="xreport.locales[0].time_management"></span>
            </div>

            <div id="safety-group" class="form-group full">
                <label app-context-help="" context-help-title="Mesures et techniques de sécurité mises en oeuvre" context-help-content-url="/static/partials/contexthelp/xreport-safety.html" translate=""><span class="ng-scope">Mesures et techniques de sécurité mises en oeuvre</span></label>
                <div class="md-editor" id="1500275374793"><textarea app-markdown-editor="" name="safety" id="safety" class="form-control ng-pristine ng-untouched ng-valid processed md-input ng-empty" placeholder="Types of belay and protection used, verifications between climbers, snowpack stability tests, testing of avalanche transceivers, etc." rows="5" style="resize: none;"></textarea></div>
                <span class="glyphicon glyphicon-ok form-control-feedback ng-hide" ng-show="xreport.locales[0].safety"></span>
            </div>

            <div id="reduce_impact-group" class="form-group full">
                <label app-context-help="" context-help-title="Éléments ayant atténué les conséquences de l'évènement" context-help-content-url="/static/partials/contexthelp/xreport-reduce_impact.html" translate=""><span class="ng-scope">Éléments ayant atténué les conséquences de l'évènement</span></label>
                <div class="md-editor" id="1500275374809"><textarea app-markdown-editor="" name="reduce_impact" id="reduce_impact" class="form-control ng-pristine ng-untouched ng-valid processed md-input ng-empty" rows="5" style="resize: none;"></textarea></div>
                <span class="glyphicon glyphicon-ok form-control-feedback ng-hide" ng-show="xreport.locales[0].reduce_impact"></span>
            </div>

            <div id="increase_impact-group" class="form-group full">
                <label app-context-help="" context-help-title="Eléments ayant aggravé les conséquences de l’événement" context-help-content-url="/static/partials/contexthelp/xreport-increase_impact.html" translate=""><span class="ng-scope">Eléments ayant aggravé les conséquences de l’événement</span></label>
                <div class="md-editor" id="1500275374840"><textarea app-markdown-editor="" name="increase_impact" id="increase_impact" class="form-control ng-pristine ng-untouched ng-valid processed md-input ng-empty" rows="5" style="resize: none;"></textarea></div>
                <span class="glyphicon glyphicon-ok form-control-feedback ng-hide" ng-show="xreport.locales[0].increase_impact"></span>
            </div>

            <div id="modifications-group" class="form-group full">
                <label app-context-help="" context-help-title="Conséquences sur les pratiques" context-help-content-url="/static/partials/contexthelp/xreport-modifications.html" translate=""><span class="ng-scope">Conséquences sur les pratiques</span></label>
                <div class="md-editor" id="1500275374852"><textarea app-markdown-editor="" name="modifications" id="modifications" class="form-control ng-pristine ng-untouched ng-valid processed md-input ng-empty" rows="5" style="resize: none;"></textarea></div>
                <span class="glyphicon glyphicon-ok form-control-feedback ng-hide" ng-show="xreport.locales[0].modifications"></span>
            </div>

            <div id="other_comments-group" class="form-group full">
                <label translate=""><span class="ng-scope">Conséquences physiques et autres commentaires</span></label>
                <div class="md-editor" id="1500275374863"><textarea app-markdown-editor="" name="other_comments" id="other_comments" class="form-control ng-pristine ng-untouched ng-valid processed md-input ng-empty" placeholder="Décrivez brièvement les blessures éventuelles, et ce que vous feriez aujourd'hui avec du recul. Les commentaires qui n'entrent dans aucun autre champ peuvent être saisis ici." rows="5" style="resize: none;"></textarea></div>
                <span class="glyphicon glyphicon-ok form-control-feedback ng-hide" ng-show="xreport.locales[0].other_comments"></span>
            </div>

            <div class="form-group half">
                <label translate=""><span class="ng-scope">disable_comments</span></label>
                <input ng-model="xreport.disable_comments" class="ng-pristine ng-untouched ng-valid ng-empty" type="checkbox">
                <span ng-click="editCtrl.pushToArray(xreport, 'disable_comments', !xreport.disable_comments, $event)" translate=""><span class="ng-scope">If checked, comments cannot be posted or read.</span></span>
            </div>

            <button type="submit" id="btenvoie" name="btenvoie" value="envoie">envoie</button>
        </form>
    </body>
</html>