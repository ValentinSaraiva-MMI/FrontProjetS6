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
      <img
        src="https://source.unsplash.com/random/1000x1000/?sport"
        alt="image représentant le fitness"
      />
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

<style lang="scss">
.btn_favoris {
  position: relative;
  top: -50px;
  left: 85%;

  //   @include medium {
  //     left: 80%;
  //   }

  //   @include medium {
  //     left: 80%;
  //   }
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
  border: 2px solid rgb(0, 8, 255);
  max-width: 600px;
  max-height: 600px;
  position: absolute;
  overflow: hidden;

  top: 10%;
  left: 25%;
  transform: translate(-10%, -25%);

  transform: translateZ(calc(-30px * var(--i)))
    translateY(calc(-20px * var(--i))) rotate(calc(-4deg * var(--i)));
  filter: drop-shadow(2px 2px 20px rgba(0, 0, 0, 0.5));
  cursor: pointer;
  user-select: none;
  transition: transform 0.5s;

  @include small {
    border: 2px solid blue;
  }
  @include medium {
    border: 2px solid green;
    max-height: 600px;
    // max-width: 66.4vw;
  }
  @include large {
    border: 2px solid yellow;
  }
  @include xlarge {
    border: 2px solid purple;
  }

  @include xxlarge {
    border: 2px solid pink;
  }

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

<script setup>
import Mycategorie from "../components/elements/Mycategorie.vue";
import MyIcon from "../components/elements/MyIcon.vue";

defineProps({
  title: String,
  description: String,
  image: String,
});

const iconColor = ref("full");

const toggleColor = () => {
  iconColor.value = iconColor.value === "full" ? "empty" : "full"; // Change the color to 'red' when it's 'full', and vice versa
};

console.log("tests");
</script>
