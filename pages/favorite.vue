<template>
  <h1>Favorite</h1>
  <div class="grill">
    <Myfavcards
      v-for="(card, index) in cards"
      :key="card.card_id"
      :title="card.card_title"
      :description="card.card_description"
      :image="card.card_image"
      :categorie="card.card_category"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const users = ref([]);
const currentIndex = ref(0); // Ajout d'un index pour suivre la carte actuelle

const cards = ref([]);

onMounted(() => {
  axios.get("http://localhost:3001/cards").then((res) => {
    cards.value = res.data;
    console.log("GetData : ", cards.value.length);
  });

  axios.get("http://localhost:3001/user").then((res) => {
    users.value = res.data;
    console.log("GetuserData : ", users.value[0]);
  });
});
</script>

<style lang="scss">
.grill {
  display: grid;

  row-gap: 100px;

  @include medium {
    grid-template-columns: 45vw 45vw;
    column-gap: 35px;
    justify-content: end;
  }
}
</style>
