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

  <MyIcon
    class="iconCross"
    background
    size="big"
    color="red"
    name="cross"
    id="dislike"
  />

  <section id="swiper">
    <!-- <Mycards
      style="--i: 0"
      :title="'tdest'"
      :description="` Fruitcake chupa chups tart lemon drops bear claw topping. Pudding pastry
        lemon drops gummi bears powder pudding sweet. Topping cake chocolate
        marshmallow sugar plum candy. Cheesecake gummi beartart bear claw `"
    />  -->

    <!--
    <Mycards
      style="--i: 1"
      :title="'test'"
      :description="` Fruitcake chupa chups tart lemon drops bear claw topping. Pudding pastry
        lemon drops gummi bears powder pudding sweet. Topping cake chocolate
        marshmallow sugar plum candy. Cheesecake gummi beartart bear claw `"
    />
    <Mycards
      style="--i: 2"
      :title="'test'"
      :description="` Fruitcake chupa chups tart lemon drops bear claw topping. Pudding pastry
        lemon drops gummi bears powder pudding sweet. Topping cake chocolate
        marshmallow sugar plum candy. Cheesecake gummi beartart bear claw `"
    /> -->
    <!-- <Mycards
      style="--i: 3"
      :title="'test'"
      :description="` Fruitcake chupa chups tart lemon drops bear claw topping. Pudding pastry
        lemon drops gummi bears powder pudding sweet. Topping cake chocolate
        marshmallow sugar plum candy. Cheesecake gummi beartart bear claw `"
    /> -->

    <!-- <Mycards
      style="--i: 2"
      :title="'test'"
      :description="` Fruitcake chupa chups tart lemon drops bear claw topping. Pudding pastry
        lemon drops gummi bears powder pudding sweet. Topping cake chocolate
        marshmallow sugar plum candy. Cheesecake gummi beartart bear claw `"
    />
    <Mycards
      style="--i: 15"
      :title="'test'"
      :description="` Fruitcake chupa chups tart lemon drops bear claw topping. Pudding pastry
        lemon drops gummi bears powder pudding sweet. Topping cake chocolate
        marshmallow sugar plum candy. Cheesecake gummi beartart bear claw `"
    /> -->
  </section>

  <MyIcon
    class="iconRight"
    background
    size="big"
    color="green"
    name="check"
    id="like"
  />
</template>

<style lang="scss">
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

#like.trigger,
#dislike.trigger {
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

@keyframes iconeAnimation1 {
  0%,
  100% {
    opacity: 0.2;
  }

  50% {
    opacity: 1;
  }
}

@keyframes iconeAnimation2 {
  0%,
  100% {
    opacity: 0.2;
  }

  50% {
    opacity: 1;
  }
}

#swiper {
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
import { useGlobalStore } from "@/stores/global";
import { useRouter } from "vue-router";
import { client } from "@/utils/axios";
import { onMounted } from "vue";

const logoutMessage = ref("");
const logout = () => {
  console.log("test");
  store.logout();
  alert("Déconnecté avec succès");
  router.push("/");
};

//CARD.JS
class Card {
  constructor({ imageUrl, onDismiss, onLike, onDislike }) {
    this.imageUrl = imageUrl;
    this.onDismiss = onDismiss;
    this.onLike = onLike;
    this.onDislike = onDislike;
    this.#init();
  }

  // private properties
  #startPoint;
  #offsetX;
  #offsetY;

  // private methods
  #init = () => {
    const card = document.createElement("div");
    card.classList.add("card");
    const img = document.createElement("img");
    img.src = this.imageUrl;
    card.append(img);
    this.element = card;

    this.#listenToMouseEvents();
  };

  #listenToMouseEvents = () => {
    //mousedown
    this.element.addEventListener("mousedown", (e) => {
      const { clientX, clientY } = e;
      this.#startPoint = { x: clientX, y: clientY };
      //no transition when mouse mouving
      this.element.style.transition = "";
      document.addEventListener("mousemove", this.#handleMouseMove);
    });

    // mouseup
    document.addEventListener("mouseup", this.#handleMouseUp);

    //prevent drag
    this.element.addEventListener("dragstart", (e) => {
      e.preventDefault();
    });
  };

  #handleMouseMove = (e) => {
    if (!this.#startPoint) return;
    const { clientX, clientY } = e;
    this.#offsetX = clientX - this.#startPoint.x;
    this.#offsetY = clientY - this.#startPoint.y;

    const rotate = this.#offsetX * 0.1;
    this.element.style.transform = `translate(${this.#offsetX}px, ${
      this.#offsetY
    }px) rotate(${rotate}deg)`;

    //dismiss card when moving too far away
    if (Math.abs(this.#offsetX) > this.element.clientWidth * 0.7) {
      const direction = this.#offsetX > 0 ? 1 : -1;
      this.#dismiss(direction);
    }
  };

  #handleMouseUp = (e) => {
    this.#startPoint = null;
    document.removeEventListener("mousemove", this.#handleMouseMove);
    //transition when move back
    this.element.style.transition = "transform 0.5s";
    this.element.style.transform = "";
  };

  #dismiss = (direction) => {
    this.#startPoint = null;
    document.removeEventListener("mouseup", this.#handleMouseUp);
    document.removeEventListener("mousemove", this.#handleMouseMove);

    this.element.style.transition = "transform 0.9s";
    this.element.style.transform = `translate(${
      direction * window.innerWidth
    }px, ${this.#offsetY}px) rotate(${90 * direction}deg)`;
    this.element.classList.add("dismissing");

    setTimeout(() => {
      this.element.remove();
    }, 500);

    if (typeof this.onDismiss === "function") {
      this.onDismiss();
    }
    if (typeof this.onLike === "function" && direction === 1) {
      this.onLike();
      console.log("like");
    }
    if (typeof this.onDislike === "function" && direction === -1) {
      this.onDislike();
      console.log("Dislike");
    }
  };
}

