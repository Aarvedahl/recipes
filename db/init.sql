CREATE DATABASE  IF NOT EXISTS `food` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `food`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: food
-- ------------------------------------------------------
-- Server version	5.7.21-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ingredients`
--

DROP TABLE IF EXISTS `ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ingredients` (
  `ingredientID` varchar(45) NOT NULL,
  `ingredientName` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ingredientID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredients`
--

LOCK TABLES `ingredients` WRITE;
/*!40000 ALTER TABLE `ingredients` DISABLE KEYS */;
INSERT INTO `ingredients` VALUES ('1','Egg'),('2','Milk'),('3','Flour'),('4','Pasta'),('5','Meatballs'),('6','Chicken');
/*!40000 ALTER TABLE `ingredients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingredientsinrecipe`
--

DROP TABLE IF EXISTS `ingredientsinrecipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ingredientsinrecipe` (
  `ingredientsinrecipeid` int(11) NOT NULL AUTO_INCREMENT,
  `ingredientsID` int(11) DEFAULT NULL,
  `recipeID` int(11) DEFAULT NULL,
  PRIMARY KEY (`ingredientsinrecipeid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredientsinrecipe`
--

LOCK TABLES `ingredientsinrecipe` WRITE;
/*!40000 ALTER TABLE `ingredientsinrecipe` DISABLE KEYS */;
INSERT INTO `ingredientsinrecipe` VALUES (1,1,1),(2,2,1),(3,3,1),(4,4,2),(5,6,2),(6,5,3),(7,4,3);
/*!40000 ALTER TABLE `ingredientsinrecipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipes`
--

DROP TABLE IF EXISTS `recipes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recipes` (
  `recipeID` int(11) NOT NULL AUTO_INCREMENT,
  `recipeName` varchar(45) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `ingNeed` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `recipeimage` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`recipeID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipes`
--

LOCK TABLES `recipes` WRITE;
/*!40000 ALTER TABLE `recipes` DISABLE KEYS */;
INSERT INTO `recipes` VALUES (1,'Pancake','Make delicious, fluffy pancakes from scratch',3,4,'https://i.ytimg.com/vi/7ebZWviUfUA/maxresdefault.jpg'),(2,'Pasta and chicken','For thoose days you want creamy pasta',2,4,'http://www.recipetineats.com/wp-content/uploads/2016/12/Creamy-Chicken-Bacon-Pasta-landscape-2.jpg'),(3,'Pasta and Meatballs','Not sure what to make for dinner? This spaghetti and meatballs recipe is easy and delicious',2,3,'http://img.taste.com.au/pLYJd7ow/w643-h428-cfill-q90/taste/2016/11/greek-meatballs-and-pasta-79877-1.jpeg');
/*!40000 ALTER TABLE `recipes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-03-17 17:31:39
