<template>
  <MyIcon background size="big" color="red" name="cross" />

  <categorie class="categorie" name="partage">
    <span class="categorie_slot">Partage</span>
  </categorie>

  <categorie class="categorie" name="sport">
    <span class="categorie_slot">Fitness</span>
  </categorie>

  <Mycards></Mycards>
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
