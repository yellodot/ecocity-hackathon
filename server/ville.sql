-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: villesvertes
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ville`
--

DROP TABLE IF EXISTS `ville`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ville` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `traitement_dechet` int NOT NULL,
  `espace_vert` int NOT NULL,
  `qualite_eau` varchar(100) DEFAULT NULL,
  `piste_cyclable` int DEFAULT NULL,
  `transports` varchar(100) DEFAULT NULL,
  `budget` int DEFAULT NULL,
  `qualite_air` varchar(100) DEFAULT NULL,
  `label` varchar(255) DEFAULT NULL,
  `nb_habitant` int NOT NULL,
  `bobo_compatible` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ville`
--

LOCK TABLES `ville` WRITE;
/*!40000 ALTER TABLE `ville` DISABLE KEYS */;
INSERT INTO `ville` VALUES (1,'Bordeaux','https://upload.wikimedia.org/wikipedia/commons/9/9c/Bordeaux_%282418988310%29.jpg',3,1800,'Bonne',40,'Electrique',50,'Bonne','Orange',986000,1),(2,'Rodez','http://regionfrance.com/wp-content/uploads/2014/08/Rodez.jpg',5,80,'Très bonne',60,'Electrique',10,'Bonne','Vert',24950,1),(3,'Nice','http://www.habitatnews.fr/wp-content/uploads/2020/03/img-emmenager-pourquoi-attraits.jpg',2,2300,'Mauvaise',50,'Electrique',20,'Moyenne','Rouge',345000,0),(4,'Avignon','https://aws-tiqets-cdn.imgix.net/images/content/aa4690d651f148f68deafec620b63993.jpg?auto=format&fit=crop&ixlib=python-3.2.1&q=70&s=8a21158380f6605f58932f0b5d8c7768',4,595,'Correcte',60,'Electrique',10,'Bonne','Vert',91000,1),(5,'Rennes','http://www.cashandrepair.fr/wp-content/uploads/2021/08/rennes.jpg',3,870,'Correcte',30,'Electrique',20,'Bonne','Orange',220000,1),(6,'Strasbourg','https://i.etsystatic.com/29371508/r/il/29f73d/3823740217/il_1588xN.3823740217_8mxp.jpg',2,430,'bonne',30,'bus éléctriques',15,'moyenne','mauvais',287228,0),(7,'Lyon','https://www.lesaffichistes.com/wp-content/uploads/2021/01/lyon-cadre1-100x100.png',5,1800,'bonne',54,'bus électriques',30,'bonne','orange',531730,1),(8,'Grenoble','https://i.etsystatic.com/20499892/r/il/b652b5/3074770468/il_1588xN.3074770468_pw7q.jpg',4,200,'bonne',55,'bus électriques',50,'bonne','vert',158198,0),(9,'Brest','https://www.lesaffichistes.com/wp-content/uploads/2020/07/brest-facebook-cadre-100x100.png',3,870,'mauvaise',25,'bus électriques',53,'mauvaise','orange',139926,1),(10,'La Rochelle','https://www.lesaffichistes.com/wp-content/uploads/2020/08/la-rochelle-facebook-cadre-100x100.png',4,400,'bonne',60,'bus électriques',20,'Moyenne','orange',77205,1);
/*!40000 ALTER TABLE `ville` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-12 16:10:45
