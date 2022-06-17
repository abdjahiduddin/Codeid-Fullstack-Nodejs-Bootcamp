-- SOAL 03
-- Terdapat 2 cara untuk menyelesaikan soal nomor 3
-- Cara 1:
SELECT c.country_id, country_name, location_id, street_address, postal_code, city, state_province
FROM countries AS c
INNER JOIN locations AS l
ON c.country_id = l.country_id
WHERE region_id = (SELECT region_id FROM regions WHERE region_name = 'Europe')
ORDER BY c.country_id ASC

-- Cara 2:
SELECT c.country_id, country_name, location_id, street_address, postal_code, city, state_province
FROM regions AS r
INNER JOIN countries AS c
ON c.region_id = r.region_id
INNER JOIN locations AS l
ON c.country_id = l.country_id
WHERE r.region_name = 'Europe' 
ORDER BY c.country_id ASC