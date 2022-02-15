<template>
  <HeroBox
    title="Building stellar websites for early startups"
    hero-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    button-text-one="View our work"
    button-text-two="View Pricing"
  ></HeroBox>
  <div class="work">
    <div class="container">
      <div class="work__wrapper">
        <div class="work__text-container">
          <h2 class="heading__2">How we work</h2>
          <p class="body__1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <router-link to="/contacts" class="link"
            >Get in touch with us
            <span class="herobox__arrow">&#129042;</span></router-link
          >
        </div>
        <div class="work__grid">
          <div class="work__card" v-for="card in workData" :key="card.title">
            <img :src="card.image" :alt="card.title" />
            <h5 class="heading__5 card__heading">{{ card.title }}</h5>
            <p class="body__1 card__text">{{ card.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="projects">
    <div class="container">
      <div class="projects__top">
        <h2 class="heading__2">View our projects</h2>
        <router-link to="/projects" class="link"
          >View More <span class="herobox__arrow">&#129042;</span></router-link
        >
      </div>
      <div class="projects__content">
        <div class="project__container project__container--main">
          <img src="../assets/projects/card_main.png" alt="project_main" />
          <div class="project__text-container">
            <h3 class="heading__project">
              Workhub office Webflow Webflow Design
            </h3>
            <p class="body__2">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam
            </p>
            <router-link to="/projects" class="link"
              >View More
              <span class="herobox__arrow">&#129042;</span></router-link
            >
          </div>
        </div>
        <div class="project__container project__container--side-1">
          <img src="../assets/projects/card_side-1.png" alt="project_main" />
          <div class="project__text-container">
            <h3 class="heading__project">Unisaas Website Design</h3>
            <p class="body__2">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam
            </p>
            <router-link to="/projects" class="link"
              >View More
              <span class="herobox__arrow">&#129042;</span></router-link
            >
          </div>
        </div>
        <div class="project__container project__container--side-2">
          <img src="../assets/projects/card_side-2.png" alt="project_main" />
          <div class="project__text-container">
            <h3 class="heading__project">Unisaas Website Design</h3>
            <p class="body__2">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam
            </p>
            <router-link to="/projects" class="link"
              >View More
              <span class="herobox__arrow">&#129042;</span></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="features">
    <div class="container">
      <div class="features__wrapper">
        <div class="features__top">
          <span class="label__2">Features</span>
          <h2 class="heading__2">
            Design that solves problems, one product at a time
          </h2>
        </div>
        <div class="features__content">
          <div
            class="card"
            v-for="feature of featuresData"
            :key="feature.title"
          >
            <img :src="feature.image" alt="card_logo" class="card__logo" />
            <h6 class="heading__6 card__heading">{{ feature.title }}</h6>
            <p class="body__1">
              {{ feature.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="testimonials">
    <div class="container">
      <div class="testimonials__wrapper">
        <div class="testimonials__left">
          <h3 class="heading__3">What our clients say about us</h3>
          <p class="body__1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
          </p>
        </div>
        <div class="testimonials__right">
          <div class="testimonial__top">
            <h5 class="heading__5">
              "{{ userData[testimonialIndex].message }}"
            </h5>
          </div>
          <div class="testimonial__bottom">
            <div class="profile__container">
              <img
                :src="userData[testimonialIndex].avatar"
                alt="profile"
                class="profile__image"
              />
              <div class="profile__text-container">
                <span class="label__1">{{
                  userData[testimonialIndex].name
                }}</span>
                <span class="cap__2">{{
                  userData[testimonialIndex].designation
                }}</span>
              </div>
            </div>
            <div class="testimonial__button-container">
              <button
                class="testimonial__button-wrapper"
                @click="testimonialClickLeft"
              >
                <img
                  src="@/assets/arrow.png"
                  alt="arrow"
                  class="testimonial__button"
                />
              </button>
              <button
                class="testimonial__button-wrapper"
                @click="testimonialClickRight"
              >
                <img
                  src="@/assets/arrow.png"
                  alt="arrow"
                  class="testimonial__button testimonial__button--right"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="faq">
      <div class="container">
        <div class="faq__wrapper">
          <div class="faq__text-container">
            <h3 class="heading__3">Frequently asked questions</h3>
            <router-link to="/contacts">
              <span class="label__1">Contact us for more info</span>
            </router-link>
          </div>
          <div class="faq__accordion-container">
            <div
              class="faq__accordion"
              v-for="question of faqData"
              :key="question.id"
            >
              <button
                class="accordion__container"
                @click="toggleAccordion(question.id)"
              >
                <h6 class="heading__6 accordion__number">
                  {{ `0${question.id}` }}
                </h6>
                <span class="accordion__wrapper">
                  <span class="accordion heading__6">
                    {{ question.title }}
                    <img
                      src="@/assets/plus_sign.svg"
                      alt="plus"
                      :class="[
                        question.isOpen
                          ? 'accordion__plus accordion__plus--open'
                          : 'accordion__plus',
                      ]"
                    />
                  </span>
                </span>
              </button>
              <p
                class="label__1 accordion__panel"
                :style="[
                  question.isOpen ? { display: 'block' } : { display: 'none' },
                ]"
              >
                {{ question.value }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="inquiry">
    <div class="container">
      <div class="inquiry__wrapper">
        <img
          src="https://images.pexels.com/photos/3228878/pexels-photo-3228878.jpeg?&h=4480&w=6720"
          alt="image"
          class="inquiry__image"
        />
        <div class="inquiry__content-wrapper">
          <div class="content__text-container">
            <h1 class="heading__1">
              Building stellar websites for early startups
            </h1>
            <p class="body__2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </p>
          </div>
          <div class="inquiry__form">
            <div class="form__container">
              <div class="form__top">
                <h5 class="heading__5">Send inquiry</h5>
                <span class="label__2"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.</span
                >
              </div>
              <form class="form">
                <input
                  v-model="formData.name"
                  @input="(e) => e.target.value"
                  type="text"
                  class="form__input"
                  placeholder="Your Name"
                />
                <input
                  v-model="formData.email"
                  @input="(e) => e.target.value"
                  type="email"
                  class="form__input"
                  placeholder="Email"
                />
                <input
                  v-model="formData.link"
                  @input="(e) => e.target.value"
                  type="text"
                  class="form__input"
                  placeholder="Paste your Figma design URL"
                />
              </form>
              <div class="form__bottom">
                <Button
                  text="Send an Inquiry"
                  classname="button button--light form__button"
                ></Button>
                <router-link class="form__link" to="/contacts">
                  Get in touch with us
                  <span class="herobox__arrow">&#129042;</span></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="blog">
    <div class="container">
      <div class="blog__wrapper">
        <h2 class="heading__2">Our Blog</h2>
        <div class="blog__container">
          <div class="blog__card" v-for="blog of blogData" :key="blog.id">
            <img :src="blog.imageURL" alt="blog_image" class="blog__image" />
            <div class="blog__text-container">
              <span class="label__2">{{ blog.date }}</span>
              <h6 class="heading__6">{{ blog.title }}</h6>
              <p class="body__1">{{ blog.description }}</p>
            </div>
            <router-link to="/blogs" class="form__link blog__link">
              Read More
              <span class="herobox__arrow">&#129042;</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import HeroBox from "@/components/HeroBox.vue";
import Button from "@/components/Button.vue";
import { workData, WorkDataType } from "@/data/workData";
import { featuresData, FeaturesDataType } from "@/data/featuresData";
import { UserDataType } from "@/data/usersData";
import faqData, { FaqDataType } from "@/data/faqData";
import blogData, { BlogDataType } from "@/data/blogData";

export default defineComponent({
  name: "Home",
  components: {
    HeroBox,
    Button,
  },
  data: () => {
    return {
      workData: workData as WorkDataType[],
      featuresData: featuresData as FeaturesDataType[],
      userData: [] as UserDataType[],
      testimonialIndex: 0,
      faqData: faqData as FaqDataType[],
      formData: {
        name: "",
        email: "",
        link: "",
      },
      blogData: blogData as BlogDataType[],
    };
  },
  methods: {
    testimonialClickRight() {
      if (this.testimonialIndex === this.userData.length - 1) {
        this.testimonialIndex = 0;
      } else {
        this.testimonialIndex += 1;
      }
    },
    testimonialClickLeft() {
      if (this.testimonialIndex === 0) {
        this.testimonialIndex = this.userData.length - 1;
      } else {
        this.testimonialIndex -= 1;
      }
    },
    toggleAccordion(id: number) {
      this.faqData.forEach((faq) => {
        if (faq.id !== id) {
          faq.isOpen = false;
        } else if (faq.id === id) {
          faq.isOpen = !faq.isOpen;
        }
      });
    },
  },
  created() {
    axios
      .get<UserDataType[]>("https://testimonialapi.toolcarton.com/api")
      .then((res) => {
        this.userData = res.data;
        console.log(this.userData);
      });
  },
});
</script>

<style lang="scss">
.work {
  background-color: $grey;
}

.work__wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 128px 0;
  gap: 0 142px;
}

.work__text-container {
  width: 100%;
  max-width: 400px;
}

.work__grid {
  display: grid;
  width: 100%;
  max-width: 650px;
  gap: 48px;
  grid-template-columns: repeat(auto-fit, 300px);
}

.projects__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.project__container {
  position: relative;
  overflow: hidden;

  &:hover {
    .project__text-container {
      transform: translateX(0);
    }
  }
}

.project__text-container {
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  max-width: 400px;
  background: linear-gradient(
    329.39deg,
    #1c1e53 -10.96%,
    rgba(28, 30, 83, 0.42) 103.96%
  );
}

.features {
  background-color: $grey;
}

.features__wrapper {
  padding: 128px 0;
  display: grid;
  justify-items: center;
  gap: 50px 0;
}

.features__top {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 100%;
  max-width: 630px;
}

.features__content {
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 400px);
  gap: 24px 32px;
}

.card {
  color: $blueDark;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 60px 48px 48px;
}

.card__logo {
  width: 100%;
  max-width: 32px;
}

.card__heading {
  margin: 22px 0 12px;
}

.testimonials {
  background-color: $grey;
}

.testimonials__left {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 330px;
  gap: 16px 0;
}

.testimonials__wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 128px 0;
}

