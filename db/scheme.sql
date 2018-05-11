DROP DATABASE IF EXISTS beer_db;

CREATE DATABASE beer_db;

USE beer_db;

CREATE TABLE myBeers (
  id INTEGER NOT NULL AUTO_INCREMENT,
  beer_name VARCHAR(100) NULL,
  brewery VARCHAR(100) NULL,
  genre VARCHAR(50),
  abv DECIMAL(3,1) NULL,
  review TEXT NULL,
  triedIt BOOLEAN DEFAULT false,
  rating DECIMAL(2,1),
  PRIMARY KEY(id)
);


INSERT INTO myBeers  (beer_name, brewery, genre,abv, review, triedIt, rating) 
VALUES ("Zwicklbier", "Arcobräu", "Kellerbier", 5.2, "Unfiltered German lager, with a nice bite to it.  Not overly hoppy", true, 4.8);

INSERT INTO myBeers  (beer_name, brewery, genre,abv, review, triedIt, rating) 
VALUES ("3Beans", "Six Points", "Imperial Porter", 10.1, "Chocolate cake in a can", true, 5.0);

INSERT INTO myBeers  (beer_name, brewery, genre,abv, review, triedIt, rating) 
VALUES ("Sigma Kids", "Round Guys", "Session IPA", 6.2, "Session IPA with solid, not overly floral hops", true, 4.2);

