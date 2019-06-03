CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id INT AUTO_INCREMENT,
burger_name VARCHAR(255),
devoured BOOLEAN,
PRIMARY KEY (id)
);

SELECT * FROM burgers;
INSERT INTO burgers (burger_name, devoured) VALUES ("burgerName", true);