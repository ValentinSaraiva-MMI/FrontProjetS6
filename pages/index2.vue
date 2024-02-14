<script setup>
import { useGlobalStore } from "@/stores/global";
import { useRouter } from "vue-router";
import { client } from "@/utils/axios";
import MyIcon from "../components/elements/MyIcon.vue";
import { onMounted } from "vue";
import axios from "axios";

const logoutMessage = ref("");

const store = useGlobalStore();
const router = useRouter();
const logout = () => {
  store.logout();
  alert("Déconnecté avec succès");
  router.push("/");
};

definePageMeta({
  middleware: [function (to, from) {}, "auth"],
});

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

    const data = ref([]);
    axios.get("https://garden-projects6.onrender.com/cards").then((res) => {
      data.value = res.data;
      console.log("GetData : ", data.value);
    });

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
</script>

<template>
  <p @click="logout()">déconnexion</p>

  <!-- <MyIcon background size="big" color="red" name="cross" />



  <MyIcon background size="big" color="full" name="bookmark" />

  <Mycategorie class="categorie" name="partage">
    <span class="categorie_slot">Partage</span>
  </Mycategorie>

  <Mycategorie class="categorie" name="sport">
    <span class="categorie_slot">Fitness</span>
  </Mycategorie> -->

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
  background-color: #f5f5f5;
  border-radius: 30px;
  color: #333;
  position: relative;

  max-width: 600px;
  max-height: 600px;
  transform: translateZ(calc(-30px * var(--i)))
    translateY(calc(-489px * var(--i))) rotate(calc(-4deg * var(--i)));
  filter: drop-shadow(2px 2px 20px rgba(0, 0, 0, 0.5));
  cursor: pointer;
  user-select: none;
  transition: transform 0.5s;

  position: absolute;
  border-radius: 20px;
  overflow: hidden;

  transform: translateZ(calc(-30px * var(--i)))
    translateY(calc(-20px * var(--i))) rotate(calc(-4deg * var(--i)));
  filter: drop-shadow(2px 2px 20px rgba(0, 0, 0, 0.5));
  cursor: pointer;
  user-select: none;
  transition: transform 0.5s;

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
    // object-fit: cover;
  }

  &_btn {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: -2rem;
  }
}

form {
  display: flex;
  flex-direction: column;
  gap: 3.25rem;
}

.logo-pc {
  position: absolute;
  top: 25px;
  left: 25px;
}

.bg_logo-pc {
  display: none;

  @include medium {
    display: block;
    position: absolute;
    top: -80px;
    left: -90px;
  }
}

.page {
  @include medium {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0px 30px;
    gap: 20px;
  }
}

.creation {
  width: 50vw;
  background-color: red;
}

.connexion {
  width: 50vw;
  margin-top: 3.25rem;

  &_input1 {
    background-color: $white;
    color: $black;
    font-weight: 700;
    height: 3rem;
    border-radius: 10px;
    padding: 10px;
    border: none;
  }

  &_input2 {
    background-color: $white;
    color: $black;
    font-weight: 700;
    height: 3rem;
    border-radius: 10px;
    padding: 10px;
    border: none;
  }

  &_title {
    @include h2;
    margin-bottom: 3.25rem;
    margin-top: 3.25rem;
  }

  &_btn1 {
    height: 3rem;
    background-color: $beige;
    color: $green;
    border-radius: 10px;
    font-weight: 700;
    border: none;
  }

  &_span {
    color: $beige;
    font-weight: 600;
  }
  &_p {
    margin-top: 15px;
  }
}

/*slider image */
.slider {
  width: 439px;
  height: 659px;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 25px;
}
.slider .list {
  position: absolute;
  width: max-content;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  transition: 1s;
}
.slider .list img {
  width: 1300px;

  height: 100%;
  object-fit: cover;
}

.slider .dots {
  position: absolute;
  bottom: 10px;
  left: 0;
  color: #fff;
  width: 100%;
  margin-left: 15px;
  // justify-content: end;
  padding: 0;
  display: flex;
}
.slider .dots li {
  list-style: none;
  width: 10px;
  height: 10px;
  background-color: #fff;
  margin: 10px;
  border-radius: 20px;
  transition: 0.5s;
}
.slider .dots li.active {
  width: 30px;
}
@media screen and (max-width: 768px) {
  .slider {
    height: 400px;
  }
}
</style>
