<template>
  <div class="card" :class="{ liked: isLiked, disliked: isDisliked }">
    <div class="card_texte">
      <h2 class="card_texte_title">{{ title }}</h2>
      <p class="card_texte_description">{{ description }}</p>
    </div>

    <Mycategorie class="categorie2" :name="categorie">
      <span class="categorie2_slot">{{ categorie }}</span>
    </Mycategorie>

    <!-- <Mycategorie class="categorie2" :name="categorie" /> -->

    <div class="card_image">
      <img :src="image" alt="" />
    </div>

    <!-- <div class="card_btn">
      <MyIcon background size="big" color="red" name="cross" />
      <MyIcon background size="big" color="green" name="check" />
    </div> -->

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

.liked {
  opacity: 50%;
}
.dislike {
  opacity: 100%;
}

.card {
  background-color: $beige;
  border-radius: 30px;
  color: $black;

  width: 25rem;
  height: 30rem;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);

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
  &_image {
    width: 100%;
    img {
      width: 100%;
      height: 14.98rem;
      object-fit: cover;
      border-bottom-right-radius: 30px;
      border-bottom-left-radius: 30px;
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
  axios.get("https://garden-projects6.onrender.com/cards").then((res) => {
    cards.value = res.data;
  });
});

const iconColor = ref("empty");

const toggleColor = () => {
  iconColor.value = iconColor.value === "full" ? "empty" : "full";
};
</script>
