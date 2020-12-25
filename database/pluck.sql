DROP DATABASE IF EXISTS pluck;

CREATE DATABASE IF NOT EXISTS pluck;

USE pluck;

CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  salary INT,
  wants_pct INT,
  curr_ats INT,
  next_month_ats INT
);

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  task VARCHAR(1000),
  value INT,
  category VARCHAR(50),
  completed BOOLEAN,
  user_id INT,
  FOREIGN KEY (user_id)
    REFERENCES user(id)
    ON DELETE CASCADE
);

CREATE TABLE quotes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  quote VARCHAR(1000)
);

INSERT INTO user (first_name, last_name, salary, wants_pct, curr_ats, next_month_ats) VALUES ('David', 'Kim', 60000, .30, 900, 0);