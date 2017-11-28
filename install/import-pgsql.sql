CREATE DATABASE interface_serac OWNER="www-data";
\connect interface_serac;

CREATE TABLE reports (
  id SERIAL,
  id_provider int NOT NULL,
  id_user int NOT NULL,
  pushed smallint NOT NULL,
  visibility smallint NOT NULL,
  json_serac text NOT NULL,
  json_custom text NOT NULL,
  title varchar(250) NOT NULL,
  activities text NOT NULL,
  event_type varchar(250) NOT NULL,
  date_start date NOT NULL,
  date_end date NOT NULL,
  elevation smallint NOT NULL,
  severity varchar(30) NOT NULL,
  nb_participants smallint NOT NULL,
  nb_impacted smallint NOT NULL,
  quality varchar(30) NOT NULL,
  language varchar(2) NOT NULL,
  created_at timestamp NOT NULL,
  updated_at timestamp NOT NULL
);

ALTER TABLE reports
  ADD PRIMARY KEY (id);

ALTER TABLE reports OWNER TO "www-data";

CREATE TABLE provider (
  id SERIAL,
  name varchar(250) NOT NULL,
  state smallint NOT NULL,
  apikey varchar(250) NOT NULL,
  secret varchar(250) NOT NULL,
  login varchar(50) NOT NULL,
  password varchar(50) NOT NULL,
  created_at timestamp NOT NULL,
  updated_at timestamp NOT NULL
);

ALTER TABLE provider
  ADD PRIMARY KEY (id);

ALTER TABLE provider OWNER TO "www-data";
