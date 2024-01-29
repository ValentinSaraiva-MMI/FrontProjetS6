<template>
  <MyIcon background size="big" color="red" name="cross" />

  <categorie class="categorie" name="partage">
    <span class="categorie_slot">Partage</span>
  </categorie>

  <categorie class="categorie" name="sport">
    <span class="categorie_slot">Fitness</span>
  </categorie>

  <Mycards
    :title="'test'"
    :description="` Fruitcake chupa chups tart lemon drops bear claw topping. Pudding pastry
        lemon drops gummi bears powder pudding sweet. Topping cake chocolate
        marshmallow sugar plum candy. Cheesecake gummi beartart bear claw pie
        wafer.`"
  />
</template>

<style lang="scss">
.categorie {
  &_slot {
    @include p;
    margin-left: 10px;
  }
}
</style>

<script setup>
import MyIcon from "../components/elements/MyIcon.vue";
import categorie from "../components/elements/categorie.vue";
</script>
