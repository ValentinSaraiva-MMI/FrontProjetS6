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
const db = new sqlite3.Database("../database/projets6-bdd.bd", (err) => {
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
      res.json({ token: user.userID });

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

// Port d'écoute du serveur Express
const port = process.env.PORT || 3001;

// Écoute du serveur sur le port spécifié
app.listen(port, () => {
  console.log(`Le serveur fonctionne sur le port http://localhost:${port}`);
});
