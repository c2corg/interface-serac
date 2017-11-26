-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Sam 25 Novembre 2017 à 10:28
-- Version du serveur :  10.0.31-MariaDB-0ubuntu0.16.04.2
-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `interface-serac`
--

-- --------------------------------------------------------

--
-- Structure de la table `reports`
--

CREATE TABLE `reports` (
  `id` int(11) NOT NULL,
  `id_provider` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `pushed` tinyint(1) NOT NULL,
  `visibility` tinyint(4) NOT NULL,
  `json_serac` mediumtext NOT NULL,
  `json_custom` mediumtext NOT NULL,
  `title` varchar(250) NOT NULL,
  `activities` tinytext NOT NULL,
  `event_type` varchar(250) NOT NULL,
  `date_start` date NOT NULL,
  `date_end` date NOT NULL,
  `elevation` smallint(6) NOT NULL,
  `severity` varchar(30) NOT NULL,
  `nb_participants` tinyint(4) NOT NULL,
  `nb_impacted` tinyint(4) NOT NULL,
  `quality` varchar(30) NOT NULL,
  `language` varchar(2) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `reports`
--
ALTER TABLE `reports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
