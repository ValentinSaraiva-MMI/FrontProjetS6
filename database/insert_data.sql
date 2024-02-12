--Insertion d'un utilisateur 
INSERT INTO User (pseudo, mdp)
VALUES ('valentinS', 'Spacecast');
--Insertion d'une catégorie 
INSERT INTO Card_Categorie (card_nom)
VALUES ('Fitness'),
    ('Partage'),
    ('Philosophie'),
    ('Main verte'),
    ('Mélomanie'),
    ('Ecologie');
INSERT INTO MyCard (
        card_title,
        card_image,
        card_description,
        category_id
    )
VALUES (
        'CarteFitness',
        'https://source.unsplash.com/random/1000x1000/?fitness',
        'Description',
        1
    ),
    (
        'CartePartage',
        'https://source.unsplash.com/random/1000x1000/?happy',
        'Description',
        2
    ),
    (
        'CarteMotivation',
        'https://source.unsplash.com/random/1000x1000/?sport',
        'Description',
        3
    );