-- SOAL 11
SELECT 
	EXTRACT(YEAR FROM AGE(NOW(),hire_date)) AS masa_kerja,
	SUM(CASE WHEN EXTRACT(YEAR FROM AGE(NOW(),hire_date)) >= 25 THEN 5 * salary
		 ELSE 3 * salary
	END) AS bonus
FROM employees
GROUP BY masa_kerja
ORDER BY masa_kerja ASC