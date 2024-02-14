<template>
  <div class="cardFav">
    <div class="cardFav_texte">
      <h2 class="cardFav_texte_title">{{ title }}</h2>
      <p class="cardFav_texte_description">{{ description }}</p>
    </div>

    <!-- <Mycategorie class="categorie2" :name="categorie" /> -->

    <div class="cardFav_image">
      <img :src="image" alt="" />
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

<style scoped lang="scss">
.btn_favoris {
  position: absolute;
  bottom: 10px;
  right: 10px;

  //   @include medium {
  //     left: 80%;
  //   }

  //   @include medium {
  //     left: 80%;
  //   }
}

.liked {
  opacity: 50%;
}
.dislike {
  opacity: 100%;
}

.cardFav {
  background-color: $beige;
  border-radius: 30px;
  color: $black;

  width: 40vw;
  height: 50vw;

  // transform: translateZ(calc(-30px * var(--i)))
  //   translateY(calc(-20px * var(--i))) rotate(calc(-4deg * var(--i)));
  filter: drop-shadow(2px 2px 20px rgba(0, 0, 0, 0.5));

  user-select: none;

  transition: transform 0.5s ease-in-out;

  @include small {
    border: 2px solid blue;
  }
  @include medium {
    border: 2px solid green;
    max-height: 600px;
    height: 25rem;
    width: 20rem;
    // max-width: 66.4vw;
  }
  @include large {
    border: 2px solid yellow;
  }
  @include xlarge {
    border: 2px solid purple;
    width: 35vw;
    height: 30vw;
  }

  @include xxlarge {
    border: 2px solid pink;
  }
  &_image {
    width: 100%;
    img {
      width: 100%;
      height: 8.98rem;
      object-fit: cover;
      border-bottom-right-radius: 30px;
      border-bottom-left-radius: 30px;
      position: absolute;
      bottom: 0;

      @include medium {
        height: 8rem;
        position: absolute;
        bottom: 0;
      }
      @include large {
        height: 10rem;
        position: absolute;
        bottom: 0;
      }
    }
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

  &_btn {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    bottom: 0;
    transform: translateY(50%);
  }
}
</style>

<script setup>
import Mycategorie from "../components/elements/Mycategorie.vue";
import MyIcon from "../components/elements/MyIcon.vue";

import { ref, onMounted } from "vue";
import axios from "axios";

defineProps({
  title: String,
  description: String,
  image: String,
  categorie: String,
});

const cards = ref([]);

let isLiked = false;
let isDisliked = true;

onMounted(() => {
  axios.get("http://localhost:3001/cards").then((res) => {
    cards.value = res.data;
  });
});

const iconColor = ref("empty");

const toggleColor = () => {
  iconColor.value = iconColor.value === "full" ? "empty" : "full";
};
</script>
