<template>
  <div :class="`card ${className}`" v-for="card of cardData" :key="card.id">
    <img :src="card.image" :alt="card.title" class="card__logo" />
    <h6 class="heading__6 card__heading">
      {{ card.title }}
    </h6>
    <p class="body__1">
      {{ card.description }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { CardType } from "@/data/cardData";
export default defineComponent({
  name: "Card",
  props: {
    cardData: Array as PropType<Array<CardType>>,
    className: String,
  },
});
</script>

<style scoped lang="scss">
.card {
  color: $blueDark;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 48px;
}
.card__logo {
  width: 100%;
  max-width: 32px;
}
.card__heading {
  margin: 26px 0 12px;
}
</style>
