<template>
  <div class="section">
    <div class="container">
      <div class="hero">
        <div class="hero__content">
          <span class="label__1">About us</span>
          <h1 class="heading__1 hero__heading">Our designs solve problems</h1>
          <p class="body__1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <img
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt="hero_image"
          class="hero__image"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
  components: {},
});
</script>

<style lang="scss">
.section {
  padding: 128px 0;
}

.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hero__image {
  width: 100%;
  max-width: 550px;
}

.hero__content {
  width: 100%;
  max-width: 600px;
}

.hero__heading {
  margin: 10px 0 30px;
}
</style>
