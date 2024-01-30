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

    <Mycards
      :title="'test'"
      :description="` Fruitcake chupa chups tart lemon drops bear claw topping. Pudding pastry
        lemon drops gummi bears powder pudding sweet. Topping cake chocolate
        marshmallow sugar plum candy. Cheesecake gummi beartart bear claw `"
    />
  </section>
</template>

<style lang="scss">
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
}
</style>

<script setup>
import MyIcon from "../components/elements/MyIcon.vue";
import Mycategorie from "../components/elements/Mycategorie.vue";
</script>
