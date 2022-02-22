<template>
  <div class="section section__herobox">
    <div class="container">
      <HeroBox
        title="All the features you need"
        hero-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        button-text-one="View our work"
        hero-image="hero_features.png"
      ></HeroBox>
    </div>
  </div>
  <div class="section">
    <div class="container">
      <div class="benefits features__benefits">
        <h2 class="heading__2 benefits__heading features__benefits-heading">
          The benefits of working with our team
        </h2>
        <div class="benefits__container features__benefits-contianer">
          <Card :cardData="benefits" className="benefits__card" />
        </div>
        <div class="benefits__extras fetures__extras">
          <div class="extras__left">
            <h3 class="heading__3">100.000+</h3>
            <span class="body__1">Finsweet Users</span>
          </div>
          <div class="extras__right">
            <img
              src="@/assets/extras/logo_one.svg"
              alt="logo_one"
              class="extras__logo"
            />
            <img
              src="@/assets/extras/logo_two.svg"
              alt="logo_two"
              class="extras__logo"
            />
            <img
              src="@/assets/extras/logo_three.svg"
              alt="logo_three"
              class="extras__logo"
            />
            <img
              src="@/assets/extras/logo_four.svg"
              alt="logo_four"
              class="extras__logo"
            />
            <img
              src="@/assets/extras/logo_five.svg"
              alt="logo_five"
              class="extras__logo"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="section section__info">
    <div class="container">
      <div class="mission__wrapper">
        <div class="mission__content">
          <span class="label__2">Use Client-first</span>
          <h3 class="heading__3">
            Top agencies and freelancers around the world use Client-first
          </h3>
          <p class="body__1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <div class="mission__image-wrapper">
          <img
            src="https://images.pexels.com/photos/7176030/pexels-photo-7176030.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt="mission__image"
            class="mission__image"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="section section__info--grey">
    <div class="container">
      <div class="mission__wrapper info__wrapper--reverse">
        <div class="mission__content">
          <span class="label__2">Free Revision Rounds</span>
          <h3 class="heading__3">
            Get free Revisions and one week of free maintenance
          </h3>
          <p class="body__1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div class="mission__image-wrapper">
          <img
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="mission__image"
            class="mission__image"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="section">
    <div class="container">
      <div class="mission__wrapper">
        <div class="mission__content">
          <span class="label__2">24/7 Support</span>
          <h3 class="heading__3">
            Working with us, you will be getting 24/7 priority support
          </h3>
          <p class="body__1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div class="mission__image-wrapper">
          <img
            src="https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="mission__image"
            class="mission__image"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="section section__info--yellow">
    <div class="container">
      <div class="mission__wrapper info__wrapper--reverse">
        <div class="mission__content">
          <span class="label__2">Quick Delivery</span>
          <h3 class="heading__3">
            Guranteed 1 week delivery for standard five pager website
          </h3>
          <p class="body__1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div class="mission__image-wrapper">
          <img
            src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="mission__image"
            class="mission__image"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="section">
    <div class="container">
      <div class="faq">
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeroBox from "@/components/HeroBox.vue";
import { benefitsData, CardType } from "@/data/cardData";
import Card from "@/components/Card.vue";
import faqData, { FaqDataType } from "@/data/faqData";

export default defineComponent({
  name: "Features",
  components: {
    HeroBox,
    Card,
  },
  data() {
    return {
      benefits: benefitsData as CardType[],
      faqData: faqData as FaqDataType[],
    };
  },
  methods: {
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
});
</script>

<style lang="scss">
.features__benefits {
  grid-auto-flow: dense;
}

.fetures__extras {
  grid-row: 1;
}

.features__benefits-heading {
  grid-row: 2;
}

.features__benefits-contianer {
  grid-row: 3;
}

.info__content {
  padding: 128px 160px;
  &:nth-of-type(2) {
    background-color: $grey;
  }

  &:nth-of-type(4) {
    background-color: $yellowLight;
  }
}

.info__wrapper--reverse {
  flex-wrap: wrap;
  flex-direction: row-reverse;
}

.section__info--grey {
  background-color: $grey;
}

.section__info--yellow {
  background-color: $yellowLight;
}
</style>
