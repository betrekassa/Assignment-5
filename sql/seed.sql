INSERT INTO tbl_person(first_name, last_name,gender,date_of_birth)
VALUES ('James','Robert', 'M','1995-04-02'),
('James','Robert', 'M','1975-04-02'),
('Mary','Thomas', 'F','1974-04-02'),
('Alexia','Foo', 'M','1985-02-02'),
('John','Babtist', 'M','1988-03-02'),
('Abebe','Alemu', 'F','1975-02-02');

INSERT INTO tbl_officer(tittle,phone_number,date_hired,person_id)
values ('first class','7140105467','2000-02-01',2),
('first class','7140105467','2010-02-01',3),
('lutenates','5040105467','1999-02-01',1);


INSERT INTO tbl_driver(licence_number,phone_number,date_issued,person_id)
values ('A0001','7140105467','2000-02-01',4),
('A0002','7140105467','2010-02-01',5),
('A0003','5040105467','1999-02-01',6);

INSERT INTO tbl_lov_violation(violation_desc,fee_amout,date_issued)
values ('stop sign',55.00,'2020-02-01'),
('speeding over 55mph',450.00,'2020-02-01'),
('red light',799.00,'1999-02-01');

INSERT INTO tbl_cition(date_citited,officer_id,driver_id,violation_id)
values ('2019-09-09',1,2,1),
('2019-10-09',1,3,1),
('2019-12-09',1,2,3);
