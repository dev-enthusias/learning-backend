CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    price FLOAT NOT NULL,
    rating FLOAT NOT NULL
);