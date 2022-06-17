-- SOAL 05
SELECT region_name, COUNT(r.region_id) AS total_department
FROM regions AS r
INNER JOIN countries AS c
ON r.region_id = c.region_id
INNER JOIN locations AS l
ON c.country_id = l.country_id
INNER JOIN departments AS d
ON l.location_id = d.location_id
GROUP BY r.region_id