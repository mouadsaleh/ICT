create table person
(
id Varchar(40) primary key,
phone_number varchar(10) not null,
first_name varchar(20),
last_name varchar(20),
street_address varchar(20),
city varchar(20),
state varchar(2),
zip varchar(5)
)

create table donation
(
id bigint AUTO_INCREMENT primary key,
person_id varchar(40) not null,
amount decimal(16,2),
donation_date datetime,
donation_method varchar(10),
FOREIGN KEY(person_id) REFERENCES person(id)
)