/*
INSERT INTO provider(first_name, last_name, address, phone_number,tax_id_number,
    balance_owed, type, email) VALUES (
    'Jamie',
    'Douglas',
    '82 Broadway, \n New York, NY 10018',
    5552536464,
    3948346323,
    0.00,
    'cardiologist',
    'jdouglas@medifirst.com'
);


INSERT INTO provider(first_name, last_name, address, phone_number,tax_id_number,
    balance_owed, type, email) VALUES (
    'Aliza',
    'Ndunda',
    '1304 6th Avenue, \n New York, NY 10016',
    5555325345,
    3539212340,
    120.00,
    'oncology',
    'aliza.ndunda@sjh.com'
);

INSERT INTO provider(first_name, last_name, address, phone_number,tax_id_number,
    balance_owed, type, email) VALUES (
    'Michelle',
    'Garcia',
    '35 10th Avenue, \n New York, NY 10043',
    5558764323,
    9438293543,
    400.00,
    'general surgery',
    'michellegarcia@keating.com'
);
*/


INSERT INTO employee(
    first_name,last_name,address,home_phone_number, work_phone_number,
    cell_phone_number,type, manager_id
) VALUES (
    'Jacob', 'Feliciano', '254 Ave. J \n Brooklyn, New York',
    '5552343324','5556253136','5553452347', 'analyst', 1
);

/*
INSERT INTO project(
    title, start_date, end_comments, status
) VALUES (
    '1st Quarter','2016-03-14 00:00:00', NULL, 'Active'
);
*/

INSERT INTO claim( provider_id, member_id, analyst_employee_id,
       project_id, member_first_name, member_last_name, date_of_service,
       claim_origin, reason_for_recovery, description, claim_type,
       service_type, line_of_business, employee_claim, last_modified_date,
       last_modified_field, par_np, project_type, refund_type, tax_id_number,
       tin_suffix, amount_to_be_recovered,original_amount,
       readjudicated_amount, requester, control_category) VALUES (
    1,
    13343234,
    2,
    1,
    'Steve',
    'Greenburg',
    '2016-02-1 00:00:00',
    'Internal Audit',
    'Overpayment to provider',
    'EKG procedure cost $400 less than originally approved',
    'testing',
    'diagonistics',
    'HMO',
    'false',
    '2016-02-10 00:00:00',
    NULL,
    'true',
    'recovery',
    'None',
    9438293543,
    'None',
    400.00,
    900.00,
    500.00,
    'Rocky Balboa',
    'incorrect payment'
);
