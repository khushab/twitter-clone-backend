CREATE DATABASE todo_database;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

-- for twitter 
CREATE DATABASE twitter_clone;

-- \c twitter_clone <<== to get into the database

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_handle VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);