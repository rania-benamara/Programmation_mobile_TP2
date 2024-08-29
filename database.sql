CREATE DATABASE IF NOT EXISTS GestionContact;
USE GestionContact;


CREATE TABLE Contact (
    id INT AUTO_INCREMENT PRIMARY KEY,
    prenom VARCHAR(35) NOT NULL,
    nom VARCHAR(40) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telephone VARCHAR(20),
    date_creation DATE
);


CREATE TABLE Modification (
    id INT AUTO_INCREMENT PRIMARY KEY,
    contactId INT,
    modification_date DATE,
    FOREIGN KEY (contactId) REFERENCES Contact(id) ON DELETE CASCADE
);


