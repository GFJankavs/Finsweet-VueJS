<template>
  <div class="section">
    <div class="container">
      <div class="portfolio">
        <span class="body__2"> What we created </span>
        <h2 class="heading__2">Our Work Portfolio</h2>
        <p class="body__2 portfolio__text">
          We help teams create great digital products by providing them with
          tools and technology to make the design-to-code process universally
          accessible.
        </p>
        <div class="portfolio__icon-container">
          <a href="https://www.facebook.com/" class="portfolio__icon">
            <img src="@/assets/icon_fb-dark.svg" alt="icon_fb" />
          </a>
          <a href="https://www.twitter.com/" class="portfolio__icon">
            <img src="@/assets/icon_tw-dark.svg" alt="icon_twitter" />
          </a>
          <a href="https://www.instagram.com/" class="portfolio__icon">
            <img src="@/assets/icon_insta-dark.svg" alt="icon_instagram" />
          </a>
          <a href="https://www.linkedin.com/" class="portfolio__icon">
            <img src="@/assets/icon_in-dark.svg" alt="icon_linkedin" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Work",
  components: {},
});
</script>

<style lang="scss">
.portfolio {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: $blueDark;
}

.portfolio__text {
  width: 100%;
  max-width: 730px;
  margin: 24px 0 32px;
}

.portfolio__icon-container {
  display: flex;
  gap: 0 27px;
}
</style>
