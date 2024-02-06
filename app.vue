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
  showFooter.value = !router.currentRoute.value.path.startsWith("/login");
});
</script>
