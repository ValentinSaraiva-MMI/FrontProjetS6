CREATE TABLE MyCard (
    card_id INTEGER PRIMARY KEY,
    card_title TEXT,
    card_image TEXT,
    -- Stocke l'URL de l'image
    card_description TEXT,
    category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES Card_Categorie(card_categorie_id)
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