-- SOAL 12
 SELECT
	SUM(COALESCE(mk.colA,0)) AS "15 <= masa kerja <= 25",
	SUM(COALESCE(mk.colB,0)) AS "25 <= masa kerja <= 30",
	SUM(COALESCE(mk.colC,0)) AS "30 <= masa kerja <= 35"
FROM(
	SELECT 
		CASE WHEN EXTRACT(YEAR FROM AGE(NOW(),hire_date)) >= 15 AND EXTRACT(YEAR FROM AGE(NOW(),hire_date)) <= 25 
			THEN 1
			END AS colA,
		CASE WHEN EXTRACT(YEAR FROM AGE(NOW(),hire_date)) > 25 AND EXTRACT(YEAR FROM AGE(NOW(),hire_date)) <= 30
			THEN 1
			END AS colB,
		CASE WHEN EXTRACT(YEAR FROM AGE(NOW(),hire_date)) > 30 AND EXTRACT(YEAR FROM AGE(NOW(),hire_date)) <= 35
			THEN 1
			END AS colC
	FROM employees
) AS mk