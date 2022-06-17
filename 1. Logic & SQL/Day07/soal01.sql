-- SOAL 01
SELECT r.region_id, r.region_name, c.country_id, c.country_name
FROM countries AS c
INNER JOIN regions AS r
ON c.region_id = r.region_id
ORDER BY r.region_id, c.country_id ASC