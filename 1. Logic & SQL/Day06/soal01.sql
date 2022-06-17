CREATE TABLE regions(
    region_id SERIAL PRIMARY KEY,
    region_name VARCHAR(25)
);

CREATE TABLE countries(
    country_id CHAR(2) PRIMARY KEY,
    country_name VARCHAR(40),
    region_id INTEGER NOT NULL,
    FOREIGN KEY(region_id) REFERENCES regions(region_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE locations(
    location_id SERIAL PRIMARY KEY,
    street_address VARCHAR(40),
    postal_code VARCHAR(12),
    city VARCHAR(30) NOT NULL,
    state_province VARCHAR(25),
    country_id CHAR(2) NOT NULL,
    FOREIGN KEY(country_id) REFERENCES countries(country_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE departments(
    department_id SERIAL PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL,
    location_id INTEGER,
    FOREIGN KEY(location_id) REFERENCES locations(location_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE jobs(
    job_id SERIAL PRIMARY KEY,
    job_title VARCHAR(35) NOT NULL,
    min_salary NUMERIC(8,2),
    max_salary NUMERIC(8,2)
);

CREATE TABLE employees(
    employee_id SERIAL PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20),
    hire_date DATE NOT NULL,
    salary NUMERIC(8,2) NOT NULL,
    manager_id INTEGER,
    job_id INTEGER NOT NULL,
    department_id INTEGER,
    FOREIGN KEY(job_id) REFERENCES jobs(job_id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(department_id) REFERENCES departments(department_id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(manager_id) REFERENCES employees(employee_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE dependents(
    dependent_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    relationship VARCHAR(25) NOT NULL,
    employee_id INTEGER,
    FOREIGN KEY(employee_id) REFERENCES employees(employee_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE projects(
    proj_id SERIAL PRIMARY KEY,
    proj_name VARCHAR(100),
    proj_createdon DATE,
    proj_duedate DATE,
    proj_cust_name VARCHAR(100)
);

CREATE TABLE project_assignment(
    pras_proj_id INTEGER,
    pras_employee_id INTEGER,
    pras_startdate DATE,
    pras_enddate DATE,
    pras_status VARCHAR(15),
    PRIMARY KEY(pras_proj_id, pras_employee_id)
);