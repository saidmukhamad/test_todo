-- DROP TABLE NOTION;
-- DROP TABLE Profile;
-- Drop TAble ProfileNotionRelation;
-- DROP TABLE UserProfileRelation


CREATE TABLE User (
  id integer PRIMARY KEY AUTOINCREMENT,
  password TEXT,
  login TEXT UNIQUE,
  name TEXT
);


CREATE TABLE Notion (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date TEXT NOT NULL,
  notion TEXT,
  profileId INTEGER,
  userId INTEGER,
  FOREIGN KEY (profileId) REFERENCES Profile (id)
  FOREIGN KEY (userId) REFERENCES User (id)
);


CREATE TABLE Profile (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  userId INTEGER,
  name TEXT,
  FOREIGN KEY (userId) REFERENCES User (id)
);

