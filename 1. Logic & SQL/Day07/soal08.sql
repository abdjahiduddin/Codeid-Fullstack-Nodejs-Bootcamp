-- SOAL 08
SELECT d.department_id, department_name, COUNT(d.department_id) AS total_emps
FROM departments AS d
INNER JOIN employees AS e
ON d.department_id = e.department_id
GROUP BY d.department_id
ORDER BY total_emps ASC