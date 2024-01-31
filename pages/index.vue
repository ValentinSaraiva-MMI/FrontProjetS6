<template>
  <!-- <MyIcon background size="big" color="red" name="cross" />
  <MyIcon background size="big" color="full" name="bookmark" />

  <Mycategorie class="categorie" name="partage">
    <span class="categorie_slot">Partage</span>
  </Mycategorie>

  <Mycategorie class="categorie" name="sport">
    <span class="categorie_slot">Fitness</span>
  </Mycategorie> -->

  <section>
    <Mycards
      :title="'test'"
      :description="` Fruitcake chupa chups tart lemon drops bear claw topping. Pudding pastry
        lemon drops gummi bears powder pudding sweet. Topping cake chocolate
        marshmallow sugar plum candy. Cheesecake gummi beartart bear claw `"
    />
  </section>
</template>

<style scoped lang="scss">
.categorie {
  &_slot {
    @include p;
    margin-left: 10px;
  }
}

section {
  display: grid;
  justify-content: center;
  gap: 1rem;
  transform: translatey(15%);
  border: 2px solid red;

  @include small {
    // transform: translatey(15%);
    border: 2px solid blue;
  }
  @include medium {
    border: 2px solid green;
    // transform: translatey(10%);
  }
  @include large {
    border: 2px solid yellow;
    // transform: translatey(10%);
  }
  @include xlarge {
    border: 2px solid purple;
  }

  @include xxlarge {
    border: 2px solid pink;
  }
}

a:active {
  background-color: red;
}
</style>

<script setup>
import MyIcon from "../components/elements/MyIcon.vue";
import Mycategorie from "../components/elements/Mycategorie.vue";
</script>
