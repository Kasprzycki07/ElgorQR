-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Maj 12, 2025 at 08:02 AM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qr`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `access`
--

CREATE TABLE `access` (
  `ID` int(10) UNSIGNED NOT NULL,
  `Nr Pracownika` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `access`
--

INSERT INTO `access` (`ID`, `Nr Pracownika`) VALUES
(1, '22000099'),
(2, '22000081'),
(3, '22000042');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `depositqr`
--

CREATE TABLE `depositqr` (
  `ID` int(10) UNSIGNED NOT NULL,
  `Nr_Pracownika` tinytext NOT NULL,
  `Nr_Materialu` mediumint(5) UNSIGNED NOT NULL,
  `Ilosc` float NOT NULL,
  `Czas` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `depositqr`
--

INSERT INTO `depositqr` (`ID`, `Nr_Pracownika`, `Nr_Materialu`, `Ilosc`, `Czas`) VALUES
(53, '22000099', 12345, 1000, '2025-05-08 12:53:34'),
(54, '22000099', 12345, 100, '2025-05-08 12:54:02'),
(55, '22000099', 12345, 10, '2025-05-09 08:02:51'),
(56, '22000099', 12345, 10, '2025-05-09 08:05:18'),
(57, '22000099', 12345, 3, '2025-05-09 09:58:26'),
(58, '22000099', 12345, 8, '2025-05-09 09:59:39'),
(59, '22000099', 12345, 12, '2025-05-09 10:15:44'),
(60, '22000099', 12345, 20, '2025-05-09 10:18:13'),
(61, '22000099', 12345, 10, '2025-05-09 10:28:30');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `requestqr`
--

CREATE TABLE `requestqr` (
  `ID` int(10) UNSIGNED NOT NULL,
  `Nr_Pracownika` tinytext NOT NULL,
  `Nr_Zlecenia` tinytext NOT NULL,
  `Nr_Materialu` mediumint(5) UNSIGNED NOT NULL,
  `Ilosc` float NOT NULL,
  `Czas` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `requestqr`
--

INSERT INTO `requestqr` (`ID`, `Nr_Pracownika`, `Nr_Zlecenia`, `Nr_Materialu`, `Ilosc`, `Czas`) VALUES
(504, '22000099', '026214/25/W13', 12345, 999, '2025-05-08 12:53:51'),
(505, '22000099', '026214/25/W13', 12345, 100, '2025-05-08 12:54:15'),
(506, '22000099', '026214/25/W13', 12345, 10, '2025-05-09 08:04:01'),
(507, '22000099', '026214/25/W13', 12345, 8, '2025-05-09 08:05:24'),
(508, '22000099', '026214/25/W13', 12345, 8, '2025-05-09 09:59:58'),
(509, '22000099', '026214/25/W13', 12345, 8, '2025-05-09 10:16:01'),
(510, '22000099', '026214/25/W13', 12345, 4, '2025-05-09 10:18:08'),
(511, '22000099', '026214/25/W13', 12345, 20, '2025-05-09 10:18:20'),
(512, '22000099', '026214/25/W13', 12345, 8, '2025-05-09 10:28:35');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `access`
--
ALTER TABLE `access`
  ADD PRIMARY KEY (`ID`);

--
-- Indeksy dla tabeli `depositqr`
--
ALTER TABLE `depositqr`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID` (`ID`);

--
-- Indeksy dla tabeli `requestqr`
--
ALTER TABLE `requestqr`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID` (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `access`
--
ALTER TABLE `access`
  MODIFY `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `depositqr`
--
ALTER TABLE `depositqr`
  MODIFY `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `requestqr`
--
ALTER TABLE `requestqr`
  MODIFY `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=513;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
