<script setup>
import { client } from "@/utils/axios";
import { useGlobalStore } from "@/stores/global";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useGlobalStore();
const userCo = ref({});
const name = ref("");
const password = ref("");
const message = ref("");
const isLoginForm = ref(true);
const bddData = ref([]);

const toggleForm = () => {
  isLoginForm.value = !isLoginForm.value;
};

const register = async () => {
  try {
    const user = await registerUser(name.value, password.value);
    console.log("Compte utilisateur créé avec succès:", user);
    message.value = "votre compte a été créer avec succès";
  } catch (error) {
    console.error("Erreur lors de l’inscription:", error);
  }
};
const connexion = async () => {
  try {
    const response = await client.post(`/login`, userCo.value);
    const { token } = response.data; // Récupérer le token depuis la réponse client
    store.setToken(token); // Enregistrer le token dans le store Pinia
    message.value = "Vous êtes bien connecté";
    router.push("/test");
  } catch (error) {
    message.value = "Erreur lors de la connexion";
  }
};

onBeforeMount(async () => {
  try {
    const response = await client.get("/user");
    bddData.value = response.data;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données du serveur",
      error
    );
  }
});
</script>

<template>
  <div class="o-indexContainer">
    <section class="m-sectionLeft">
      <div class="a-section-text">
        <div>Bienvenue sur Hourglass</div>
        <div>Créez une montre à votre image</div>
      </div>

      <div class="a-section-buttons">
        <myButton color="white" lien="/montre"> découvrir</myButton>
      </div>
    </section>

    <section class="m-sectionRight">
      <div class="m-login" v-if="isLoginForm">
        <h2>Connectez vous pour créer votre montre</h2>
        <form @submit.prevent="connexion" method="post">
          <input
            type="text"
            name="name"
            id="pesudo"
            required
            placeholder="Pseudo"
            v-model="userCo.pseudo"
          />
          <input
            type="password"
            name="password"
            id="mdp"
            required
            placeholder="Mot de Passe"
            v-model="userCo.mdp"
          />
          <input class="a-login-input" type="submit" value="Se connecter" />
        </form>
        <p>pas de compte? cliquez <span @click="toggleForm">ici</span></p>
      </div>

      <div class="m-login" v-else>
        <h2>Inscrivez-vous, pour créer votre montre</h2>
        <form @submit.prevent="register" method="post">
          <input v-model="name" type="text" placeholder="Nom" />
          <input
            v-model="password"
            type="password"
            placeholder="Mot de passe"
          />
          <input class="a-login-input" type="submit" value="Crée un compte" />
          <p>
            déjà un compte? cliquez <span @click="toggleForm">ici</span> pour se
            connecter
          </p>
          <p>{{ message }}</p>
        </form>
      </div>
    </section>
  </div>

  <div v-for="item in bddData" :key="item.userID">
    <p v-if="item.userID === 1">{{ item.pseudo }}</p>
  </div>
</template>
