<template>
  <footer class="footer">
    <div class="footer__upper">
      <div class="container">
        <div class="footer__info-container">
          <div class="footer__info-left">
            <img
              src="@/assets/finsweet_logo.svg"
              alt="logo"
              class="footer__logo"
            />
            <p class="label__2 info__text">
              We are always open to discuss your project and improve your online
              presence.
            </p>
          </div>
          <div class="footer__info-right">
            <h2 class="heading__2">Lets Talk!</h2>
            <p class="body__1 info__text">
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </p>
          </div>
        </div>
        <div class="footer__contacts-container">
          <div class="footer__contacts-left">
            <span class="label__1 contacts__label">Email me at</span>
            <span class="body__1 contacts__text">contact@website.com</span>
          </div>
          <div class="footer__contacts-right">
            <span class="label__1 contacts__label">Call us</span>
            <span class="body__1 contacts__text">0927 6277 28525</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__lower">
      <div class="container">
        <div class="footer__nav-container">
          <span class="body__2">Copyright 2021, Finsweet.com</span>
          <nav>
            <ul>
              <router-link
                v-for="item in navigationTitles"
                :to="item.route"
                :key="item.title"
                @click="scrollToTop()"
                >{{ item.title }}
              </router-link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "./src/styles/variables";
.footer {
  width: 100%;
}

.footer__upper {
  color: #fff;
  background-color: $blueTint;
}

.footer__lower {
  color: #000;
  background-color: #fff;
}

.footer__info-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1000px;
}

.footer__logo {
  padding-bottom: 22px;
}

.info__text {
  color: #f4f6fc;
}

.footer__info-left,
.footer__info-right {
  width: 100%;
  max-width: 400px;
}

.footer__contacts-container {
  background-color: $yellow;
  display: flex;
  gap: 0 30px;
  padding: 17px 0 17px 38px;
  width: 100%;
  max-width: 500px;
}

.footer__contacts-left,
.footer__contacts-right {
  display: flex;
  flex-direction: column;
}

.contacts__label {
  color: $blueDark;
}

.contacts__text {
  color: $blueDark;
}

.footer__nav-container {
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import navigationTitles, { NavigationType } from "@/data/navigationTitles";

export default defineComponent({
  name: "Footer",
  data() {
    return {
      navigationTitles: navigationTitles as NavigationType[],
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
});
</script>
