<template>
  <div class="green">
    <i class="icon" :class="className">
      <component :is="getIcon" />
      <slot class="slot1"></slot>
    </i>
  </div>
</template>

<style lang="scss" scoped>
svg {
  position: relative;
  top: 2px;
}

.green {
  background-color: $green;
  display: inline-flex;
  padding: 5px 12px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  fill: white;
}
</style>

<script setup>
import { computed } from "vue";

import iconpartage from "../icons/partage.vue";
import iconplant from "../icons/plant.vue";
import iconsport from "../icons/sport.vue";
import iconmymusic from "../icons/mymusic.vue";
// import iconcross from "../icons/cross.vue";

const props = defineProps({
  name: String,
});

const getIcon = computed(() => {
  switch (props.name) {
    case "partage":
      return iconpartage;
    case "plant":
      return iconplant;
    case "sport":
      return iconsport;
    case "music":
      return iconmymusic;
    default:
      return iconmymusic;
  }
});

const className = computed(() => ({
  "-white": props.color === "white",
}));
</script>
