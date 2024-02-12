<template>
  <backgroundLogo class="bg_logo-pc" />
  <bigLogo class="logo-pc" />

  <div class="page">
    <div class="connexion" v-if="isLoginForm">
      <h2 class="connexion_title">Vous connecter</h2>
      <form @submit.prevent="connexion" method="post">
        <input
          class="connexion_input1"
          type="text"
          name="name"
          id="pseudo"
          required
          placeholder="Pseudo"
          v-model="userCo.pseudo"
        />
        <input
          class="connexion_input2"
          type="password"
          name="password"
          id="mdp"
          required
          placeholder="Mot de Passe"
          v-model="userCo.mdp"
        />
        <input class="connexion_btn1" type="submit" value="Se connecter" />
      </form>
      <p class="connexion_p">
        Vous n’avez pas de compte ?
        <span class="connexion_span" @click="toggleForm"> cliquez ici</span>
      </p>
    </div>

    <div class="connexion" v-else>
      <h2 class="connexion_title">Inscription</h2>
      <form @submit.prevent="register" method="post">
        <input
          class="connexion_input1"
          v-model="name"
          type="text"
          placeholder="Nom"
        />
        <input
          class="connexion_input2"
          v-model="password"
          type="password"
          placeholder="Mot de passe"
        />
        <input class="connexion_btn1" type="submit" value="Crée un compte" />
      </form>
      <p class="connexion_p">
        Vous avez déja un compte ?
        <span class="connexion_span" @click="toggleForm">cliquez ici</span> pour
        se connecter
      </p>
      <p>{{ message }}</p>
    </div>

    <div class="slider">
      <div class="list">
        <div class="item">
          <img src="public/images/plante1.jpg" alt="" />
        </div>
        <div class="item">
          <img src="public/images/plante2.jpg" alt="" />
        </div>
        <div class="item">
          <img src="public/images/plante3.jpg" alt="" />
        </div>
        <div class="item">
          <img src="public/images/plante4.jpg" alt="" />
        </div>
        <div class="item">
          <img src="public/images/plante5.jpg" alt="" />
        </div>
      </div>
      <!-- <div class="buttons">
        <button id="prev"><</button>
        <button id="next">></button>
      </div> -->
      <ul class="dots">
        <li class="active"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>

  <div v-for="item in bddData" :key="item.card_id">
    <p>{{ item.card_title }}</p>
  </div>
</template>

<style lang="scss">
// body {
//   background-color: $green;
// }

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
  @include medium {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0px 30px;
    gap: 20px;
  }
}

.creation {
  width: 50vw;
  background-color: red;
}

.connexion {
  width: 50vw;
  margin-top: 3.25rem;

  &_input1 {
    background-color: $white;
    color: $black;
    font-weight: 700;
    height: 3rem;
    border-radius: 10px;
    padding: 10px;
    border: none;
  }

  &_input2 {
    background-color: $white;
    color: $black;
    font-weight: 700;
    height: 3rem;
    border-radius: 10px;
    padding: 10px;
    border: none;
  }

  &_title {
    @include h2;
    margin-bottom: 3.25rem;
    margin-top: 3.25rem;
  }

  &_btn1 {
    height: 3rem;
    background-color: $beige;
    color: $green;
    border-radius: 10px;
    font-weight: 700;
    border: none;
  }

  &_span {
    color: $beige;
    font-weight: 600;
  }
  &_p {
    margin-top: 15px;
  }
}

/*slider image */
.slider {
  width: 439px;
  height: 659px;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 25px;
}
.slider .list {
  position: absolute;
  width: max-content;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  transition: 1s;
}
.slider .list img {
  width: 1300px;

  height: 100%;
  object-fit: cover;
}

.slider .dots {
  position: absolute;
  bottom: 10px;
  left: 0;
  color: #fff;
  width: 100%;
  margin-left: 15px;
  // justify-content: end;
  padding: 0;
  display: flex;
}
.slider .dots li {
  list-style: none;
  width: 10px;
  height: 10px;
  background-color: #fff;
  margin: 10px;
  border-radius: 20px;
  transition: 0.5s;
}
.slider .dots li.active {
  width: 30px;
}
@media screen and (max-width: 768px) {
  .slider {
    height: 400px;
  }
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
    router.push("/home");
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

onMounted(() => {
  // Code exécuté après le chargement complet du DOM
  let slider = document.querySelector(".slider .list");
  let dotsContainer = document.querySelector(".slider .dots");

  let items = document.querySelectorAll(".slider .list .item");
  let dots = document.querySelectorAll(".slider .dots li");

  let lengthItems = items.length - 1;
  let active = 0;

  // function reloadSlider() {
  //   slider.style.left = -items[active].offsetLeft + "px";

  //   let last_active_dot = document.querySelector(".slider .dots li.active");
  //   last_active_dot.classList.remove("active");
  //   dots[active].classList.add("active");
  // }

  function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + "px";

    let last_active_dot = document.querySelector(".slider .dots li.active");
    if (last_active_dot) {
      last_active_dot.classList.remove("active");
    }
    dots[active].classList.add("active");
  }

  let refreshInterval = setInterval(() => {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
  }, 3000);

  window.onresize = function (event) {
    reloadSlider();
  };
});
</script>
