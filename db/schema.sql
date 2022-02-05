DROP DATABASE IF EXISTS tic_tac_toe_vocab;

CREATE DATABASE tic_tac_toe_vocab;

USE tic_tac_toe_vocab;

CREATE TABLE players (   
    id INTEGER AUTO_INCREMENT PRIMARY KEY,   
    username VARCHAR(30) NOT NULL, 
    first_name VARCHAR(30) NOT NULL,
    Password VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL
    );