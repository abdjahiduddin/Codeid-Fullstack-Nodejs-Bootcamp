-- SOAL 13
SELECT
	d.department_id, department_name,
	SUM(colA) AS "15 <= masa kerja <= 25",
	SUM(colB) AS "25 <= masa kerja <= 30",
	SUM(colC) AS "30 <= masa kerja <= 35"
FROM(
	SELECT
		department_id,
		CASE WHEN EXTRACT(YEAR FROM AGE(NOW(),hire_date)) >= 15 AND EXTRACT(YEAR FROM AGE(NOW(),hire_date)) <= 25 
			THEN 1 ELSE 0
			END AS colA,
		CASE WHEN EXTRACT(YEAR FROM AGE(NOW(),hire_date)) > 25 AND EXTRACT(YEAR FROM AGE(NOW(),hire_date)) <= 30
			THEN 1 ELSE 0
			END AS colB,
		CASE WHEN EXTRACT(YEAR FROM AGE(NOW(),hire_date)) > 30 AND EXTRACT(YEAR FROM AGE(NOW(),hire_date)) <= 35
			THEN 1 ELSE 0
			END AS colC
	FROM employees
	ORDER BY department_id
) AS mk
INNER JOIN departments AS d
ON d.department_id = mk.department_id
GROUP BY d.department_id