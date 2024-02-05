
--Insertion d'un utilisateur 
INSERT INTO User (pseudo, mdp) VALUES ('Telmane', 'telmane');
INSERT INTO User (pseudo, mdp) VALUES ('David', 'david');


-- Insert data into "Bracelet_Texture" table
INSERT INTO Bracelet_Texture (nom, prix) VALUES ('cuir-blanc', 5.00);
INSERT INTO Bracelet_Texture (nom, prix) VALUES ('tissus-marron', 10.00);
INSERT INTO Bracelet_Texture (nom, prix) VALUES ('tissus-or', 15.00);

-- Insert data into "Pierre" table
INSERT INTO Pierre (nom, prix, couleur) VALUES ('aucunes', 00.00, "none");
INSERT INTO Pierre (nom, prix, couleur) VALUES ('Rubis', 150.00, '#ff0000');
INSERT INTO Pierre (nom, prix, couleur) VALUES ('Diamant',300.00, '#0000ff');
INSERT INTO Pierre (nom, prix, couleur) VALUES ('Emeraude',200.00, '#00ff00');

-- Insert data into "Boitier_Texture" table
INSERT INTO Boitier_Texture (nom, prix) VALUES ('black01', 9.99);
INSERT INTO Boitier_Texture (nom, prix) VALUES ('black02', 9.99);
INSERT INTO Boitier_Texture (nom, prix) VALUES ('fluo01', 9.99);
INSERT INTO Boitier_Texture (nom, prix) VALUES ('mickey', 49.99);
INSERT INTO Boitier_Texture (nom, prix) VALUES ('white01', 9.99);
INSERT INTO Boitier_Texture (nom, prix) VALUES ('white02', 9.99);
INSERT INTO Boitier_Texture (nom, prix) VALUES ('white03', 9.99);
INSERT INTO Boitier_Texture (nom, prix) VALUES ('white04', 9.99);
INSERT INTO Boitier_Texture (nom, prix) VALUES ('white05', 9.99);


-- Insert data into "Boitier_Forme" table
INSERT INTO Boitier_Forme (nom, prix) VALUES ('boitier_carre', 4.00);
INSERT INTO Boitier_Forme (nom, prix) VALUES ('boitier_rond',8.00);


-- Insert data into "Montre" table
INSERT INTO Montre (nom, boitierTextureID, boitierFormeID, braceletTextureID, pierreID, main_color, userID) VALUES ("montre 1", 4, 2, 3, 2, '#ff00ff', 1);
INSERT INTO Montre (nom, boitierTextureID, boitierFormeID, braceletTextureID,  pierreID, main_color, userID) VALUES ("montre 2", 1, 1, 1, 1, '#ff00ff', 1);
INSERT INTO Montre (nom, boitierTextureID, boitierFormeID, braceletTextureID,  pierreID, main_color, userID) VALUES ("montre 3", 2, 2, 2, 2, '#ff00ff', 2);



INSERT INTO Panier (userID, montreID) VALUES (1, 1);
INSERT INTO Panier (userID, montreID) VALUES (1, 2);
INSERT INTO Panier (userID, montreID) VALUES (2, 3);





