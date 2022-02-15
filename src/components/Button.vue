<template>
  <button :class="classname" v-if="Number">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    text: String,
    classname: String,
    count: Number,
  },
});
</script>

<style scoped lang="scss">

.button {
  padding: 16px 48px;
  border-radius: 40px;
  border: none;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
}

.button--light {
  background-color: $yellow;
  color: #1b1c2a;

  &:hover {
    background-color: #fde4a6;
  }
}

.button--dark {
  background-color: $blueDark;
  color: #fff;

  &:hover {
    background-color: #535460;
  }
}

.button--navigation {
  background-color: transparent;
  border-radius: 41px;
  border: 2px solid rgba(244, 246, 252, 0.2);
  color: #fff;

  &:hover {
    background-color: rgba(244, 246, 252, 0.2);
    color: $blueDark;
  }
}
</style>
