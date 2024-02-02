<template>
  <!-- <MyIcon background size="big" color="red" name="cross" />
  <MyIcon background size="big" color="full" name="bookmark" />

  <Mycategorie class="categorie" name="partage">
    <span class="categorie_slot">Partage</span>
  </Mycategorie>

  <Mycategorie class="categorie" name="sport">
    <span class="categorie_slot">Fitness</span>
  </Mycategorie> -->

  <section id="swiper">
    <!-- <Mycards
      style="--i: 0"
      :title="'tdest'"
      :description="` Fruitcake chupa chups tart lemon drops bear claw topping. Pudding pastry
        lemon drops gummi bears powder pudding sweet. Topping cake chocolate
        marshmallow sugar plum candy. Cheesecake gummi beartart bear claw `"
    /> -->

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
</template>

<style scoped lang="scss">
.categorie {
  &_slot {
    @include p;
    margin-left: 10px;
  }
}

#swiper {
  height: 65vh;
  width: 100vw;
  display: grid;
  perspective: 1000px;
  perspective-origin: center 50%;
  justify-content: center;
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
import { onMounted } from "vue";

//CARD.JS
class Card {
  constructor({ imageUrl }) {
    this.imageUrl = imageUrl;
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
  };

  #handleMouseUp = (e) => {
    this.#startPoint = null;
    document.removeEventListener("mousemove", this.#handleMouseMove);
    //transition when move back
    this.element.style.transition = "transform 0.5s";
    this.element.style.transform = "";
  };
}

//SCRIPT.JS

//dom
onMounted(() => {
  if (process.client) {
    // Vérifiez si le code s'exécute côté client
    const swiper = document.querySelector("#swiper");

    const urls = [
      "https://source.unsplash.com/random/1000x1000/?sport",
      "https://source.unsplash.com/random/1000x1000/?muscle",
      "https://source.unsplash.com/random/1000x1000/?fitness",
      "https://source.unsplash.com/random/1000x1000/?moutain",
      "https://source.unsplash.com/random/1000x1000/?videogames",
    ];

    const titre = ["Titre1", "Titre2"];

    const description = ["Titre1", "Titre2"];

    let cardCount = 0;

    function appendNewCard() {
      const card = new Card({
        imageUrl: urls[cardCount % 5],
      });

      card.element.style.setProperty("--i", cardCount % 5);
      swiper.append(card.element);
      cardCount++;
    }

    for (let i = 0; i < 5; i++) {
      appendNewCard();
    }
  }
});

import MyIcon from "../components/elements/MyIcon.vue";
import Mycategorie from "../components/elements/Mycategorie.vue";
</script>
