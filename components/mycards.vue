<template>
  <div class="card">
    <div class="card_texte">
      <h2 class="card_texte_title">{{ title }}</h2>
      <p class="card_texte_description">{{ description }}</p>
    </div>

    <div class="card_image">
      <img src="/images/fitness.jpg" alt="image représentant le fitness" />
    </div>

    <div class="test">
      <MyIcon background size="big" color="red" name="cross" />
    </div>
  </div>
</template>

<style lang="scss">
.card {
  width: 83vw;
  height: 30rem;
  background-color: $beige;
  border-radius: 30px;
  color: $black;

  &_texte {
    height: 50%;
    margin: 20px;

    &_title {
      @include h2;
      font-weight: 600;
    }

    &_description {
      @include h6;
    }
  }

  &_image {
    height: 50%;
    position: relative;
    bottom: 10%;
  }
}

img {
  border-radius: 0px 0px 30px 30px;
}
</style>

<script setup>
import MyIcon from "../components/elements/MyIcon.vue";

defineProps({
  title: String,
  description: String,
  image: String,
});
</script>
