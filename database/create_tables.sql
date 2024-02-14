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
    mdp TEXT -- profil_picture_url TEXT,
    -- -- Colonne pour l'URL de la photo de profil
    -- banniere_picture_url TEXT -- Colonne pour l'URL de la bannière
);
CREATE TABLE UserDislikes (
    dislike_id INTEGER PRIMARY KEY,
    userID INTEGER,
    card_id INTEGER,
    FOREIGN KEY (userID) REFERENCES User(userID),
    FOREIGN KEY (card_id) REFERENCES MyCard(card_id)
);