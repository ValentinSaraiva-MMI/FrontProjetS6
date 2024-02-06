-- CREATE TABLE Card (
--     card_id INTEGER PRIMARY KEY,
--     card_title TEXT,
--     card_description TEXT,
--     categorieID INTEGER,
--     FOREIGN KEY (categorieID) REFERENCES Card_Categorie(card_categorie_id) -- Contrainte de clé étrangère vers la table Card_Categorie
-- );
-- CREATE TABLE Card_Categorie (
--     card_categorie_id INTEGER PRIMARY KEY,
--     card_nom TEXT
-- );
--Table utilisateurs
CREATE TABLE User (
    userID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    pseudo TEXT UNIQUE,
    mdp TEXT -- profil_picture_url TEXT,
    -- -- Colonne pour l'URL de la photo de profil
    -- banniere_picture_url TEXT -- Colonne pour l'URL de la bannière
);