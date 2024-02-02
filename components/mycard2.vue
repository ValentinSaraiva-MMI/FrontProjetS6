<template>
  <div class="card">
    <div class="card_texte">
      <h2 class="card_texte_title">{{ title }}</h2>
      <p class="card_texte_description">{{ description }}</p>
    </div>

    <Mycategorie class="categorie2" name="partage">
      <span class="categorie2_slot">Partage</span>
    </Mycategorie>

    <div class="card_image">
      <img :src="image" alt="Image représentant le fitness" />
    </div>

    <div class="card_btn">
      <MyIcon background size="big" color="red" name="cross" />
      <MyIcon background size="big" color="green" name="check" />
    </div>
    <MyIcon
      class="btn_favoris"
      background
      :color="iconColor"
      name="bookmark"
      @click="toggleColor"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Mycategorie from "../components/elements/Mycategorie.vue";
import MyIcon from "../components/elements/MyIcon.vue";

defineProps({
  title: String,
  description: String,
  image: String,
});

const iconColor = ref("full");

const toggleColor = () => {
  iconColor.value = iconColor.value === "full" ? "empty" : "full";
};
</script>

<style lang="scss">
.btn_favoris {
  position: relative;
  top: -50px;
  left: 85%;
}

.categorie2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &_slot {
    margin-left: 10px;
  }
}

.card {
  // background-color: #f5f5f5;
  // border-radius: 30px;
  // color: #333;
  // position: relative;
  // border: 2px solid red;
  // max-width: 600px;
  // max-height: 600px;
  // transform: translateZ(calc(-30px * var(--i)))
  //   translateY(calc(-489px * var(--i))) rotate(calc(-4deg * var(--i)));
  // filter: drop-shadow(2px 2px 20px rgba(0, 0, 0, 0.5));
  // cursor: pointer;
  // user-select: none;
  // transition: transform 0.5s;

  // position: absolute;
  // border-radius: 20px;
  // overflow: hidden;

  // transform: translateZ(calc(-30px * var(--i)))
  //   translateY(calc(-20px * var(--i))) rotate(calc(-4deg * var(--i)));
  // filter: drop-shadow(2px 2px 20px rgba(0, 0, 0, 0.5));
  // cursor: pointer;
  // user-select: none;
  // transition: transform 0.5s;

  .card_texte {
    height: 50%;
    padding: 20px;

    .card_texte_title {
      font-weight: 600;
    }
  }

  img {
    min-height: 240px;
    max-height: 300px;
    border-radius: 0px 0px 30px 30px;
    object-fit: cover;
  }

  &_btn {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: -2rem;
  }
}
</style>
