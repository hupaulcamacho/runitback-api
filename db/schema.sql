DROP DATABASE IF EXISTS runitback_app;
CREATE DATABASE runitback_app;
\c runitback_app;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    email TEXT,
    region TEXT,
    controller TEXT
);

CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    title TEXT,
    info TEXT,
    bannerUrl TEXT,
    location TEXT
);

CREATE TABLE tournaments (
    id SERIAL PRIMARY KEY,
    eventId INT REFERENCES events(id) ON DELETE CASCADE,
    gameTitle TEXT,
    prizePool TEXT,
    attendees TEXT  
);