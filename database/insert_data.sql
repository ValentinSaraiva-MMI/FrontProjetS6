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
        'Manger & bouger',
        'https://source.unsplash.com/random/1000x1000/?fitness',
        'Savez vous que même un peu de sport pouvait réduire le stress, améliorer la qualité du sommeil, et agir comme un antidépresseur ?',
        'Fitness'
    ),
    (
        'Le Jardinage',
        'https://source.unsplash.com/random/1000x1000/?garden',
        'Le jardinage réduit le stress et favorise le bien-être mental.',
        'Main verte'
    ),
    (
        'Moins de stress',
        'https://source.unsplash.com/random/1000x1000/?fitness',
        "L'exercice physique aide à gérer le stress et à réduire l'anxiété.",
        'Fitness'
    ),
    (
        'Connexion Sociale',
        'https://source.unsplash.com/random/1000x1000/?music',
        "La musique rassemble les gens et favorise les interactions sociales.",
        'Music'
    ),
    (
        "Esprit ouvert ",
        'https://source.unsplash.com/random/1000x1000/?philosophie',
        "La philosophie encourage l'ouverture d'esprit et la tolérance envers les points de vue.",
        'Philosophie'
    ),
    (
        'Meilleur alimentation',
        'https://source.unsplash.com/random/1000x1000/?garden',
        "Cultiver ses propres fruits et légumes offre une source d'aliments frais et sains.",
        'Main verte'
    ),
    (
        'Être confiant',
        'https://source.unsplash.com/random/1000x1000/?sport',
        "La pratique sportive renforce la confiance en soi et l'estime de soi.",
        'Fitness'
    );