//SCRIPT.JS

//dom
onMounted(() => {
  if (process.client) {
    // Vérifiez si le code s'exécute côté client

    const swiper = document.querySelector("#swiper");
    const like = document.querySelector("#like");
    const dislike = document.querySelector("#dislike");

    const urls = [
      "https://source.unsplash.com/random/1000x1000/?sport",
      "https://source.unsplash.com/random/1000x1000/?muscle",
      "https://source.unsplash.com/random/1000x1000/?fitness",
      "https://source.unsplash.com/random/1000x1000/?moutain",
      "https://source.unsplash.com/random/1000x1000/?health",
      "https://source.unsplash.com/random/1000x1000/?music",
      "https://source.unsplash.com/random/1000x1000/?forest",
      "https://source.unsplash.com/random/1000x1000/?art",
      "https://source.unsplash.com/random/1000x1000/?love",
      "https://source.unsplash.com/random/1000x1000/?care",
    ];

    const titre = ["Titre1", "Titre2"];

    const description = ["Titre1", "Titre2"];

    let cardCount = 0;

    //function
    function appendNewCard() {
      const card = new Card({
        imageUrl: urls[cardCount % 10],
        onDismiss: appendNewCard,
        onLike: () => {
          like.style.animationPlayState = "running";
          // always trigger animation when toggling class
          like.classList.toggle("trigger");
        },

        onDislike: () => {
          dislike.style.animationPlayState = "running";
          // always trigger animation when toggling class
          dislike.classList.toggle("trigger");
        },
      });

      // card.element.style.setProperty("--i", cardCount % 5);
      swiper.append(card.element);
      cardCount++;

      const cards = swiper.querySelectorAll(".card:not(.dismissing)");
      cards.forEach((card, index) => {
        card.style.setProperty("--i", index);
      });
    }

    for (let i = 0; i < 10; i++) {
      appendNewCard();
    }
  }
});

import MyIcon from "../components/elements/MyIcon.vue";
import Mycategorie from "../components/elements/Mycategorie.vue";
</script>
