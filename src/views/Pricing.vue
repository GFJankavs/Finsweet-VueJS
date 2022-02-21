<template>
  <div class="section">
    <div class="container">
      <div class="pricing">
        <div class="pricing__top">
          <h2 class="heading__2">Our Pricing Plans</h2>
          <p class="body__2">
            When you’re ready to go beyond prototyping in Figma, Webflow is
            ready to help you bring your designs to life — without coding them.
          </p>
        </div>
        <div class="pricing__content">
          <div
            class="pricing__option"
            v-for="option of pricingOptions"
            :key="option.title"
          >
            <div class="option__elipse" />
            <div class="option__content-wrapper">
              <div class="option__top">
                <div class="option__price-container">
                  <h3 class="heading__3 option__price">
                    {{ `$${option.top.price}` }}
                  </h3>
                  <span class="body__1 option__type">{{
                    option.top.type
                  }}</span>
                </div>
                <div class="option__title-container">
                  <h6 class="heading__6">{{ option.title }}</h6>
                  <p class="body__2">{{ option.description }}</p>
                </div>
                <div class="option__features-list">
                  <div
                    class="option__feature"
                    v-for="feature of option.features"
                    :key="feature.text"
                  >
                    <img
                      :class="
                        feature.isAvailable
                          ? 'feature__pointer'
                          : 'feature__pointer feature__pointer--unavailable'
                      "
                      :src="
                        feature.isAvailable
                          ? require('@/assets/pointer_available.svg')
                          : require('@/assets/pointer_unavailable.svg')
                      "
                      :alt="feature.text"
                    />
                    <span class="body__1">
                      {{ feature.text }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="option__button-container">
                <Button
                  text="Get Started"
                  :classname="
                    option.title === 'Website Page'
                      ? 'button button--light option__button'
                      : 'button button--dark option__button'
                  "
                />
              </div>
            </div>
          </div>
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
import pricingData, { PricingDataType } from "@/data/pricingData";
import Button from "@/components/Button.vue";
import faqDataOne, { FaqDataType } from "@/data/faqData";

export default defineComponent({
  name: "Pricing",
  components: {
    Button,
  },
  data() {
    return {
      pricingOptions: pricingData as PricingDataType[],
      faqData: faqDataOne as FaqDataType[],
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
.pricing,
.pricing__top {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pricing__top {
  width: 100%;
  max-width: 560px;
  gap: 16px 0;
}

.pricing__content {
  display: grid;
  grid-template-columns: repeat(auto-fill, 405px);
  gap: 32px;
  width: 100%;
  margin-top: 64px;
}

.pricing__option {
  padding: 64px 48px;
  background-color: $grey;
  overflow: hidden;
  position: relative;
  border-radius: 12px;

  &:nth-of-type(2) {
    background-color: $blueTint;
    color: #fff;

    .option__type {
      color: $yellow;
    }

    .option__features-list {
      margin: 56px 0 80px;
    }
  }
}

.option__content-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.option__elipse {
  position: absolute;
  z-index: 2;
  transform: translateX(-37%);
  bottom: 155px;
  width: 1150px;
  height: 1150px;
  background-color: rgba(255, 255, 255, 0.06);
  border-radius: 50%;
}

.option__content-wrapper {
  position: relative;
  z-index: 3;
}

.option__price-container,
.option__feature {
  display: flex;
  align-items: center;
}

.option__price-container {
  margin-bottom: 20px;
}

.option__title-container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px 0;
}

.option__type {
  color: $blueRoyal;
  margin-left: 10px;
}

.option__features-list {
  display: grid;
  gap: 20px 0;
  margin: 80px 0;
}

.feature__pointer {
  margin-right: 10px;
}

.feature__pointer--unavailable {
  filter: grayscale(100%);
}

.option__button-container {
  display: flex;
  justify-content: center;
}

.option__button {
  width: 100%;
  max-width: 250px;
  &:nth-of-type(even) {
    background-color: $yellow;
    color: #1b1c2a;

    &:hover {
      background-color: #fde4a6;
    }
  }
}

.faq {
  display: flex;
  justify-content: space-between;
}
</style>
