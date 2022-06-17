ALTER TABLE projects
ADD COLUMN proj_account_mgr INTEGER

ALTER TABLE projects
ADD COLUMN employee_id INTEGER,
ADD CONSTRAINT employee_id FOREIGN KEY(employee_id)
REFERENCES employees(employee_id)