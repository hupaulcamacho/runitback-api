-- DROP DATABASE IF EXISTS runitback_app;
-- CREATE DATABASE runitback_app;
-- \c runitback_app;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username text,
    email text,
    region text,
    controller text
);