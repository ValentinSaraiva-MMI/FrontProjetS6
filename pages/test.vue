<script setup>
import { useGlobalStore } from "@/stores/global";
import { useRouter } from "vue-router";
import { client } from "@/utils/axios";

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
</script>

<template>
  vous etes connencté

  <p @click="logout()">déconnexion</p>
</template>
