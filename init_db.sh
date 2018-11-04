CREATE DATABASE `satan` CHARACTER SET utf8 COLLATE utf8_general_ci;
CREATE USER 'satan'@'localhost' IDENTIFIED BY 'satan';
GRANT ALL PRIVILEGES ON satan . * TO 'satan'@'localhost';
FLUSH PRIVILEGES;
