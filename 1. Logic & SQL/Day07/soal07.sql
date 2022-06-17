-- SOAL 07
SELECT country_name, COUNT(c.country_id) AS total_departments
FROM countries AS c
INNER JOIN locations AS l
ON c.country_id = l.country_id
INNER JOIN departments AS d
ON l.location_id = d.location_id
GROUP BY c.country_id
ORDER BY total_departments DESC
LIMIT 1