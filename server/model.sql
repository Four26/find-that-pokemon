CREATE TABLE players (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(255),
    time INTEGER,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);
