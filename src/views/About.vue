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
  <div class="section">
    <div class="container">
      <div class="identity">
        <div class="identity__content">
          <span class="label__2">Who we are</span>
          <div class="content__container">
            <div class="content__wrapper">
              <h3 class="heading__3 content__title">Goal focussed</h3>
              <p class="body__1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div class="content__wrapper">
              <h3 class="heading__3 content__title">Continuous improvement</h3>
              <p class="body__1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div class="identity__image-wrapper">
          <img
            src="https://images.pexels.com/photos/7413916/pexels-photo-7413916.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt="identity_image"
            class="identity__image"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="section">
    <div class="container">
      <div class="process">
        <h2 class="heading__2 process__heading">The process we follow</h2>
        <div class="process__container">
          <div
            class="process__card"
            v-for="process of processData"
            :key="process.title"
          >
            <div class="card__top">
              <div class="card__circle" />
              <div class="card__dotted" />
            </div>
            <div class="card__bottom">
              <h6 class="heading__6">{{ process.title }}</h6>
              <p class="body__1">{{ process.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="section section__mission">
    <div class="container">
      <div class="mission">
        <div class="mission__wrapper">
          <div class="mission__content">
            <span class="label__2">Our Mission</span>
            <h3 class="heading__3">Inspire, Innovate, Share</h3>
            <p class="body__1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div class="mission__image-wrapper">
            <img
              src="https://images.pexels.com/photos/7792811/pexels-photo-7792811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="mission__image"
              class="mission__image"
            />
          </div>
        </div>
        <div class="mission__wrapper">
          <div class="mission__content">
            <span class="label__2">Our Vision</span>
            <h3 class="heading__3">Laser focus</h3>
            <p class="body__1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
          <div class="mission__image-wrapper">
            <img
              src="https://images.pexels.com/photos/7491017/pexels-photo-7491017.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="mission__image"
              class="mission__image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="section">
    <div class="container">
      <div class="benefits">

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import processData, { ProcessDataType } from "@/data/processData";

export default defineComponent({
  name: "About",
  components: {},
  data() {
    return {
      processData: processData as ProcessDataType[],
    };
  },
});
</script>

<style lang="scss">
.section {
  padding: 128px 0;
}

.section__mission {
  background-color: $accent;
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

.identity__content {
  background-color: #f4f5f5;
  padding: 80px;
}

.content__container {
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  padding-top: 10px;
}

.content__wrapper {
  width: 100%;
  max-width: 515px;
  display: grid;
  gap: 16px;
}

.content__title {
  color: $blueDark;
}

.identity__image-wrapper {
  width: 100%;
  height: 340px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.identity__image {
  width: 100%;
}

.process {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
}

.process__heading {
  text-align: center;
}

.process__container {
  display: grid;
  justify-content: center;
  width: 100%;
  grid-template-columns: repeat(auto-fill, 270px);
  gap: 60px;
}

.process__card {
  display: grid;
  gap: 32px 0;
}

.card__top {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card__bottom {
  display: grid;
  gap: 10px 0;
}

.card__circle {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: $blueRoyal;
}

.card__dotted {
  border: 2px dashed #2405f2;
  opacity: 0.4;
  width: 100%;
  max-width: 224px;
}

.mission {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 96px 0;
}

.mission__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px 140px;

  &:nth-of-type(even) {
    flex-wrap: wrap;
    flex-direction: row-reverse;
  }
}

.mission__content {
  width: 100%;
  max-width: 620px;
  display: grid;
  gap: 16px 0;
}

.mission__image-wrapper {
  width: 100%;
  max-width: 515px;
  height: 100%;
  max-height: 340px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mission__image {
  width: 100%;
}
</style>
