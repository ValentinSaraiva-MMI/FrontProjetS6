<template>
  <NuxtPage />
  <footer v-if="showFooter">
    <Myfooter />
  </footer>
</template>

<style lang="scss">
.test {
  color: $green;
}
</style>

<script setup>
import Myfooter from "../components/elements/Myfooter.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const showFooter = ref(true);

watchEffect(() => {
  const currentPath = router.currentRoute.value.path;
  showFooter.value = currentPath !== "/";
});
</script>
