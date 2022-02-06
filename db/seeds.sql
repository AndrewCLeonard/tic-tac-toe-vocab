USE tictacdb;

CREATE TABLE users
(
  id INT NOT NULL
  AUTO_INCREMENT,
  username VARCHAR
  (100) NOT NULL,
  password VARCHAR
  (100) NOT NULL,
  profileUrl VARCHAR
  (1000),
  userPokemon INTEGER
  (100),
  loggedOn BOOLEAN,
  wins INTEGER
  (100),
  losses INTEGER
  (200),
  createdAt datetime ,
  updatedAt datetime,
  PRIMARY KEY
  (id)
);

  INSERT INTO users
    (username, password, wins, losses)