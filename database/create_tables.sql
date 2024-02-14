CREATE TABLE MyCard (
    card_id INTEGER PRIMARY KEY,
    card_title TEXT,
    card_image TEXT,
    -- Stocke l'URL de l'image
    card_description TEXT,
    card_category TEXT
);
CREATE TABLE Card_Categorie (
    card_categorie_id INTEGER PRIMARY KEY,
    card_nom TEXT
);
--Table utilisateurs
CREATE TABLE User (
    userID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    pseudo TEXT UNIQUE,
    mdp TEXT,
    cardliked INTEGER [],
    carddisliked INTEGER [],
    cardfavorite INTEGER []
);