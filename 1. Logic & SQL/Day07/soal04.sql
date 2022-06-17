-- SOAL 04
SELECT department_id, department_name, l.location_id
FROM regions AS r
INNER JOIN countries AS c
ON r.region_id = c.region_id
INNER JOIN locations AS l
ON c.country_id = l.country_id
INNER JOIN departments AS d
ON l.location_id = d.location_id
WHERE region_name = 'Americas'
ORDER BY department_id ASC