const express = require("express");
const sqlite3 = require("sqlite3");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
//Enable CORS from all origins
app.use(cors());

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Connect to your SQLite database
const db = new sqlite3.Database("./database/projets6-bdd.bd", (err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
  } else {
    console.log("Connected to the database");
  }
});

// Route pour la page d'accueil
app.get("/", (req, res) => {
  res.send("Bienvenue sur la page d'accueil");
});

// Route pour afficher tous les utilisateurs
app.get("/user", (req, res) => {
  db.all("SELECT * FROM user", (err, user) => {
    if (err) {
      console.error("Error fetching users:", err.message);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(user);
  });
});

// Route pour afficher tous les categorie
app.get("/categorie", (req, res) => {
  db.all("SELECT * FROM Card_categorie", (err, user) => {
    if (err) {
      console.error("Error fetching users:", err.message);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(user);
  });
});

// Route pour afficher tous les categorie
app.get("/cards", (req, res) => {
  db.all("SELECT * FROM MyCard", (err, user) => {
    if (err) {
      console.error("Error fetching users:", err.message);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(user);
  });
});

// Route pour afficher que les cartes liké
app.get("/cardslike", (req, res) => {
  // Supposons que l'userId soit passé en tant que paramètre de requête
  const userId = req.query.userId;

  if (!userId) {
    res.status(400).json({ error: "UserID est requis" });
    return;
  }

  db.all(
    "SELECT * FROM MyCard WHERE card_id NOT IN (SELECT card_id FROM UserDislikes WHERE user_id = ?)",
    [userId],
    (err, cards) => {
      if (err) {
        console.error("Error fetching cards:", err.message);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      res.json(cards);
    }
  );
});

// Route pour se connecter
app.post("/login", (req, res) => {
  const { pseudo, mdp } = req.body;
  if (!pseudo || !mdp) {
    res.status(400).json({
      error: "Nom d'utilisateur et mot de passe sont requis pour se connecter",
    });
    return;
  }
  console.log("Trying to log in user...");
  // Recherche de l'utilisateur dans la base de données par le nom d'utilisateur
  db.get(
    "SELECT * FROM User WHERE pseudo = ? AND mdp = ?",
    [pseudo, mdp],
    (err, user) => {
      if (err) {
        console.error("Error logging in user:", err.message);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      if (!user) {
        console.log("User not found or incorrect mdp");
        res
          .status(401)
          .json({ error: "Utilisateur non trouvé ou mot de passe incorrect" });
        return;
      }
      // Envoyer une réponse JSON pour signaler la connexion réussie
      // res.json({ token: user.userID });
      res.json({ token: user.userID, userID: user.userID });

      console.log(`${pseudo} connecté avec succès!`);
    }
  );
});

// Route pour créer un compte utilisateur
app.post("/register", (req, res) => {
  const { pseudo, mdp } = req.body;
  if (!pseudo || !mdp) {
    res.status(400).json({ error: "pseudo, mdp, are required" });
    return;
  }
  console.log("Trying to create user account...");
  db.run(
    "INSERT INTO User (pseudo, mdp) VALUES (?, ?)",
    [pseudo, mdp],
    function (err) {
      const userID = this.lastID;

      if (err) {
        console.error("Error creating user account:", err.message);
        res.status(500).json({ error: "Internal server error" });
        return;
      }

      console.log("User account creation successful!");
      res.json({ userID, pseudo });
    }
  );
});

// Route pour créer une catégorie
// app.post("/registercat", (req, res) => {
//   const { card_nom } = req.body;
//   if (!card_nom) {
//     res.status(400).json({ error: "nom catégorie requis" });
//     return;
//   }
//   console.log("Trying to create categorie...");
//   db.run(
//     "INSERT INTO Card_Categorie (card_nom,) VALUES (?,)",
//     [card_nom],
//     function (err) {
//       // const userID = this.lastID;

//       if (err) {
//         console.error("Error creating categorie:", err.message);
//         res.status(500).json({ error: "Internal server error" });
//         return;
//       }

//       console.log("User account creation successful!");
//       res.json({ card_nom });
//     }
//   );
// });

app.post("/registercat", (req, res) => {
  const { card_nom } = req.body;
  if (!card_nom) {
    res.status(400).json({ error: "nom catégorie requis" });
    return;
  }
  console.log("Trying to create categorie...");
  db.run(
    "INSERT INTO Card_Categorie (card_nom) VALUES (?)",
    [card_nom],
    function (err) {
      const categorieID = this.lastID; // Récupérer l'ID de la nouvelle catégorie insérée

      if (err) {
        console.error("Error creating categorie:", err.message);
        res.status(500).json({ error: "Internal server error" });
        return;
      }

      console.log("Categorie creation successful!");
      res.json({ categorieID, card_nom }); // Renvoyer l'ID de la catégorie et le nom
    }
  );
});

app.post("/registercard", (req, res) => {
  const { card_title, card_image, card_description, card_category } = req.body;
  if (!card_title || !card_category || !card_image || !card_description) {
    res.status(400).json({ error: "nom catégorie requis" });
    return;
  }
  console.log("Trying to create card...");
  db.run(
    "INSERT INTO MyCard (card_title,card_image,card_description,card_category) VALUES (?,?,?,?)",
    [card_title, card_image, card_description, card_category],
    function (err) {
      const card_id = this.lastID; // Récupérer l'ID de la nouvelle catégorie insérée

      if (err) {
        console.error("Error creating categorie:", err.message);
        res.status(500).json({ error: "Internal server error" });
        return;
      }

      console.log("Card creation successful!");
      res.json({ card_id, card_title }); // Renvoyer l'ID de la catégorie et le nom
    }
  );
});

app.post("/dislikecard", (req, res) => {
  const { userId, cardId } = req.body;
  // Ajouter une vérification pour s'assurer que userId et cardId sont fournis

  if (!userId || !cardId) {
    res.status(400).json({ error: "CardID et UserID  requis" });
    return;
  }

  db.run(
    "INSERT INTO UserDislikes (user_id, card_id) VALUES (?, ?)",
    [userId, cardId],
    function (err) {
      if (err) {
        console.error("Error adding dislike:", err.message);
        res.status(500).json({ error: "Internal server error" });
        return;
      }

      console.log("Dislike added successfully");
      res.json({ message: "Dislike added successfully" });
    }
  );
});

// Port d'écoute du serveur Express
const port = process.env.PORT || 3001;

// Écoute du serveur sur le port spécifié
app.listen(port, () => {
  console.log(`Le serveur fonctionne sur le port http://localhost:${port}`);
});
