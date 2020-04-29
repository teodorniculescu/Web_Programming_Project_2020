-- MySQL dump 10.16  Distrib 10.1.44-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: 127.0.0.1    Database: BikeShop
-- ------------------------------------------------------
-- Server version	10.1.44-MariaDB-1~bionic

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Products`
--

DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `price` decimal(10,0) unsigned zerofill NOT NULL,
  `quantity` int(10) unsigned NOT NULL,
  `category` enum('bicycles','accessories','clothing') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Specs`
--

DROP TABLE IF EXISTS `Specs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Specs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_products` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Specs_Products` (`id_products`),
  CONSTRAINT `fk_Specs_Products` FOREIGN KEY (`id_products`) REFERENCES `Products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Specs`
--

LOCK TABLES `Specs` WRITE;
/*!40000 ALTER TABLE `Specs` DISABLE KEYS */;
/*!40000 ALTER TABLE `Specs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` enum('admin','user') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'admin','$2a$05$d7HLz1R4Ev5dFWsYMyQBQebiSBVUA8d1RWbeNelSB3Vg9.ikAJ2m2','admin'),(3,'ionel','$2a$05$QGR5FShIYzg1Io9GHrtYCeJe.YmaT1ug1CkansTEg61Txz4gTYN7G','user'),(4,'marcel','$2a$05$QHPfop/Ecumq7OjV1W9HEuBqTs3z8.z5nAY/P2KElYsImcyDk7wEi','user'),(6,'marcela','$2a$05$EDRp3o7.Bnx1M0QKv2FL6.vQimWlqn3oP0jZgVqcGtYhBjCeychU6','user'),(7,'lumenebuna','$2a$05$h.K4rcJCb8LQFa9kOD8.vONP4RPj4Ko9GOVAw1hIlFJ5aGIppnXUC','user'),(8,'lumewow','$2a$05$2PxWQk9yi6e9kJtaKCayMuLx0LM.BdFptaDCxDI/k9k4ZQxSV.QNy','user'),(9,'q','$2a$05$MiDFRRU1qsPvaJGD.aK/FOSn2rnln0wr3nSyMBq3NbpVhexePUq2S','user'),(10,'a','$2a$05$42hhqJRQJtwTOpKYHEhmOeg6UwmrQIBdT3I4Zh9wdOCQDW2fmcxY.','user');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-29 10:26:00
