-- SOAL 09
SELECT d.department_id, department_name, COUNT(employee_id) AS total_emps
FROM regions AS r
INNER JOIN countries AS c
ON r.region_id = c.region_id
INNER JOIN locations AS l
ON c.country_id = l.country_id
INNER JOIN departments AS d
ON l.location_id = d.location_id
INNER JOIN employees AS e
ON d.department_id = e.department_id
WHERE region_name = 'Americas'
GROUP BY d.department_id
ORDER BY total_emps ASC