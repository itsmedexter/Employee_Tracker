DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department (
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(30) NULL,
PRIMARY KEY (id)
);

CREATE TABLE roles (
id INT AUTO_INCREMENT NOT NULL,
title VARCHAR(30) NULL,
salary DECIMAL(10,2) NULL,
department_id INT(100) NULL,
PRIMARY KEY (id)
);

CREATE TABLE employee (
id INT AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30) NULL,
last_name VARCHAR(30) NULL,
role_id INT(100) NULL,
manager_id INT(100) NULL,
PRIMARY KEY (id)
);


INSERT INTO department (name)
VALUE ("Creative");

INSERT INTO roles (title, salary, department_id)
VALUE ("Developer", 70000, 110);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Sally", "ThatGirl", 7, 12);