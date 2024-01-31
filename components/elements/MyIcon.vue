<template>
  <i class="icon" :class="className">
    <a :href="url" target="_blank" rel="noopener noreferrer">
      <component :is="getIcon" />
    </a>
  </i>
</template>

<style lang="scss" scoped>
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 42px;
  width: 42px;

  svg {
    transform: scale(1);
    margin-top: 0.3rem;
  }

  &.-big {
    width: 54px;
    height: 54px;

    svg {
      scale: 1.5;
    }
  }

  //   @include md{

  //   }

  &.-green {
    fill: $green;
  }

  &.-empty {
    fill: none;
    stroke: $gold;
  }

  &.-emwhite {
    fill: none;
    stroke: $white;
  }

  &.-full {
    fill: $gold;
  }

  &.-red {
    fill: $red;
  }
  &.-gold {
    fill: $gold;
  }

  &.-white {
    fill: $white;
  }

  &.-background {
    background-color: $white;

    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
}
</style>

<script setup>
import { computed } from "vue";

import iconcheck from "../icons/check.vue";
import iconcross from "../icons/cross.vue";
import iconearth from "../icons/earth.vue";
import iconlight from "../icons/light.vue";
import iconmymusic from "../icons/mymusic.vue";
import iconfavoris from "../icons/favoris.vue";
import iconbookmark from "../icons/bookmark.vue";
import iconprofile from "../icons/profile.vue";
import iconhome from "../icons/home.vue";

const props = defineProps({
  name: String,
  size: String,
  color: String,
  background: Boolean,
  url: String,
});

const getIcon = computed(() => {
  switch (props.name) {
    case "check":
      return iconcheck;
    case "cross":
      return iconcross;
    case "earth":
      return iconearth;
    case "light":
      return iconlight;
    case "music":
      return iconmymusic;
    case "home":
      return iconhome;
    case "favoris":
      return iconfavoris;
    case "profile":
      return iconprofile;
    case "bookmark":
      return iconbookmark;
    default:
      return iconcross;
  }
});

const className = computed(() => ({
  "-big": props.size === "big",
  "-blue": props.color === "blue",
  "-white": props.color === "white",
  "-red": props.color === "red",
  "-green": props.color === "green",
  "-gold": props.color === "gold",
  "-empty": props.color === "empty",
  "-full": props.color === "full",
  "-emwhite": props.color === "emwhite",
  "-background": props.background,
}));
</script>
