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
        card_category
    )
VALUES (
        'CarteFitness',
        'https://source.unsplash.com/random/1000x1000/?fitness',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        'Fitness'
    ),
    (
        'Carte jardinage',
        'https://source.unsplash.com/random/1000x1000/?garden',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        'Main verte'
    ),
    (
        'Carte test',
        'https://source.unsplash.com/random/1000x1000/?philosophie',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        'Philosophie'
    ),
    (
        'Carte Motivation',
        'https://source.unsplash.com/random/1000x1000/?ecologie',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        'Ecologie'
    );