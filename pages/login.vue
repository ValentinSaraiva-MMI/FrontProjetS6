<template>
  <backgroundLogo class="bg_logo-pc" />
  <bigLogo class="logo-pc" />

  <div class="page">
    <div class="connexion" v-if="isLoginForm">
      <h2 class="connexion_title">Vous connecter</h2>
      <form @submit.prevent="connexion" method="post">
        <input
          class="input"
          type="text"
          name="name"
          id="pesudo"
          required
          placeholder="Pseudo"
          v-model="userCo.pseudo"
        />
        <input
          class="input"
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

    <div class="creation" v-else>
      <h2 class="creation">Inscription</h2>
      <form @submit.prevent="register" method="post">
        <input v-model="name" type="text" placeholder="Nom" />
        <input v-model="password" type="password" placeholder="Mot de passe" />
        <input class="a-login-input" type="submit" value="Crée un compte" />
        <p>
          déjà un compte? cliquez <span @click="toggleForm">ici</span> pour se
          connecter
        </p>
        <p>{{ message }}</p>
      </form>
    </div>

    <div class="slider"></div>
  </div>

  <!-- <div v-for="item in bddData" :key="item.userID">
    <p>{{ item.pseudo }}</p>
     <p v-if="item.userID === 1">{{ item.pseudo }}</p> 
  </div> -->
</template>

<style lang="scss">
body {
  background-color: $green;
}

form {
  display: flex;
  flex-direction: column;
  gap: 3.25rem;
}

.logo-pc {
  position: absolute;
  top: 25px;
  left: 25px;
}

.bg_logo-pc {
  display: none;

  @include medium {
    display: block;
    position: absolute;
    top: -80px;
    left: -90px;
  }
}

.page {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0px 10px;
  gap: 20px;
}

.creation {
  width: 100%;
  background-color: red;
}

.connexion {
  width: 100%;
  background-color: blue;

  &_title {
    @include h2;
  }
}

.slider {
  width: 100%;
  height: 150px;
  background-color: purple;
}

.input {
  height: 60px;
}
</style>

<script setup>
import { client } from "@/utils/axios";
import { useGlobalStore } from "@/stores/global";
import { useRouter } from "vue-router";

import backgroundLogo from "../components/elements/backgroundLogo.vue";
import bigLogo from "../components/elements/bigLogo.vue";

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
