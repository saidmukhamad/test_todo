PRAGMA foreign_keys = ON;


CREATE TABLE USER (
  id integer PRIMARY KEY AUTOINCREMENT,
  password TEXT,
  name TEXT,
  birthdate TEXT,
  email TEXT
);


CREATE TABLE NOTION (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date TEXT NOT NULL,
  reason TEXT
);


CREATE TABLE UserNotionRelation (
  userId INTEGER,
  notionId INTEGER,
  FOREIGN KEY (userId) REFERENCES USER (id),
  FOREIGN KEY (notionId) REFERENCES NOTION (id)
);