CREATE TABLE refund(
    id  	BIGSERIAL PRIMARY KEY,
    type	VARCHAR(20),
    refund_date TIMESTAMP,
    transaction_date TIMESTAMP,
    amt_paid DECIMAL,
    event_id INTEGER REFERENCES event(id) ON DELETE CASCADE
);

CREATE TABLE write_off(
    id	BIGSERIAL PRIMARY KEY,
    amt	DECIMAL,
    description	TEXT,
    event_id INTEGER REFERENCES event(id) ON DELETE CASCADE
);

CREATE TABLE correspondence(
    id BIGSERIAL PRIMARY KEY,
    type VARCHAR(50),
    content_obj JSONB,
    event_id INTEGER REFERENCES event(id) ON DELETE CASCADE
);

CREATE TABLE event (
    id	BIGSERIAL PRIMARY KEY,
    claim_id	INTEGER,
    comment	TEXT,
    employee_id	INTEGER,
    type	VARCHAR(20),
    creation_date	TIMESTAMP
);

CREATE TABLE employee(
    id	BIGSERIAL PRIMARY KEY,
    first_name	VARCHAR(50),
    last_name	VARCHAR(50),
    address	VARCHAR(256),
    home_phone_number VARCHAR(20),
    work_phone_number VARCHAR(20),
    cell_phone_number VARCHAR(20),
    type	VARCHAR(20),
    manager_id 	INTEGER
);

CREATE TABLE provider(
    id BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    address	VARCHAR(256),
    phone_number VARCHAR(20),
    tax_id_number VARCHAR(20),
    balance_owed DECIMAL,
    type VARCHAR(100),
    email VARCHAR(150)
);

CREATE TABLE project(
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(50),
    start_date	TIMESTAMP,
    end_comments TEXT,
    status	VARCHAR(20)
);

CREATE TABLE claim(
	   id BIGSERIAL PRIMARY KEY,
       provider_id INTEGER REFERENCES provider(id),
       member_id INTEGER,
       analyst_employee_id INTEGER REFERENCES employee(id),
       project_id INTEGER REFERENCES project(id),
       member_first_name	VARCHAR(50),
       member_last_name	VARCHAR(50),
       date_of_service	TIMESTAMP,
       claim_origin	VARCHAR(256),
       reason_for_recovery	VARCHAR(256),
       description	TEXT,
       claim_type	VARCHAR(50),
       service_type	VARCHAR(50),
       line_of_business	VARCHAR(50),
       employee_claim	BOOLEAN,
       last_modified_date	TIMESTAMP,
       last_modified_field	TIMESTAMP,
       par_np	BOOLEAN,
       project_type	VARCHAR(50),
       refund_type	VARCHAR(50),
       tax_id_number VARCHAR(20),
       tin_suffix VARCHAR(10),
       amount_to_be_recovered DECIMAL,
       original_amount DECIMAL,
       readjudicated_amount	DECIMAL,
       requester VARCHAR(256),
       control_category	VARCHAR(50)
);

CREATE TABLE offset_debt (
    id BIGSERIAL PRIMARY KEY,
    claim_id INTEGER REFERENCES claim(id),
    provider_id	INTEGER REFERENCES provider(id),
    creation_date TIMESTAMP,
    amt	DECIMAL
);