.testimonials__right {
  display: grid;
  align-content: space-between;
  gap: 48px 0;
  width: 100%;
  max-width: 840px;
  height: 300px;
}

.testimonial__bottom {
  display: flex;
  justify-content: space-between;
}

.profile__container {
  display: flex;
  align-items: center;
  gap: 0 14px;
}

.profile__image {
  width: 52px;
  border-radius: 50%;
}

.profile__text-container {
  display: grid;
  gap: 10px 0;
}

.testimonial__button-container {
  display: flex;
  align-items: center;
  gap: 0 10px;
}

.testimonial__button-wrapper {
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: $purple;

    .testimonial__button {
      filter: invert(1);
    }
  }
}

.testimonial__button--right {
  transform: rotate(180deg);
}

.faq {
  background-color: #fff;
}

.faq__text-container {
  width: 100%;
  max-width: 330px;
}

.faq__wrapper {
  display: flex;
  justify-content: space-between;
  padding: 64px 0;
}

.faq__accordion-container {
  width: 100%;
  max-width: 760px;
}

.faq__accordion {
  width: 100%;
  border-top: 2px solid #ececf1;

  &:first-of-type {
    border-top: none;
  }
}

.accordion {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.accordion__number {
  color: $blueTint;
  font-weight: bold;
}

.accordion__button-wrapper {
  width: 100%;
  max-width: 870px;
}

.accordion__container {
  display: flex;
  align-items: center;
  gap: 0 60px;
  width: 100%;
  background-color: transparent;
  border: none;
  padding: 32px 0;
  cursor: pointer;
  outline: none;
  transition: 0.4s;
}

.accordion__wrapper {
  width: 100%;
  max-width: 800px;
}

.accordion__panel {
  width: 100%;
  max-width: 620px;
  transform: translateX(86px);
  display: none;
  overflow: hidden;
  margin-bottom: 48px;
}

.accordion__plus {
  transform: rotate(0deg);
  transition: transform 0.4s;
}

.accordion__plus--open {
  transform: rotate(45deg);
}

.inquiry {
  padding: 64px 0;
}

.inquiry__wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  min-height: 700px;
  z-index: 2;
}

.inquiry__image {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.inquiry__content-wrapper {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
}

.content__text-container {
  color: #fff;
  background-color: rgba(28, 30, 83, 0.5);
  padding: 96px 96px 0;
  display: flex;
  flex-direction: column;
  gap: 24px 0;
}

.inquiry__form {
  color: #fff;
  background-color: $blueTint;
  padding: 96px 96px 48px;
}

.form {
  display: grid;
  gap: 16px 0;
}

.form__container {
  display: grid;
  gap: 40px 0;
}

.form__bottom {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px 0;
}

.form__link {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  color: #fff;
}

.form__input {
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  padding: 18px 32px;
  background-color: transparent;
  color: #fff;

  &::placeholder {
    color: #f4f6fc;
  }
}

.form__button {
  width: 100%;
}

.blog {
  background-color: #fff;
  padding: 64px 0 128px;
}

.blog__container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 405px);
  gap: 32px;
  padding-top: 64px;
}

.blog__image {
  width: 100%;
}

.blog__text-container {
  display: grid;
  gap: 16px 0;
  margin: 40px 0 32px;
}

.blog__link {
  color: #000;
}
</style>
