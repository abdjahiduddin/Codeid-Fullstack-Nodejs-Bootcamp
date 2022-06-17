-- Membuat Table
CREATE TABLE t_client(
    client_number CHAR(5) PRIMARY KEY,
    client_name VARCHAR(50) NOT NULL,
    birth_date DATE NOT NULL
);

CREATE TABLE t_agent(
    agent_code CHAR(5) PRIMARY KEY,
    agent_name VARCHAR(50) NOT NULL,
    agent_office VARCHAR(40) NOT NULL,
    basic_commission NUMERIC(8,2)
);

CREATE TABLE t_policy(
    policy_number CHAR(3),
    policy_submit_date DATE NOT NULL,
    premium NUMERIC(10,2) NOT NULL,
    discount INTEGER NOT NULL,
    commission NUMERIC(10,2) NOT NULL,
    client_number CHAR(5) NOT NULL,
    agent_code CHAR(5) NOT NULL,
    policy_status VARCHAR(15) NOT NULL,
    policy_due_date DATE,
    FOREIGN KEY(client_number) REFERENCES t_client(client_number) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(agent_code) REFERENCES t_agent(agent_code) ON UPDATE CASCADE ON DELETE CASCADE
);

-- Input Data
INSERT INTO t_client(client_number, client_name, birth_date) VALUES ('CL001', 'WAYNE ROONEY', '11/5/1956');
INSERT INTO t_client(client_number, client_name, birth_date) VALUES ('CL002', 'RYAN GIGGS', '3/9/1972');
INSERT INTO t_client(client_number, client_name, birth_date) VALUES ('CL003', 'DAVID BECKHAM', '3/9/1985');
INSERT INTO t_client(client_number, client_name, birth_date) VALUES ('CL004', 'MICHAEL OWEN', '3/9/2012');

INSERT INTO t_agent(agent_code, agent_name, agent_office) VALUES ('AG001', 'LIDYA', 'JAKARTA');
INSERT INTO t_agent(agent_code, agent_name, agent_office) VALUES ('AG002', 'RUDI', 'BALI');
INSERT INTO t_agent(agent_code, agent_name, agent_office) VALUES ('AG003', 'DICKY', 'BALI');
INSERT INTO t_agent(agent_code, agent_name, agent_office) VALUES ('AG004', 'DAVID', 'SURABAYA');
INSERT INTO t_agent(agent_code, agent_name, agent_office) VALUES ('AG005', 'FARIZ', 'SURABAYA');

INSERT INTO t_policy(policy_number, policy_submit_date, premium, discount, commission, client_number, agent_code, policy_status) VALUES ('001', '5/1/2018', 18600000.00, 10, 930000.00, 'CL001', 'AG001', 'INFORCE');
INSERT INTO t_policy(policy_number, policy_submit_date, premium, discount, commission, client_number, agent_code, policy_status) VALUES ('002', '5/1/2018', 2500000.00, 10, 125000.00, 'CL002', 'AG002', 'INFORCE');
INSERT INTO t_policy(policy_number, policy_submit_date, premium, discount, commission, client_number, agent_code, policy_status) VALUES ('003', '10/1/2018', 2500000.00, 10, 125000.00, 'CL003', 'AG003', 'TERMINATE');
INSERT INTO t_policy(policy_number, policy_submit_date, premium, discount, commission, client_number, agent_code, policy_status) VALUES ('004', '25/1/2018', 4000000.00, 10, 200000.00, 'CL003', 'AG002', 'PROPOSAL');
INSERT INTO t_policy(policy_number, policy_submit_date, premium, discount, commission, client_number, agent_code, policy_status) VALUES ('005', '25/1/2018', 2625000.00, 10, 131250.00, 'CL004', 'AG002', 'PROPOSAL');

-- Bagian A
SELECT *
FROM t_policy AS tp
INNER JOIN t_client AS tc
ON tp.client_number = tc.client_number
WHERE EXTRACT(MONTH FROM policy_submit_date) >= 1 AND EXTRACT(DAY FROM policy_submit_date) > 15 AND EXTRACT(MONTH FROM birth_date) = 9

-- Bagian B 
SELECT *
FROM t_policy AS tp
INNER JOIN t_agent AS ta
ON tp.agent_code = ta.agent_code
WHERE policy_status = 'INFORCE' AND agent_office = 'JAKARTA'

-- Bagian C
UPDATE t_agent
SET
	basic_commission = bc.basic_commission
FROM(
	SELECT
		agent_code,
		ROUND(commission/premium,2) * 100 AS basic_commission
	FROM t_policy
) AS bc
WHERE t_agent.agent_code = bc.agent_code

-- Bagian D
UPDATE t_policy
SET
	policy_due_date = submit_date.policy_submit_date + INTERVAL '30 days'
FROM(
	SELECT policy_number, policy_submit_date
	FROM t_policy
) AS submit_date
WHERE t_policy.policy_number = submit_date.policy_number

-- Bagian E
SELECT 
	ta.agent_code,
	agent_name, 
	policy_number, 
	premium, 
	discount, 
	client_number, 
	policy_status,
	ROUND(premium - (premium * 0.1),2) AS premium_after_tax
FROM t_agent AS ta
INNER JOIN t_policy AS tp
ON ta.agent_code = tp.agent_code
WHERE ROUND(premium - (premium * 0.1),2) < 1000000
ORDER BY premium_after_tax ASC