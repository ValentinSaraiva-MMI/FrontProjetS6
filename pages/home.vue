<template>
  <!-- <MyIcon background size="big" color="red" name="cross" />



  <MyIcon background size="big" color="full" name="bookmark" />

  <Mycategorie class="categorie" name="partage">
    <span class="categorie_slot">Partage</span>
  </Mycategorie>

  <Mycategorie class="categorie" name="sport">
    <span class="categorie_slot">Fitness</span>
  </Mycategorie> -->
  <p @click="logout()">déconnexion</p>
  <div v-if="cards.length > 0">
    <Mycards
      v-for="(card, index) in cards"
      :key="card.card_id"
      v-show="index === currentIndex"
      :title="card.card_title"
      :description="card.card_description"
      :image="card.card_image"
      :categorie="card.card_category"
    />

    <MyIcon
      class="iconCross"
      background
      size="big"
      color="red"
      name="cross"
      id="dislike"
      @click="dislike()"
    />

    <MyIcon
      class="iconRight"
      background
      size="big"
      color="green"
      name="check"
      id="like"
      @click="like()"
    />
  </div>

  <p v-else>Aucune carte disponible</p>
</template>

<style lang="scss">
.categorie {
  &_slot {
    @include p;
    margin-left: 10px;
  }
}

.iconRight {
  position: fixed;
  top: 50%;
  right: 5%;

  animation-name: iconeAnimation1;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  /*ne joue pas l'animation au début*/
  animation-play-state: paused;
}

like.trigger,
dislike.trigger {
  animation-name: iconeAnimation2;
}

.iconCross {
  z-index: 50;
  position: fixed;
  top: 50%;
  left: 5%;
  animation-name: iconeAnimation1;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  /*ne joue pas l'animation au début*/
  animation-play-state: paused;
}

// @keyframes iconeAnimation1 {
//   0%,
//   100% {
//     opacity: 0.2;
//   }

//   50% {
//     opacity: 1;
//   }
// }

// @keyframes iconeAnimation2 {
//   0%,
//   100% {
//     opacity: 0.2;
//   }

//   50% {
//     opacity: 1;
//   }
// }

swiper {
  height: 65vh;
  width: 90vw;
  display: grid;
  perspective: 1000px;
  perspective-origin: center 50%;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  gap: 1rem;
  transform: translatey(15%);
  // border: 2px solid red;

  @include small {
    // border: 2px solid blue;
  }
  @include medium {
    // border: 2px solid green;
    width: 98vw;
  }
  // @include large {
  //   border: 2px solid yellow;
  // }
  // @include xlarge {
  //   border: 2px solid purple;
  // }

  @include xxlarge {
    border: 2px solid pink;
  }
}

a:active {
  background-color: red;
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useGlobalStore } from "@/stores/global";

import Mycategorie from "../components/elements/Mycategorie.vue";
import MyIcon from "../components/elements/MyIcon.vue";

import { useRouter } from "vue-router";

const router = useRouter();
const store = useGlobalStore();
const userCo = ref({});
const name = ref("");
const password = ref("");
const message = ref("");
const isLoginForm = ref(true);
const bddData = ref([]);

definePageMeta({
  middleware: [function (to, from) {}, "auth"],
});

// function dislike() {
//   if (cards.value.length > 1) {
//     cards.value.splice(currentIndex.value, 1);
//     // Ajuste l'index après suppression pour rester sur la même "vue"
//     currentIndex.value = currentIndex.value % cards.value.length;
//   } else if (cards.value.length === 1) {
//     // Si c'est la dernière carte, réinitialiser tout
//     cards.value = [];
//     currentIndex.value = 0;
//   }
// }

function dislike() {
  if (cards.value.length > 0) {
    setTimeout(() => {
      if (currentIndex.value < cards.value.length - 1) {
        cards.value.splice(currentIndex.value, 1);
      } else {
        cards.value.pop();
        currentIndex.value = 0;
      }
    }, 300);
  }
}

// function dislike() {
//   if (cards.value.length > 0) {
//     let dislikedCardId = cards.value[currentIndex.value].card_id;
//     axios.post(`http://localhost:3001/dislikecard`, { userId: /* Votre userId */, cardId: dislikedCardId })
//       .then(response => {
//         console.log("Dislike enregistré avec succès");
//         // Retirer la carte du tableau localement
//         cards.value.splice(currentIndex.value, 1);
//         if (currentIndex.value >= cards.value.length) {
//           currentIndex.value = 0; // Réinitialiser l'index si nécessaire
//         }
//       })
//       .catch(error => {
//         console.error("Erreur lors de l'enregistrement du dislike", error);
//       });
//   }
// }

// function like() {
//   // Incrémente l'index pour passer à la carte suivante
//   if (cards.value.length > 0) {
//     currentIndex.value = (currentIndex.value + 1) % cards.value.length;
//   }
// }

function like() {
  if (cards.value.length > 0) {
    setTimeout(() => {
      if (currentIndex.value < cards.value.length - 1) {
        cards.value.splice(currentIndex.value, 1);
      } else {
        cards.value.pop();
        currentIndex.value = 0;
      }
    }, 300);
  }

  axios.post("https://garden-projects6.onrender.com/user");
}

const cards = ref([]);

const users = ref([]);
const currentIndex = ref(0); // Ajout d'un index pour suivre la carte actuelle

onMounted(() => {
  axios.get("https://garden-projects6.onrender.com/cards").then((res) => {
    cards.value = res.data;
    console.log("GetData : ", cards.value.length);
  });

  axios.get("https://garden-projects6.onrender.com/user").then((res) => {
    users.value = res.data;
    console.log("GetuserData : ", users.value[0]);
  });
});

// onMounted(() => {
//   const userId = /* Votre logique pour récupérer l'userId */;
//   axios.get(`http://localhost:3001/cardslike?userId=${userId}`).then((res) => {
//     cards.value = res.data;
//   });
// });

const logoutMessage = ref("");
const logout = () => {
  store.logout();
  alert("Déconnecté avec succès");
  router.push("/");
};
</script>
