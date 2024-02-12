<template>
  <nav class="footer_nav">
    <a href="/">
      <MyIcon color="white" name="home" />
    </a>

    <a href="">
      <MyIcon color="emwhite" name="bookmark" />
    </a>

    <a href="">
      <MyIcon color="white" name="profile" />
    </a>
  </nav>
</template>

<style lang="scss">
.footer_nav {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: $green;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: fixed;
  bottom: 1rem;
  transform: translateX(10%);
}
</style>

<script setup>
import MyIcon from "../components/elements/MyIcon.vue";
</script>
