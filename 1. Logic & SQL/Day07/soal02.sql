-- SOAL 02
SELECT r.region_id, r.region_name, COUNT(r.region_id) AS total_countries
FROM countries AS c
INNER JOIN regions AS r
ON c.region_id = r.region_id
GROUP BY r.region_id
ORDER BY r.region_id ASC