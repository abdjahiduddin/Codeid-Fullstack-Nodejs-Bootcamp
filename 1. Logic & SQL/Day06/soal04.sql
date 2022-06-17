-- Menampilkan seluruh id employee yang memiliki jabatan manager
SELECT DISTINCT(manager_id) FROM employees

-- Selanjutnya memasukkan 3 records
INSERT INTO projects(proj_name,proj_createdon,proj_duedate,proj_cust_name,proj_status,proj_account_mgr,employee_id) 
VALUES ('E-COMMERCE',now(),now()+INTERVAL '100 days','TELKOMSEL','INPROGRESS',100,100);
INSERT INTO projects(proj_name,proj_createdon,proj_duedate,proj_cust_name,proj_status,proj_account_mgr,employee_id) 
VALUES ('TRAVELOKA',now(),now()+INTERVAL '100 days','XL','INPROGRESS',120,120);
INSERT INTO projects(proj_name,proj_createdon,proj_duedate,proj_cust_name,proj_status,proj_account_mgr,employee_id) 
VALUES ('TIKET.COM',now(),now()+INTERVAL '100 days','INDOSAT','INPROGRESS',201,201);