-- SOAL 10
SELECT 
	employee_id, 
	first_name, 
	last_name, 
	salary, 
	EXTRACT(YEAR FROM AGE(NOW(),hire_date)) AS masa_kerja,
	CASE WHEN EXTRACT(YEAR FROM AGE(NOW(),hire_date)) >= 25 THEN 5 * salary
		 ELSE 3 * salary
	END AS bonus
FROM employees
ORDER BY employee_id