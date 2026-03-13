# SELECT

## SELECT and FROM clause

Some select examples learnt;

    SELECT first_name FROM customer;
    SELECT first_name, last_name FROM customer;
    SELECT first_name || " " || last_name fullName, customer_id FROM customer;
    SELECT * FROM customer;
    SELECT NOW();

we used column alias and the concatenation operator in example 3

## Migrations and seeding

Since many times you are migrating you are also seeding data.
The `createMigrationFile` would create a migration file in the migrations directory and also create a seed file in the seeds directory with the same time stamps. The migration files are prefixed with `timestamp-create` while the seed are prefixed with `timestamp-seed`. Use the command below to create a file.

                `npm run migrate:create filename`

                
