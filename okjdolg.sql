-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2021. Már 29. 10:44
-- Kiszolgáló verziója: 10.4.14-MariaDB
-- PHP verzió: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `okjdolg`
--
CREATE DATABASE IF NOT EXISTS `okjdolg` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `okjdolg`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `adatok`
--

DROP TABLE IF EXISTS `adatok`;
CREATE TABLE IF NOT EXISTS `adatok` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `todo` varchar(255) COLLATE utf8_hungarian_ci NOT NULL,
  `datum` date NOT NULL,
  `allapot` tinyint(1) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- TÁBLA KAPCSOLATAI `adatok`:
--

--
-- A tábla adatainak kiíratása `adatok`
--

INSERT INTO `adatok` (`ID`, `todo`, `datum`, `allapot`) VALUES
(1, 'Tanév vége', '2021-04-30', 1),
(2, 'Húsvéti szünet', '2021-04-01', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
