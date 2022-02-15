<template>
  <div class="herobox">
    <div class="container">
      <div class="herobox__text-container">
        <h1 class="heading__1 herobox__heading">{{ title }}</h1>
        <p class="body__2 herobox__text">{{ heroText }}</p>
        <div class="herobox__button-container">
          <Button :text="buttonTextOne" classname="button button--light"></Button>
          <router-link class="herobox__link" v-if="buttonTextTwo" to="/pricing"
          >{{ buttonTextTwo
            }}<span class="herobox__arrow">&#129042;</span></router-link
          >
        </div>
      </div>
      <img src="../assets/herobox_1.png" alt="Herobox 1" class="herobox__image" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import navigationTitles, { NavigationType } from "@/data/navigationTitles";
import Button from "@/components/Button.vue";

export default defineComponent({
  name: "HeroBox",
  components: {
    Button,
  },
  props: {
    title: String,
    buttonCount: {
      type: Number,
      default: 1,
    },
    buttonTextOne: String,
    buttonTextTwo: String,
    heroText: String,
    heroImage: String,
  },
  data() {
    return {
      navigationTitles: navigationTitles as NavigationType[],
    };
  },
});
</script>

<style lang="scss">
.herobox {
  background-color: $blueTint;
  width: 100%;
  color: #fff;
}

.herobox__container {
  width: 100%;
}

.herobox__text-container {
  text-align: left;
}

.herobox__text {
  margin-top: 24px;
}

.herobox__image {
  width: 100%;
}

.herobox__link {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  margin-left: 40px;
  color: #fff;
}

.herobox__button-container {
  margin: 48px 0;
}

.herobox__arrow {
  padding-left: 16px;
  font-size: 32px;
  line-height: 0;
  display: inline-flex;
  align-items: center;
}
</style>
