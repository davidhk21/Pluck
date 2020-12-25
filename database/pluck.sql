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

INSERT INTO user (first_name, last_name, salary, wants_pct, curr_ats, next_month_ats) VALUES ('David', 'Kim', 60000, 30, 900, 0);

INSERT INTO tasks (task, value, category, completed, user_id) VALUES ('Do Laundry', 1, 'Today', false, 1);
INSERT INTO tasks (task, value, category, completed, user_id) VALUES ('Do a LeetCode Problem', 1, 'Today', false, 1);
INSERT INTO tasks (task, value, category, completed, user_id) VALUES ('Buy Christmas Gifts', 2, 'This Week', false, 1);

INSERT INTO quotes (quote) VALUES ("Learn the rules like a pro, so you can break them like an artist.");
INSERT INTO quotes (quote) VALUES ("You don't have to see the whole staircase. Just take the first step.");
INSERT INTO quotes (quote) VALUES ("Treat people as if they were what they ought to be and you help them to become what they are capable of doing.");
INSERT INTO quotes (quote) VALUES ("Don't compare your beginning to someone else's middle.");
INSERT INTO quotes (quote) VALUES ("When I let go of what I am, I become what I might be.");