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
      <img src="/images/fitness.jpg" alt="image représentant le fitness" />
    </div>

    <div class="card_btn">
      <MyIcon background size="big" color="red" name="cross" />
      <MyIcon background size="big" color="green" name="check" />
    </div>
    <MyIcon class="btn_favoris" background color="gold" name="favoris" />
  </div>
</template>

<style lang="scss">
.btn_favoris {
  position: relative;
  top: -50px;
  left: 75vw;
}

.categorie2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &_slot {
    @include p;
    margin-left: 10px;
    color: $white;
  }
}

.card {
  width: 83vw;
  height: 30rem;
  background-color: $beige;
  border-radius: 30px;
  color: $black;
  position: relative;

  &_texte {
    height: 50%;
    padding: 20px;

    &_title {
      @include h2;
      font-weight: 600;
    }

    &_description {
      @include h6;
    }
  }

  //   &_image {
  //     // height: 50%;
  //     // margin-top: 5px;
  //     // position: relative;
  //     // top: 5px;
  //   }

  img {
    // margin-top: 2rem;
    min-height: 210px;
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

<script setup>
import Mycategorie from "../components/elements/Mycategorie.vue";
import MyIcon from "../components/elements/MyIcon.vue";

defineProps({
  title: String,
  description: String,
  image: String,
});
</script>
