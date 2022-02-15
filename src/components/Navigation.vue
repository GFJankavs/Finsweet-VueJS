<template>
  <nav class="navigation">
    <div class="container">
      <div class="navigation__wrapper">
        <img src="../assets/finsweet_logo.svg" alt="logo" />
        <ul class="navigation__items">
          <router-link
            v-for="title in navigationTitles"
            :to="title.route"
            :key="title.title"
            class="navigation__item"
          >
            {{ title.title }}
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.navigation {
  background-color: $blueTint;
  color: white;
}

.navigation__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navigation__items {
  display: flex;
}

.navigation__item {
  text-decoration: none;
  color: #bbbbcb;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: 32px;
  transition: color 0.3s ease-out;

  &:hover {
    color: #fff;
  }

  &:first-of-type {
    margin-left: 0;
  }
}

.router-link-active {
  color: #fff;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import navigationTitles, { NavigationType } from "@/data/navigationTitles";

export default defineComponent({
  name: "Navigation",
  components: {},
  data() {
    return {
      navigationTitles: navigationTitles as NavigationType[],
    };
  },
});
</script>
