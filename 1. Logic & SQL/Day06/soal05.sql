-- Menampilkan ID dari department IT
SELECT department_id  FROM departments 
WHERE department_name = 'IT'

-- Setelah mendapatkan ID dari department IT selanjutnya menampilkan ID dari employee yang ada di department IT 
SELECT employee_id FROM employees
WHERE department_id = 6

-- Selanjutnya menambahkan data ke table project_assignment dengan employee yang ada di department IT
INSERT INTO project_assignment(pras_proj_id, pras_employee_id, pras_startdate, pras_status)
VALUES (1, 104, '2021-09-14','ASSIGNED');
INSERT INTO project_assignment(pras_proj_id, pras_employee_id, pras_startdate, pras_enddate, pras_status)
VALUES (1, 105, '2021-09-14','2021-09-17','COMPLETED');
INSERT INTO project_assignment(pras_proj_id, pras_employee_id, pras_startdate, pras_status)
VALUES (1, 106, '2021-09-14','INPROGRESS');

INSERT INTO project_assignment(pras_proj_id, pras_employee_id, pras_startdate, pras_status)
VALUES (2, 104, '2021-09-14','ASSIGNED');
INSERT INTO project_assignment(pras_proj_id, pras_employee_id, pras_startdate, pras_enddate, pras_status)
VALUES (2, 105, '2021-09-14','2021-09-17','COMPLETED');
INSERT INTO project_assignment(pras_proj_id, pras_employee_id, pras_startdate, pras_enddate, pras_status)
VALUES (2, 106, '2021-09-14','2021-09-17','INPROGRESS');