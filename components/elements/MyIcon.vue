<template>
  <i class="icon" :class="className">
    <a :href="url" target="_blank" rel="noopener noreferrer">
      <component :is="getIcon" />
    </a>
  </i>
</template>

<style lang="scss" scoped>
.icon {
  display: inline-flex;
  align-items: center;
  border-radius: 100%;
  height: 42px;
  width: 42px;

  svg {
    scale: 1;
    margin: 8px;
  }

  &.-big {
    height: 85px;
    width: 90px;

    svg {
      scale: 1.5;
    }
  }

  //   @include md{

  //   }

  &.-beige {
    fill: $beige;
  }

  &.-white {
    fill: #ffffff;
  }

  &.-border {
    border: 2px solid red;
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

const props = defineProps({
  name: String,
  size: String,
  color: String,
  border: Boolean,
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
    default:
      return iconcross;
  }
});

const className = computed(() => ({
  "-big": props.size === "big",
  "-blue": props.color === "blue",
  "-white": props.color === "white",
  "-border": props.border,
}));
</script>
