create .env:
PORT = 5000
ENVIRONMENT = 'development'
DB_NAME=db_hospital 
DB_USERNAME=root
DB_PASSWORD=''


mysql start in Xampp, cmd:
mysql -u root -p


CREATE DATABASE IF NOT EXISTS db_hospital;

USE db_hospital;

CREATE TABLE doctors (
	id INT(10) NOT NULL AUTO_INCREMENT,
	name VARCHAR(45) NOT NULL,
	matriculation_number int(10) NOT NULL,
	dni INT(10) NOT NULL,
	PRIMARY KEY (id)
);
CREATE TABLE patients (
	id INT(10) NOT NULL AUTO_INCREMENT,
	name VARCHAR(45) NOT NULL,
	social_work VARCHAR(45) DEFAULT NULL,
	dni INT(10) NOT NULL,
	PRIMARY KEY (id)
);
CREATE TABLE treatments (
	id INT(10) NOT NULL AUTO_INCREMENT,
	diagnostic VARCHAR(100) NOT NULL,
	observations VARCHAR(100) DEFAULT NULL,	
	PRIMARY KEY (id)
);